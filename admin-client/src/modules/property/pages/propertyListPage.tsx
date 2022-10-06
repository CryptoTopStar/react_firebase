import {
  Search, SwapVert
} from "@mui/icons-material";
import CreateIcon from '@mui/icons-material/Create';
import {
  Box,
  Button, Card, Container,
  FormControl, FormControlLabel, IconButton,
  InputBase, Radio, RadioGroup, Typography
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export function PropertyListPage() {
  return (
    <Container>
      <Box sx={{ display: "flex", margin: "20px 0", alignItems: 'center' }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold" }}
        >
          Properties(99)
        </Typography>

        <Card
          elevation={0}
          sx={{
            display: "flex",
            border: "1px solid grey",
            flexGrow: 2,
            ml: 3,
            height: '40px'
          }}
        >
          <IconButton type="button" size="small" disableRipple>
            <Search />
          </IconButton>
          <InputBase fullWidth placeholder="Search name, owner, address" />
        </Card>

        <FormControl sx={{ border: '1px solid gray', mx: 2, px: 1, borderRadius: '4px', height: '40px', }}>
          <RadioGroup row sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mr: 1 }}>Type: </Typography>
            <FormControlLabel value="All" control={<Radio />} label="All" />
            <FormControlLabel value="Building" control={<Radio />} label="Building" />
            <FormControlLabel value="Association" control={<Radio />} label="Association" />
          </RadioGroup>
        </FormControl>
        <Link to="add">
          <Button variant="contained" size="medium" sx={{ borderRadius: '4px', height: '40px' }}>
            Add Property
          </Button>
        </Link>
      </Box>

      <Card
        sx={{
          display: "flex",
          alignItems: 'center',
          justifyContent: "space-around",
          borderRadius: '4px',
          flexDirection: 'column',
          flex: 1,
          mt: 4,
          width: "100%",
        }}
      >

        <Box sx={{
          display: "flex",
          flex: 1,
          width: "100%",
          backgroundColor: " #E2E8F0",
          padding: 1,
        }}>
          <Box sx={{ width: '50px' }} />
          <Typography variant="subtitle2" sx={{ width: '100px', fontWeight: "bold" }}>
            IMAGE
          </Typography>
          <Box width="20px" />
          <Typography variant="subtitle2" sx={{ width: '25%', fontWeight: "bold" }}>
            PROPERTY NAME <SwapVert fontSize="small" sx={{ fontSize: '1rem', ml: 1 }} />
          </Typography>
          <Typography variant="subtitle2" sx={{ width: '25%', fontWeight: "bold" }}>
            ADDRESS <SwapVert fontSize="small" sx={{ fontSize: '1rem', ml: 1 }} />
          </Typography>
          <Typography variant="subtitle2" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            SIZE <SwapVert fontSize="small" sx={{ fontSize: '1rem', ml: 1 }} />
          </Typography>
          <Typography variant="subtitle2" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            TYPE <SwapVert fontSize="small" sx={{ fontSize: '1rem', ml: 1 }} />
          </Typography>
          <Typography variant="subtitle2" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            SUITS/UNITES <SwapVert fontSize="small" sx={{ fontSize: '1rem', ml: 1 }} />
          </Typography>
        </Box>

        <Box sx={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          width: "100%",
        }}>
          <IconButton sx={{ width: '50px' }}>
            <CreateIcon />
          </IconButton>

          <Box sx={{ width: '100px' }}>
            <img
              src="https://media.istockphoto.com/photos/two-story-home-near-in-suburb-of-chicago-picture-id1276724606?b=1&k=20&m=1276724606&s=170667a&w=0&h=asvVNSDVVH_aCaEQ37_z0t9AIjy-oc1hCdpQFVi9LzU="
              alt="Photo"
              width="80px"
              height="80px"
              style={{
                objectFit: 'cover',
                borderRadius: 10,
                margin: '10px',
              }}
            />
          </Box>
          <Box width="20px" />

          <Typography variant="subtitle2" sx={{
            width: '25%',
            fontWeight: "bold",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}>
            <Typography>Property Name</Typography>
            <Typography>Owner</Typography>
          </Typography>
          <Typography variant="subtitle2" sx={{ width: '25%' }}>
            Value
          </Typography>
          <Typography variant="subtitle2" sx={{ flexGrow: 1 }}>
            Value
          </Typography>
          <Typography variant="subtitle2" sx={{ flexGrow: 1 }}>
            Value
          </Typography>
          <Typography variant="subtitle2" sx={{ flexGrow: 1 }}>
            Value
          </Typography>
        </Box>
      </Card>
    </Container>
  );
}
