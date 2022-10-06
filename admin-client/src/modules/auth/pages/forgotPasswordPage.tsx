import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Snackbar,
  TextField,
  Typography
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Injector } from "../../../injector";
import { Validator } from "../../../utils/validator";
import { LandingView } from "../widgets/landingView";

export function ForgotPasswordPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailError, setError] = useState("");
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState<string[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const listner = Injector.authManager.isLoggedIn().subscribe(loggedIn => {
      if (loggedIn) navigate('/', { replace: true });
    });
    return () => listner.unsubscribe();
  }, [navigate]);

  const handleSubmit = async () => {
    if (email === "") {
      setError("Email is required");
      return;
    } else if (!Validator.isValidEmail(email)) {
      setError("Invalid email");
      return;
    } else {
      setError("");
    }

    setLoading(true);
    setErrors([]);

    try {
      await Injector.authManager.forgotPassword(email);
      setOpen(true);
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      setErrors([`${error}`]);
    }
    setLoading(false);
  };

  return (
    <LandingView>
      <Box sx={{ width: "100%", padding: 4, backgroundColor: '#fff', borderRadius: theme => theme.spacing(2) }}>
        <Typography variant="h5" textAlign="left">
          Reset Password
        </Typography>
        <Box mt={4} />

        <form>
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            fullWidth
            helperText={emailError}
            error={!!emailError}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
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
            type="submit"
            fullWidth
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? (
              <CircularProgress
                color="success"
                sx={{ maxHeight: 30, maxWidth: 30 }}
              />
            ) : (
              "Submit"
            )}
          </Button>
          <Box mt={2} />

          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button fullWidth variant="text" disabled={loading}>
              Back To Login
            </Button>
          </Link>
        </form>

        <Snackbar
          open={open}
          autoHideDuration={3000}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert severity="success">
            Password reset email sent to registered email id.
          </Alert>
        </Snackbar>
      </Box>
    </LandingView>
  );
}
