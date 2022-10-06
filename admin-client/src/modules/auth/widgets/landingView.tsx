import CircleIcon from '@mui/icons-material/Circle';
import { Box, Container, Grid, Typography } from "@mui/material";
import Link from '@mui/material/Link';
import { Column } from "../../../core/widgets/Column";
import React from 'react';

interface Props {
  children: any;
}

export function LandingView(props: Props) {
  return (
    <Column sx={{ minHeight: '100vh' }}>
      <Box sx={{ display: 'flex', flex: 1, position: 'relative', }}>
        <Box
          sx={{
            position: "absolute",
            width: '100%',
            height: '100%',
            backgroundImage: `url('/landing_background.jpg')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: "center",
            zIndex: 1,
          }} />
        <Box sx={{
          position: "absolute",
          bgcolor: '#000a',
          width: '100%',
          height: '100%',
          backgroundImage: {
            xs: 'linear-gradient(to bottom, #00305ba6 10% , transparent 55%)',
            md: 'linear-gradient(to right, #00305ba6 45% , transparent 55%)',
          },
          zIndex: 2,
        }} />

        <Container maxWidth="xl" sx={{ zIndex: 3, minHeight: 'calc(100% - 40px)' }}>
          <Grid container sx={{ height: '100%', padding: 3 }}>
            <Grid
              item
              xs={12}
              md={7}
              lg={8}
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}>
              <Box sx={{
                width: { xs: "100%", md: "50%" },
                height: { xs: "40px", md: "20%" },
                marginBottom: { xs: 3, md: 0 },
              }}>
                <img
                  width="100%"
                  height="100%"
                  src="/logo.png"
                  loading="lazy"
                  style={{
                    objectFit: 'contain',
                  }}
                />
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              md={5}
              lg={4}
              sx={{
                display: "flex",
                flex: 1,
                alignItems: "center",
              }}
            >
              {props.children}
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: theme => theme.palette.primary.main, height: '40px' }}>
        <Link href="/" sx={{ color: '#fff' }}>
          <Typography variant='caption'>Terms of Use</Typography>
        </Link>
        <CircleIcon sx={{ fontSize: '3px', color: '#fff', mx: 2 }} />
        <Link href="/" sx={{ color: '#fff' }}>
          <Typography variant='caption'>Data Policy</Typography>
        </Link>
        <CircleIcon sx={{ fontSize: '3px', color: '#fff', mx: 2 }} />
        <Link href="/" sx={{ color: '#fff' }}>
          <Typography variant='caption'>Privacy Policy</Typography>
        </Link>
      </Box>

    </Column >
  );
}
