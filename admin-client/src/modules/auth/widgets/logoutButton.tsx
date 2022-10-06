import { Button, Snackbar } from "@mui/material";
import React, { useState } from "react";
import { Injector } from "../../../injector";

export function LogoutButton() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      await Injector.authManager.logout();
      setOpen(true);
    } catch (e) {
      setError(`${e}`);
    }
    setLoading(false);
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleClick}
        disabled={loading}>
        Log Out
      </Button>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        message={error || "Logout successfully!"}
      />
    </>
  );
}