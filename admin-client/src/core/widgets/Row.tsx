import { Stack, SxProps, Theme } from "@mui/material";
import React from "react";

interface Props {
  gap?: number;
  sx?: SxProps<Theme>;
  children: React.ReactNode;
}

export function Row(props: Props) {
  return (
    <Stack direction="row" gap={props.gap} sx={{ display: 'flex', width: "100%", ...props.sx }}>
      {props.children}
    </Stack>
  );
}