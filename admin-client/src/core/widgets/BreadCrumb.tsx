import React from "react";
import { Box, SxProps, Theme, Breadcrumbs, Stack, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

interface Props {
  breadcrumb: string;
  breadcrumb2: string;
  sx?: SxProps<Theme>;
  children: React.ReactNode;
}

export function BreadCrumb(props: Props) {
  const breadcrumbs = [
    <Link underline="hover" key="1" href="/">
      {props.breadcrumb}
    </Link>,
    <Typography key="2" color="text.primary">
      {props.breadcrumb2}
    </Typography>,
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        // py: 4,
        p: 2,
        backgroundColor: '#fff'
      }}
    >
      <Stack spacing={2}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>

      <Box>
        {props.children}
      </Box>
    </Box>
  );
}