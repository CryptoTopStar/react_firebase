import { Breakpoint, Container, SxProps, Theme } from "@mui/material";
import React from "react";

interface Props {
  maxWidth?: Breakpoint | false;
  sx?: SxProps<Theme>;
  children: React.ReactNode;
}

export function PageContainer(props: Props) {
  <Container maxWidth="lg" sx={{ padding: 3 }}>
    {props.children}
  </Container>
}