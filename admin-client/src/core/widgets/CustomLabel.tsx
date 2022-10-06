import React from "react";
import { Typography, SxProps, Theme, Box } from "@mui/material";


interface Props {
  label: string;
  sx?: SxProps<Theme>;
  children: React.ReactNode;
}

export function CustomLabel(props: Props) {
  return (
    <Box sx={{ flex: 1, mt: 1, ...props.sx }}>
      <Typography variant="caption" sx={{ fontWeight: 'bold', ml: 0.5 }}>{props.label}</Typography>
      {props.children}
    </Box>
  );
}