import SearchIcon from '@mui/icons-material/Search';
import { Box, Checkbox, Container, IconButton, InputBase, Paper, Typography } from "@mui/material";
import React from 'react';
// import 'react-calendar/dist/Calendar.css';
import { Column } from '../../../core/widgets/Column';
import { Row } from '../../../core/widgets/Row';
// import { ScheduleComponent, Inject, Day, Week, Month, ViewDirective, ViewsDirective } from '@syncfusion/ej2-react-schedule';


export function CalenderPage() {

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <Container maxWidth="xl">
      <Row>
        <Column sx={{ width: "20%", padding: 3 }}>
          <Box sx={{ m: 1 }}>
            <Typography variant='h6'>People</Typography>

            <Paper sx={{ p: '1px 1px', display: 'flex', alignItems: 'center' }}>
              <IconButton type="button" aria-label="search">
                <SearchIcon />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Name" />
            </Paper>
            <Box sx={{ m: 1 }}>
              <Typography>
                <Checkbox {...label} color="secondary" />Samantha
              </Typography>
              <Typography>
                <Checkbox {...label} color="success" />Jack
              </Typography>
              <Typography>
                <Checkbox {...label} color="success" />Joe
              </Typography>
              <Typography>
                <Checkbox {...label} color="success" />Michael
              </Typography>
            </Box>
          </Box>
        </Column>
        <Column>
          <Box sx={{ marginTop: 3, backgroundColor: "orange", width: "100%" }}>
            {/* <ScheduleComponent>
              <ViewsDirective>
                <ViewDirective option='Day' />
                <ViewDirective option='Week' />
                <ViewDirective option='Month' />
              </ViewsDirective>
              <Inject services={[Day, Week, Month]} />
            </ScheduleComponent> */}
          </Box>
        </Column>
      </Row>
    </Container>
  );
}
