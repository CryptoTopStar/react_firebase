import { Box, SxProps, Theme } from "@mui/material";
import React from "react";

interface Props {
  sx?: SxProps<Theme>;
  children: React.ReactNode;
}





export function Column(props: Props) {
  return (
    <Box sx={{ display: 'flex', flexDirection: "column", width: "100%", ...props.sx }}>
      {props.children}
    </Box>
  );
}