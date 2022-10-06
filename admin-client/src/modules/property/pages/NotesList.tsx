import React from "react";
import { Avatar, Box, TextField, Typography } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';

export function Notes() {
  return (
    <Box sx={{ bgcolor: "background.paper", p: 2, mb: 2, borderRadius: (theme) => theme.spacing(1.5) }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Notes </Typography>
      <Box sx={{ p: 2, background: '#F8FAFC', minHeight: '400px', position: 'relative', borderRadius: (theme) => theme.spacing(1.2) }}>
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src="/broken-image.jpg" />
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', ml: 1 }}>Samantha Mag </Typography>
            <CircleIcon sx={{ mx: 1, fontSize: '6px' }} />
            <Typography variant="caption">09-09-2022 10:39</Typography>
          </Box>
          <Typography variant="subtitle2" sx={{ ml: 6, borderRadius: (theme) => theme.spacing(1.5), padding: (theme) => theme.spacing(1.5), bgcolor: "background.paper", }}>Unit 101 has postponed the call yesterday, anyone please call back tomorrow.</Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src="/broken-image.jpg" />
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', ml: 1 }}>Mark Hoodie </Typography>
            <CircleIcon sx={{ mx: 1, fontSize: '6px' }} />
            <Typography variant="caption">09-09-2022 12:47</Typography>
          </Box>
          <Typography variant="subtitle2" sx={{ ml: 6, borderRadius: (theme) => theme.spacing(1.5), padding: (theme) => theme.spacing(1.5), bgcolor: "background.paper", }}>Sure I can handle that!</Typography>
        </Box>

        <TextField
          fullWidth
          id="outlined-basic"
          variant="outlined"
          placeholder="Type a Comment"
          size="small"
          sx={{ position: 'absolute', bottom: '5%', left: 0, right: 0, px: 0, bgcolor: "background.paper", mx: 'auto', width: '90%' }} />
      </Box>
    </Box>
  );
}