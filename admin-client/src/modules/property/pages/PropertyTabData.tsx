import { Search, SwapVert } from "@mui/icons-material";
import { Box, Button, Card, CardContent, CardMedia, Chip, Divider, InputAdornment, TextField, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import { Notes } from "./NotesList";
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import FileUploadIcon from '@mui/icons-material/FileUpload';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export function PropertyTabData() {
  const [showUpload, setShowUpload] = useState(false);

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>    <TabPanel value={value} index={0}>
      <Box>
        <Box sx={{
          bgcolor: "background.paper", p: 2, mb: 2, borderRadius: (theme) => theme.spacing(1.5), display: 'flex',
          alignItems: 'center'
        }} >
          <img src="/dropimg.jpg" width="100px" />
          <Box sx={{ ml: 1 }}>
            <Typography component="h5" variant="h6" sx={{ fontWeight: 'bold' }}>Daybreak Plaza</Typography>
            <Typography component="h6" variant="subtitle2" sx={{ display: 'flex', alignItems: 'center', my: '2px' }}> <HomeIcon sx={{ fontSize: 'medium', mr: 1 }} /> Prime Building LLS</Typography>
            <Typography component="h6" variant="subtitle2" sx={{ display: 'flex', alignItems: 'center' }}> <LocationOnIcon sx={{ fontSize: 'medium', mr: 1 }} /> 1234 Main St., San Francisco, California - 94102 </Typography>
          </Box>
        </Box>

        <Notes />

        <Box sx={{
          bgcolor: "background.paper", p: 2, mb: 2, borderRadius: (theme) => theme.spacing(1.5)
        }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Owners (2) </Typography>

          <Box sx={{ display: "flex", flex: 1, width: "100%", backgroundColor: " #E2E8F0", padding: 1 }}>
            <Typography variant="subtitle2" sx={{ width: '30%', fontWeight: "bold", display: 'flex', alignItems: 'center' }}>
              Owner Name <SwapVert fontSize="small" sx={{ fontSize: '1rem', ml: 1 }} />
            </Typography>
            <Typography variant="subtitle2" sx={{ width: '15%', fontWeight: "bold", display: 'flex', alignItems: 'center' }}>
              <SwapVert fontSize="small" sx={{ fontSize: '1rem', mr: 1 }} /> Ownership
            </Typography>
            <Box sx={{ mx: 2 }} />
            <Typography variant="subtitle2" sx={{ flexGrow: 1, fontWeight: "bold", display: 'flex', alignItems: 'center' }}>
              Contact<SwapVert fontSize="small" sx={{ fontSize: '1rem', ml: 1 }} />
            </Typography>
          </Box>

          <Box sx={{
            display: 'flex', alignItems: 'center', width: '100%', px: 1, py: 2
          }}>
            <Typography variant="subtitle2" sx={{ width: '30%' }} >
              Roger J. Rosen Family Trust
            </Typography>

            <Typography variant="subtitle2" sx={{ width: '15%', textAlign: 'right' }} >
              45%
            </Typography>
            <Box sx={{ mx: 2 }} />
            <Box sx={{ display: 'flex', alignItems: 'center' }}>

              <Tooltip title={
                <Box sx={{ bgcolor: "background.paper", color: '#000', p: 2, borderRadius: 2 }}>
                  <Typography variant="subtitle2">Doug Hale</Typography>
                  <Typography variant="subtitle2">818-879-9962</Typography>
                  <Typography variant="subtitle2">hale@properties.com</Typography>
                  <Typography variant="subtitle2" sx={{ my: 1 }}>Roll:   <Chip label="Property Owner" size="small" component="a" color="primary" href="#basic-chip" sx={{ ml: 1 }} /> </Typography>
                  <Typography variant="subtitle2">Tags: <Chip label="Main Contact" component="a" color="primary" href="#basic-chip" size="small" sx={{ ml: 1 }} /> </Typography>
                </Box>
              }>
                <Chip label="Doug Hale" component="a" color="primary" href="#basic-chip" clickable />
              </Tooltip>

              <Chip label="Robert Smart" component="a" color="primary" href="#basic-chip" clickable sx={{ ml: 1 }} />
            </Box>
          </Box>
          <Divider />

          <Box sx={{
            display: 'flex', alignItems: 'center', width: '100%', px: 1, py: 2
          }}>
            <Typography variant="subtitle2" sx={{ width: '30%' }} >
              DRW Real Estate
            </Typography>

            <Typography variant="subtitle2" sx={{ width: '15%', textAlign: 'right' }} >
              55%
            </Typography>
            <Box sx={{ mx: 2 }} />
            <Box sx={{ display: 'flex', alignItems: 'center' }}>

              <Tooltip title={
                <Box sx={{ bgcolor: "background.paper", color: '#000', p: 2, borderRadius: 2 }}>
                  <Typography variant="subtitle2">Doug Hale</Typography>
                  <Typography variant="subtitle2">818-879-9962</Typography>
                  <Typography variant="subtitle2">hale@properties.com</Typography>
                  <Typography variant="subtitle2" sx={{ my: 1 }}>Roll:   <Chip label="Property Owner" size="small" component="a" color="primary" href="#basic-chip" sx={{ ml: 1 }} /> </Typography>
                  <Typography variant="subtitle2">Tags: <Chip label="Main Contact" component="a" color="primary" href="#basic-chip" size="small" sx={{ ml: 1 }} /> </Typography>
                </Box>
              }>
                <Chip label="Doug Hale" component="a" color="primary" href="#basic-chip" clickable />
              </Tooltip>

              <Chip label="Robert Smart" component="a" color="primary" href="#basic-chip" clickable sx={{ ml: 1 }} />
            </Box>
          </Box>
          <Divider />
        </Box>
      </Box>
    </TabPanel>

      <TabPanel value={value} index={0}>
        <Box sx={{ bgcolor: "background.paper", color: '#000', p: 2, borderRadius: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography sx={{
              display: 'flex', alignItems: 'center'
            }} variant="subtitle2">Cop Docs <KeyboardArrowDownIcon sx={{ fontSize: 'small', ml: 1 }} /> </Typography>
            <Box sx={{ textAlign: 'right', display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
                fullWidth
                type="text"
                variant="outlined"
                placeholder="Search"
                size="small"
                sx={{ width: '50%' }}
              />
              <FormatListBulletedIcon sx={{ border: '1px solid #000', width: '40px', height: '40px', padding: 1, borderRadius: 1, mx: 2 }} />
              <Box sx={{ position: 'relative' }}>
                <Button size="large" variant="contained" autoFocus onClick={() => setShowUpload(showuploadbox => !showuploadbox)}>
                  New +
                </Button>
                {showUpload && <Box sx={{ width: '280px', zIndex: '99999999', position: 'absolute', right: 0, top: 55, padding: 1, border: '1px solid #000', bgcolor: 'background.paper', borderRadius: (theme) => theme.spacing(.3) }}>
                  <Typography variant="subtitle2" sx={{ display: 'flex', alignItems: 'center', py: 1 }}> <CreateNewFolderIcon sx={{ mr: 1 }} /> New Folder</Typography>
                  <Divider />
                  <Typography variant="subtitle2" sx={{ display: 'flex', alignItems: 'center', py: 1 }}> <FileUploadIcon sx={{ mr: 1 }} /> File Upload</Typography>
                  <Typography variant="subtitle2" sx={{ display: 'flex', alignItems: 'center', py: 1 }}> <FileUploadIcon sx={{ mr: 1 }} /> Folder Upload</Typography>
                </Box>}
              </Box>
            </Box>

          </Box>
          <Divider sx={{ my: 2 }} />

          <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="subtitle2" sx={{ textTransform: "uppercase", mb: 1, fontWeight: '600' }}>Folders</Typography>
              <Button variant="text" sx={{}}>  <SwapVert fontSize="small" sx={{ fontSize: '1rem', ml: 1 }} /> Sort By Name</Button>
            </Box>
            <Box>
              <Button
                variant="outlined"
                size="medium"
                sx={{ mr: 1 }}
              >
                <FolderCopyIcon sx={{ mr: 1 }} />
                All Documents
              </Button>

              <Button
                variant="outlined"
                size="medium"
                sx={{ mr: 1 }}
              >
                <FolderCopyIcon sx={{ mr: 1 }} />
                Business License
              </Button>

              <Button
                variant="outlined"
                size="medium">
                <FolderCopyIcon sx={{ mr: 1 }} />
                W-9
              </Button>
            </Box>
          </Box>

          <Box>
            <Typography variant="subtitle2" sx={{ textTransform: "uppercase", mb: 1, fontWeight: '600' }}>Files</Typography>
            <Box sx={{ display: 'block' }}>
              <Box sx={{ display: "inline-block", width: '180px', border: '1px solid #0F172A', padding: 1, borderRadius: (theme) => theme.spacing(1.5), mr: 2, mb: 2 }}>
                <Box component="img" src="../../dropimg.jpg" sx={{ width: '100%' }} />
                <Typography sx={{ textAlign: 'center' }} variant="body2" color="text.secondary">
                  abc.pdf
                </Typography>
              </Box>

              <Box sx={{ display: "inline-block", width: '180px', border: '1px solid #0F172A', padding: 1, borderRadius: (theme) => theme.spacing(1.5), mr: 2, mb: 2 }}>
                <Box component="img" src="../../dropimg.jpg" sx={{ width: '100%' }} />
                <Typography sx={{ textAlign: 'center' }} variant="body2" color="text.secondary">
                  abc.pdf
                </Typography>
              </Box>

              <Box sx={{ display: "inline-block", width: '180px', border: '1px solid #0F172A', padding: 1, borderRadius: (theme) => theme.spacing(1.5), mr: 2, mb: 2 }}>
                <Box component="img" src="../../dropimg.jpg" sx={{ width: '100%' }} />
                <Typography sx={{ textAlign: 'center' }} variant="body2" color="text.secondary">
                  abc.pdf
                </Typography>
              </Box>

              <Box sx={{ display: "inline-block", width: '180px', border: '1px solid #0F172A', padding: 1, borderRadius: (theme) => theme.spacing(1.5), mr: 2, mb: 2 }}>
                <Box component="img" src="../../dropimg.jpg" sx={{ width: '100%' }} />
                <Typography sx={{ textAlign: 'center' }} variant="body2" color="text.secondary">
                  abc.pdf
                </Typography>
              </Box>

              <Box sx={{ display: "inline-block", width: '180px', border: '1px solid #0F172A', padding: 1, borderRadius: (theme) => theme.spacing(1.5), mr: 2, mb: 2 }}>
                <Box component="img" src="../../dropimg.jpg" sx={{ width: '100%' }} />
                <Typography sx={{ textAlign: 'center' }} variant="body2" color="text.secondary">
                  abc.pdf
                </Typography>
              </Box>

            </Box>
          </Box>

        </Box>
      </TabPanel>
    </>

  );
}