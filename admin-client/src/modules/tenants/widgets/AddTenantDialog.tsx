import React, { useState } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Box, Button, Checkbox, Divider, FormControlLabel, FormGroup, Grid, InputAdornment, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import { Row } from '../../../core/widgets/Row';
import { CustomLabel } from '../../../core/widgets/CustomLabel';
import { CalendarToday } from '@mui/icons-material';
import { Column } from '../../../core/widgets/Column';
import { Link } from 'react-router-dom';

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
}

interface Props {
    open: boolean;
    onClose: () => void;
}

export default function AddTenantDialog(props: Props) {
    // const steps = ['Tenant Details', 'Lease Details', 'Rent Schedule'];
    // const [value, setValue] = React.useState<Dayjs | null>(null);
    const [show, setShow] = useState(false);
    const [number, setNumber] = React.useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setNumber(event.target.value as string);
    };

    const handleClose = () => {
        props.onClose();
    };

    const breadcrumbs = [
        <Link key="1" color="inherit" to="/" onClick={handleClick}>
            Corporate
        </Link>,
        <Link
            key="2"
            color="inherit"
            to="/material-ui/getting-started/installation/"
            onClick={handleClick}
        >
            Tenants
        </Link>,
        <Typography key="3" color="text.primary">
            Add Tenants
        </Typography>,
    ]

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 4 }}>
                <Stack spacing={2}>
                    <Breadcrumbs
                        separator={<NavigateNextIcon fontSize="small" />}
                        aria-label="breadcrumb"
                    >
                        {breadcrumbs}
                    </Breadcrumbs>
                </Stack>

                <Box>
                    <Button variant="outlined" autoFocus onClick={handleClose}>
                        Cancel
                    </Button>

                    <Button variant="contained" autoFocus sx={{ ml: 2 }} >
                        Continue
                    </Button>
                </Box>
            </Box>


            {/* --------Step 1----- */}

            {/* <Typography component="h6" variant="h6">Step 1</Typography> */}

            <Box sx={{ width: '60%', marginLeft: 'auto', marginRight: 'auto' }}>
                <Box sx={{ backgroundColor: '#fff', p: 2, mb: 1, borderRadius: theme => theme.spacing(1.5) }}>
                    <Typography component="h6" variant="subtitle2" sx={{ fontWeight: 'bold' }}>Tenant Details</Typography>
                    <Divider sx={{ mb: 2, pt: 1 }} />

                    <Grid container spacing={4}>
                        <Grid item xs={12} lg={6} md={6}>
                            <CustomLabel label="Name">
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    placeholder="e.g. Smith and Brothers LLC"
                                    size="small"
                                />
                            </CustomLabel>
                        </Grid>

                        <Grid item xs={12} lg={6} md={6}>
                            <CustomLabel label="Company DBA">
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    placeholder="e.g. Brother's Pizza CO"
                                    size="small"
                                />
                            </CustomLabel>
                        </Grid>
                    </Grid>

                    <Grid container spacing={4}>
                        <Grid item xs={12} lg={6} md={6}>
                            <CustomLabel label="Property">
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    placeholder="Select from existing"
                                    size="small"
                                />
                            </CustomLabel>
                        </Grid>

                        <Grid item xs={12} lg={6} md={6}>
                            <CustomLabel label="Suite #">
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    placeholder="e.g. Suite 204"
                                    size="small"
                                />
                            </CustomLabel>

                        </Grid>
                    </Grid>
                    <Row>
                        <CustomLabel label="Tenant Address">   </CustomLabel>
                        <FormControlLabel control={<Checkbox size="small" />} label="Same as Property Address" sx={{ mr: 0 }} />

                    </Row>
                    <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="e.g. 8885 Haven Ave, Rancho Cucamonga, CA 91730"
                        size="small"
                    />
                </Box>
                <Box sx={{ backgroundColor: '#fff', p: 2, mb: 1, borderRadius: theme => theme.spacing(1.5) }}>

                    <FormGroup>
                        <FormControlLabel control={<Checkbox onClick={() => setShow(showcontact => !showcontact)} />} label="Contact Details" />
                    </FormGroup>

                    <Divider sx={{ mb: 2, pt: 1 }} />
                    {show && <Box>
                        <Grid container spacing={4}>
                            <Grid item xs={12} lg={6} md={6}>
                                <CustomLabel label="Contact Name">
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        placeholder="e.g Brian Smith"
                                        size="small"
                                    />
                                </CustomLabel>
                            </Grid>

                            <Grid item xs={12} lg={6} md={6}>
                                <Row>
                                    <CustomLabel label="Mailing Address">  </CustomLabel>
                                    <FormControlLabel control={<Checkbox size="small" />} label="Same as Tenant Address" sx={{ mr: 0 }} />
                                </Row>

                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    placeholder="e.g. 1234 Work Dr. Newport Beach, CA 92646"
                                    size="small"
                                />

                            </Grid>
                        </Grid>

                        <Grid container spacing={4}>
                            <Grid item xs={12} lg={6} md={6}>
                                <CustomLabel label="Phone Number">
                                    <Grid container spacing={1}>
                                        <Grid item xs={6} lg={6} md={6}>

                                            <Select
                                                fullWidth
                                                size="small"
                                                label="text"
                                                id="demo-simple-select"
                                                value={number}
                                                onChange={handleChange}
                                            >
                                                <MenuItem value="Cell">Cell</MenuItem>
                                                <MenuItem value="Office">Office</MenuItem>

                                            </Select>

                                        </Grid>

                                        <Grid item xs={6} lg={6} md={6}>
                                            <TextField
                                                fullWidth
                                                variant="outlined"
                                                placeholder="e.g. 562-899-9966"
                                                size="small"
                                            />
                                        </Grid>
                                    </Grid>
                                </CustomLabel>
                            </Grid>

                            <Grid item xs={12} lg={6} md={6}>
                                <CustomLabel label="Email Address">
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        placeholder="e.g smithpizza@gmail.com"
                                        size="small"
                                    />
                                </CustomLabel>
                            </Grid>
                        </Grid>

                        <Box sx={{ pt: 1 }}>
                            <Typography
                                variant="caption"
                                component="h6"
                                sx={{ fontWeight: "bold" }}
                            >
                                Assign Role
                            </Typography>

                            <Box>
                                <Button
                                    variant="outlined"
                                    size="medium"
                                    sx={{
                                        m: 0.5,
                                        color: "#000",
                                        border: "1px solid #000",
                                        borderRadius: "4px",
                                        fontWeight: "bold",
                                        textTransform: 'capitalize'
                                    }}
                                >
                                    Owner
                                </Button>
                                <Button
                                    color="primary"
                                    variant="outlined"
                                    size="medium"
                                    sx={{
                                        m: 0.5,
                                        color: "#000",
                                        border: "1px solid #000",
                                        borderRadius: "4px",
                                        fontWeight: "bold",
                                        textTransform: 'capitalize'
                                    }}
                                >
                                    Manager
                                </Button>

                                <Button
                                    variant="outlined" size="medium"
                                    sx={{
                                        m: 0.5,
                                        color: "#000",
                                        border: "1px solid #000",
                                        borderRadius: "4px",
                                        fontWeight: "bold",
                                        textTransform: 'capitalize'
                                    }}
                                >
                                    Accounting
                                </Button>
                            </Box>

                        </Box>

                        <Box sx={{ pt: 1 }}>
                            <Row sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography
                                    variant="caption"
                                    component="h6"
                                    sx={{ fontWeight: "bold" }}
                                >
                                    Assign Tags
                                </Typography>

                                <Button variant="outlined" size="small">Add</Button>

                            </Row>

                        </Box>
                    </Box>}
                </Box>
            </Box>


            {/* Step 2 Starts */}

            <Box sx={{ width: '60%', marginLeft: 'auto', marginRight: 'auto', mb: 2 }}>
                <Box sx={{ backgroundColor: '#fff', p: 2, mb: 1, borderRadius: theme => theme.spacing(1.5) }}>
                    <Row sx={{ justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        <Column>
                            <Typography
                                variant="caption"
                                component="h6"
                                sx={{ fontWeight: "bold" }}
                            >
                                Assign Role
                            </Typography>
                            <Box>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        m: 0.5,
                                        color: "#000",
                                        border: "1px solid #000",
                                        borderRadius: "4px",
                                        fontWeight: "bold",
                                        textTransform: 'capitalize'
                                    }}
                                >
                                    Gross
                                </Button>
                                <Button
                                    color="primary"
                                    variant="outlined"
                                    size="medium"
                                    sx={{
                                        m: 0.5,
                                        color: "#000",
                                        border: "1px solid #000",
                                        borderRadius: "4px",
                                        fontWeight: "bold",
                                        textTransform: 'capitalize'
                                    }}
                                >
                                    Modified Gross
                                </Button>

                                <Button
                                    variant="outlined" size="medium"
                                    sx={{
                                        m: 0.5,
                                        color: "#000",
                                        border: "1px solid #000",
                                        borderRadius: "4px",
                                        fontWeight: "bold",
                                        textTransform: 'capitalize'
                                    }}
                                >
                                    NNN
                                </Button>
                            </Box>
                        </Column>

                        <Box sx={{ p: 1 }} />

                        <Column>
                            <CustomLabel label="Sq Feet">
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    placeholder="e.g. 4000"
                                    size="small"
                                />
                            </CustomLabel>
                        </Column>
                    </Row>

                    <Row sx={{ justifyContent: 'space-between', alignItems: 'center' }}>

                        <Column>
                            <CustomLabel label="Commencement Date">
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    placeholder="Select a date"
                                    size="small"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="start">
                                                <CalendarToday />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </CustomLabel>
                        </Column>

                        <Box sx={{ p: 1 }} />
                        <Column>
                            <CustomLabel label="Expiration Date">
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    placeholder="Select a date"
                                    size="small"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="start">
                                                <CalendarToday />
                                            </InputAdornment>
                                        ),
                                    }}

                                />

                                {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        label="Basic example"
                                        value={value}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider> */}
                            </CustomLabel>

                        </Column>

                    </Row>

                    <Row sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                        <Column>
                            <CustomLabel label="Base Rent">
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    placeholder="e.g. $2,000.00"
                                    size="small"
                                />
                            </CustomLabel>
                        </Column>

                        <Box sx={{ p: 1 }} />
                        <Column>
                            <CustomLabel label="Security Deposit">
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    placeholder="Enter Amount"
                                    size="small"
                                />
                            </CustomLabel>
                        </Column>
                    </Row>

                    <Row sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                        <Column sx={{ width: '49%' }}>
                            <CustomLabel label="Price / Sq Ft">
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    placeholder="e.g. $0.50"
                                    size="small"
                                />
                            </CustomLabel>
                        </Column>

                        <Box sx={{ p: 2 }} />
                        {/* <Column>
                        <CustomLabel label="Security Deposit">
                            <TextField
                                fullWidth
                                variant="outlined"
                                placeholder="Enter Amount"
                                size="small"
                            />
                        </CustomLabel>
                    </Column> */}
                    </Row>
                </Box>


                <Box sx={{ backgroundColor: '#fff', p: 2, mb: 1, borderRadius: theme => theme.spacing(1.5) }}>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Terms" />
                    </FormGroup>
                </Box>

                <Box sx={{ backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2, mb: 1, borderRadius: theme => theme.spacing(1.5) }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>CAM/NNN</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <FormControlLabel control={<Checkbox />} label="Utility" />
                        <FormControlLabel control={<Checkbox />} label="CAM" />
                        <FormControlLabel control={<Checkbox />} label="Tax" />
                        <FormControlLabel control={<Checkbox />} label="Insurance" />
                        <Button color="primary" variant="text" sx={{ fontWeight: 'bold' }}> + Add Other</Button>
                    </Box>
                </Box>

            </Box >


            {/* Step 2 Ends */}


        </>
    );
}