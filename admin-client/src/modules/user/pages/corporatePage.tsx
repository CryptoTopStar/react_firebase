import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import AddTenantDialog from '../../tenants/widgets/AddTenantDialog';


export function CorporatePage() {
  const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <>
      {/* CorporatePage */}
      <Box flex={1} width="100%" sx={{ backgroundColor: "#F9FAFB" }}>
        <AddTenantDialog open={open} onClose={() => setOpen(false)} />
        <Button variant="contained" size="small" onClick={() => setOpen(true)}>
          Tenant Dialog
        </Button>



      </Box>
    </>
  );
}
