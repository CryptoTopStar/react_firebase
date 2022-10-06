import { Button, Grid, Box, Typography, Container } from "@mui/material";
import React from "react";
import { BreadCrumb } from "../../../core/widgets/BreadCrumb";
import CreateIcon from '@mui/icons-material/Create';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import { Row } from "../../../core/widgets/Row";
import { Column } from "../../../core/widgets/Column";
import { PropertyTabs } from "./PropertyTabs";
import { PropertyTabData } from "./PropertyTabData";
import { Activities } from "./ActivitiesList";

export function PropertyDetailPage() {
  return (
    <>
      <BreadCrumb breadcrumb="Properties" breadcrumb2="Daybreak Plaza">
        <Button variant="text" sx={{}}> <CreateIcon sx={{ fontSize: 'medium', mr: 1 }} /> Edit Property</Button>
      </BreadCrumb>
      <Box sx={{ backgroundColor: '#F9FAFB', pt: 3 }}>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <PropertyTabs />
            </Grid>
            <Grid item xs={6}>
              <Box>
                <PropertyTabData />
              </Box>

            </Grid>
            <Grid item xs={4}>
              <Box>
                <Box sx={{ bgcolor: "background.paper", p: 2, mb: 2, borderRadius: (theme) => theme.spacing(1.5) }}>
                  <Row>
                    <Column>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <HomeWorkIcon />
                        <Box sx={{ ml: 3 }}>
                          <Typography variant="subtitle2">Type </Typography>
                          <Typography variant="subtitle2">Building </Typography>
                        </Box>
                      </Box>
                    </Column>
                    <Box sx={{ mx: 2 }} />
                    <Column>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <HomeWorkIcon />
                        <Box sx={{ ml: 3 }}>
                          <Typography variant="subtitle2">Size </Typography>
                          <Typography variant="subtitle2">31000 </Typography>
                        </Box>
                      </Box>
                    </Column>
                  </Row>

                  <Row>
                    <Column>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <HomeWorkIcon />
                        <Box sx={{ ml: 3 }}>
                          <Typography variant="subtitle2">Suites/Units </Typography>
                          <Typography variant="subtitle2">24 </Typography>
                        </Box>
                      </Box>
                    </Column>
                    <Box sx={{ mx: 2 }} />
                    <Column>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <HomeWorkIcon />
                        <Box sx={{ ml: 3 }}>
                          <Typography variant="subtitle2">Buildings </Typography>
                          <Typography variant="subtitle2">24 </Typography>
                        </Box>
                      </Box>
                    </Column>
                  </Row>
                </Box>

                <Activities />
              </Box>
            </Grid>

          </Grid>
        </Container>
      </Box>
    </>
  );
}