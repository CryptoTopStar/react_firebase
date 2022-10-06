import {
  Alert,
  Box,
  Button, CircularProgress, Snackbar, TextField,
  Typography
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Injector } from "../../../injector";
import { Validator } from "../../../utils/validator";
import { LandingView } from "../widgets/landingView";

export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState<string[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const listner = Injector.authManager.isLoggedIn().subscribe(loggedIn => {
      if (loggedIn) navigate('/', { replace: true });
    });
    return () => listner.unsubscribe();
  }, [navigate]);

  const checkEmail = () => {
    if (email === "") {
      setError("Email is required");
      return false;
    } else if (!Validator.isValidEmail(email)) {
      setError("Invalid email");
      return false;
    } else {
      setError("");
      return true;
    }
  };

  const checkPassword = () => {
    if (password === "") {
      setPasswordError("Password is required");
      return false;
    } else if (!Validator.isValidPassword(password)) {
      setPasswordError("Password must contains 6 characters");
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  };

  const submit = async () => {
    const isValidEmail = checkEmail();
    const isValidPassword = checkPassword();

    if (isValidEmail && isValidPassword) {
      setLoading(true);
      setErrors([]);
      try {
        await Injector.authManager.login(email, password);
        setOpen(true);
        setTimeout(() => navigate("/home"), 1500);
      } catch (error) {
        setErrors([`${error}`]);
      }
      setLoading(false);
    }
  };

  return (
    <LandingView>
      <Box sx={{ alignItems: 'center', alignSelf: 'center', width: "100%", padding: 4, background: '#fff', borderRadius: theme => theme.spacing(2) }}>
        <Typography variant="h5" textAlign="left">
          Welcome back!
        </Typography>
        <Box mt={4} />

        <form>
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            fullWidth
            disabled={loading}
            helperText={emailError}
            error={!!emailError}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Box mt={2} />

          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            disabled={loading}
            helperText={passwordError}
            error={!!passwordError}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Box mt={2} />

          {errors.map((error) => (
            <Typography
              key={error}
              sx={{ color: (theme) => theme.palette.error.main }}
            >
              {error}
            </Typography>
          ))}

          <Box mt={2} />

          <Button
            variant="contained"
            fullWidth
            disabled={loading}
            onClick={submit}
          >
            {loading ? (
              <CircularProgress
                color="success"
                sx={{ maxHeight: 30, maxWidth: 30 }}
              />
            ) : (
              "Login"
            )}
          </Button>
          <Box mt={2} />

          <Link to="/forgot-password" style={{ textDecoration: 'none' }}>
            <Button variant="text" fullWidth disabled={loading}>
              Forgot Password?
            </Button>
          </Link>
        </form>

        <Snackbar
          open={open}
          autoHideDuration={3000}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert severity="success">
            Logged in successfully!
          </Alert>
        </Snackbar>

      </Box>
    </LandingView>
  );
}
