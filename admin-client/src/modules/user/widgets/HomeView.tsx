import { Box, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Injector } from "../../../injector";

export function HomeView() {
  const [loggedIn, setLoggedIn] = useState<boolean>();

  useEffect(() => {
    const listner = Injector.authManager.isLoggedIn()
      .subscribe(loggedIn => setLoggedIn(loggedIn));
    return () => listner.unsubscribe();
  }, []);

  if (loggedIn === undefined) {
    return (
      <Box sx={{
        flex: 1,
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <CircularProgress />
      </Box>
    );
  }

  const to = loggedIn ? "/home" : "/login";

  return <Navigate to={to} />;
}
