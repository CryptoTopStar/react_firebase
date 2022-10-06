import { Search } from "@mui/icons-material";
import CircleIcon from "@mui/icons-material/Circle";
import Close from "@mui/icons-material/Close";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  Dialog,
  DialogActions,
  Divider,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import React, { useState } from "react";
import { Column } from "../../../core/widgets/Column";
import { CustomLabel } from "../../../core/widgets/CustomLabel";
import { Row } from "../../../core/widgets/Row";
import { Injector } from "../../../injector";
import { StringUtils } from "../../../utils/StringUtils";
import { Property } from "../models";

export function AddPropertyPage() {
  const [phone, setPhone] = useState("");
  const [open, setOpen] = React.useState(false);
  // const [fullWidth, setFullWidth] = React.useState(true);
  const [propertyName, setPropertyName] = useState("");
  const [propertyError, setPropertyError] = useState("");
  const [owner, setOwner] = useState("");
  const [ownerError, setOwnerError] = useState("");
  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState("");
  const [country, setCountry] = useState("");
  const [countryError, setCountryError] = useState("");
  const [state, setState] = useState("");
  const [stateError, setStateError] = useState("");
  const [city, setCity] = useState("");
  const [cityError, setCityError] = useState("");
  const [error, setError] = useState("");
  const [alignment, setAlignment] = React.useState("Office");
  const [isSubmitted, setSubmitted] = React.useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [image, setImage] = useState({ preview: "", raw: "" });
  const [ownerName, setOwnerName] = useState("");

  const steps = [
    { label: "Property Details" },
    { label: "Owner Details" },
  ];

  function getstepsContent(step: any) {
    switch (step) {
      case 0:
        return (
          <>
            <Box
              sx={{
                backgroundColor: "#fff",
                p: 2,
                mb: 1,
                borderRadius: (theme) => theme.spacing(1.5),
              }}
            >
              <Typography variant="h6" color="primary">
                Property Details
              </Typography>
              <Box mt={1} />
              <Divider />

              <Row>
                <Column>
                  <CustomLabel label="Property Name">
                    <TextField
                      fullWidth
                      type="text"
                      variant="outlined"
                      placeholder="e.g. Day Break Pizza"
                      value={propertyName}
                      onChange={(e) => checkProperty(e.target.value)}
                      helperText={propertyError}
                      error={!!propertyError}
                      size="small"
                      sx={{
                        width: "100%",
                        display: "block",
                      }}
                    />
                  </CustomLabel>
                  <Row>
                    <CustomLabel label="Size">
                      <TextField
                        fullWidth
                        type="number"
                        id="outlined-basic"
                        variant="outlined"
                        size="small"
                        // value={owner}
                        placeholder="e.g. 123"
                        onChange={(e) => checkOwner(e.target.value)}
                        helperText={ownerError}
                        error={!!ownerError}
                        sx={{ display: "block", width: "100%" }}
                        required
                      />
                    </CustomLabel>
                    <Box p={1} />

                    <CustomLabel label="Suites/Units">
                      <TextField
                        fullWidth
                        type="number"
                        id="outlined-basic"
                        variant="outlined"
                        size="small"
                        // value={owner}
                        placeholder="e.g. 123"
                        onChange={(e) => checkOwner(e.target.value)}
                        helperText={ownerError}
                        error={!!ownerError}
                        sx={{ display: "block", width: "100%" }}
                        required
                      />
                    </CustomLabel>
                    <Box p={1} />

                    <CustomLabel label="Total Buldings">
                      <TextField
                        fullWidth
                        type="number"
                        id="outlined-basic"
                        variant="outlined"
                        size="small"
                        // value={owner}
                        placeholder="e.g. 123"
                        onChange={(e) => checkOwner(e.target.value)}
                        helperText={ownerError}
                        error={!!ownerError}
                        sx={{ display: "block", width: "100%" }}
                        required
                      />
                    </CustomLabel>
                  </Row>
                </Column>
                <Box mx={1} />
                <Column>
                  <Card
                    sx={{
                      mt: 4,
                      width: "100%",
                      border: "1px dotted gray",
                      display: "flex",
                      alignItems: "center",
                      borderRadius: (theme) => theme.spacing(1.6),
                      cursor: 'pointer'
                    }}
                  >
                    <Box>
                      <Grid item xs={12} sm={4} lg={4} md={4}>
                        <img src="/dropimg.jpg" width="100px" />

                        {/* <TextField
                  size="small"
                  type="file"
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                  }}
                ></TextField> */}
                        {/* <Button variant="outlined" onClick={Upload}>
                  Upload
                </Button> */}
                      </Grid>
                    </Box>

                    <Grid item xs={12} lg={8} sm={8} md={8}>
                      <Typography
                        variant="h6"
                        component="h6"
                        sx={{ color: "#94A3B8", fontSize: "14px" }}
                      >
                        Drop or browse an image
                      </Typography>
                    </Grid>
                  </Card>
                </Column>
              </Row>

              <CustomLabel label="Type">
                <ToggleButtonGroup
                  color="primary"
                  value={alignment}
                  exclusive
                  onChange={handleChange}
                  sx={{ display: "block" }}
                >
                  <ToggleButton value="Office">Office</ToggleButton>
                  <ToggleButton value="Retail"> Retail</ToggleButton>
                  <ToggleButton value="Industrial">Industrial </ToggleButton>
                  <ToggleButton value="Multi Family">
                    {" "}
                    Multi family
                  </ToggleButton>
                  <ToggleButton value="Association">Association</ToggleButton>
                </ToggleButtonGroup>
              </CustomLabel>
            </Box>
            <Card
              elevation={0}
              sx={{ p: 2, mb: 1, borderRadius: (theme) => theme.spacing(1.5) }}
            >
              <Typography variant="h6" color="primary">
                Address Info{" "}
                <Typography
                  variant="subtitle2"
                  component="span"
                  sx={{ color: "#00000099" }}
                >
                  {" "}
                  (if total buldings exceeds 1 than an address line for each
                  building will need to be added)
                </Typography>
              </Typography>

              <CustomLabel label="Address">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="e.g. 1234 Main St"
                  onChange={(e) => checkAddress(e.target.value)}
                  helperText={addressError}
                  error={!!addressError}
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <Search />
                      </InputAdornment>
                    ),
                  }}
                />
              </CustomLabel>

              <Box
                component="form"
                sx={{ display: "flex", "& > :not(style)": { my: 1 } }}
                noValidate
                autoComplete="off"
              >
                <Grid container spacing={1}>
                  <Grid item xs={12} lg={3} md={6} sm={6}>
                    <TextField
                      fullWidth
                      id="outlined-basic"
                      label="Zip Code"
                      type={"number"}
                      variant="outlined"
                      placeholder="e.g. 94102"
                      size="small"
                    />
                  </Grid>

                  <Grid item xs={12} lg={3} md={6} sm={6}>
                    <TextField
                      fullWidth
                      id="outlined-basic"
                      label="City"
                      variant="outlined"
                      placeholder="e.g. 1234 Main St"
                      onChange={(e) => checkCity(e.target.value)}
                      helperText={cityError}
                      error={!!cityError}
                      size="small"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            <Search />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} lg={3} md={6} sm={6}>
                    <TextField
                      fullWidth
                      id="outlined-basic"
                      label="State"
                      variant="outlined"
                      placeholder="e.g. California"
                      size="small"
                      required
                      onChange={(e) => checkState(e.target.value)}
                      helperText={stateError}
                      error={!!stateError}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            <Search />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} lg={3} md={6} sm={6}>
                    <TextField
                      fullWidth
                      id="outlined-basic"
                      label="Country"
                      variant="outlined"
                      placeholder="e.g. San Fransisco"
                      onChange={(e) => checkCountry(e.target.value)}
                      helperText={countryError}
                      error={!!countryError}
                      size="small"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            <Search />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </>
        );
      case 1:
        return (
          <>
            <Box
              sx={{
                backgroundColor: "#fff",
                p: 2,
                mb: 1,
                borderRadius: (theme) => theme.spacing(1.5),
                display: "flex",
              }}
            >
              <Grid container>
                <Grid xs={6}>
                  <Typography variant="caption" sx={{ fontWeight: "bold" }}>
                    Owner Details
                  </Typography>
                </Grid>

                <Grid xs={6} sx={{ textAlign: "right" }}>
                  <TextField
                    sx={{ width: "50%" }}
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="Search to add"
                    size="small"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          <Search />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <Button variant="contained" autoFocus sx={{ ml: 2 }}>
                    + Add New
                  </Button>
                </Grid>
              </Grid>
            </Box>
            <Box
              sx={{
                backgroundColor: "#fff",
                mb: 1,
                borderRadius: (theme) => theme.spacing(1.5),
                display: "flex",
                p: 2,
              }}
            >
              <Grid container sx={{ display: "flex", alignItems: "center" }}>
                <Grid item xs={7}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Avatar src="/broken-image.jpg" />
                    <Typography
                      variant="caption"
                      sx={{ fontWeight: "bold", mx: 2 }}
                    >
                      Roger J. Rosen Family Trust
                    </Typography>
                    <CircleIcon sx={{ fontSize: "xx-small", mr: 1 }} />
                    <Typography variant="caption">1 Contact</Typography>
                  </Box>
                </Grid>

                <Grid item xs={5} sx={{ textAlign: "right" }}>
                  <TextField
                    sx={{ width: "40%" }}
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="% 45"
                    size="small"
                  />
                  <CreateIcon sx={{ mx: 2, mt: 1 }} />
                  <DeleteOutlineIcon onClick={deleteClickOpen} />
                </Grid>
              </Grid>
            </Box>
            <Box
              sx={{
                backgroundColor: "#fff",
                p: 2,
                mb: 1,
                borderRadius: (theme) => theme.spacing(1.5),
              }}
            >
              <Grid container sx={{ display: "flex", alignItems: "center" }}>
                <Grid item xs={8}>
                  {/* <Box sx={{ display: 'flex', alignItems: 'center' }}> */}
                  <Avatar src="/broken-image.jpg" />

                  {/* <TextField sx={{ width: '40%', ml: 2 }}
                  fullWidth
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="DRW Real Estate"
                  size="small"
                />
              </Box> */}
                </Grid>

                <Grid item xs={4} sx={{ textAlign: "right" }}>
                  <Button variant="contained" autoFocus onClick={handleOnSave}>
                    Save Owner
                  </Button>
                </Grid>
              </Grid>

              <Row>
                <Column>
                  <CustomLabel label="Owner Name">
                    <TextField
                      variant="outlined"
                      placeholder="DRW Real Estate"
                      onChange={(e) => {
                        setOwnerName(e.target.value);
                        // console.log(e);
                      }}
                      size="small"
                      sx={{ display: "block", width: "80%" }}
                      required
                    />
                  </CustomLabel>
                </Column>

                <Column>
                  <Box sx={{ pt: 1 }}>
                    <Typography
                      variant="caption"
                      component="h6"
                      sx={{ fontWeight: "bold" }}
                    >
                      Invoice Preference
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
                          textTransform: "capitalize",
                        }}
                      >
                        Email
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
                          textTransform: "capitalize",
                        }}
                      >
                        Postage
                      </Button>

                      <Button
                        variant="outlined"
                        size="medium"
                        sx={{
                          m: 0.5,
                          color: "#000",
                          border: "1px solid #000",
                          borderRadius: "4px",
                          fontWeight: "bold",
                          textTransform: "capitalize",
                        }}
                      >
                        Fax
                      </Button>
                    </Box>
                  </Box>
                </Column>
              </Row>

              <Box sx={{ my: 2 }}>
                <Typography
                  component="h6"
                  variant="caption"
                  sx={{ fontWeight: "bold", mb: 2 }}
                >
                  Contact info
                </Typography>
                <Box sx={{ display: "flex" }}>
                  <Button
                    variant="contained"
                    sx={{
                      display: "block",
                      textAlign: "left",
                      textTransform: "capitalize",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Box sx={{ mr: 1 }}>
                        <Typography
                          component="h6"
                          variant="caption"
                          sx={{ fontWeight: "bold" }}
                        >
                          Robert Smart
                        </Typography>

                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Typography
                            component="h6"
                            variant="caption"
                            sx={{ fontWeight: "bold" }}
                          >
                            Owner
                          </Typography>
                          <Typography
                            component="h6"
                            variant="caption"
                            sx={{ fontWeight: "bold", ml: 1 }}
                          >
                            562-899-9966
                          </Typography>
                        </Box>
                      </Box>

                      <Box>
                        <CreateIcon />
                      </Box>
                    </Box>
                  </Button>

                  <Button
                    sx={{
                      border: "1px dotted #ddd",
                      ml: 2,
                      fontWeight: "bold",
                    }}
                    onClick={handleClickOpen}
                  >
                    + Add Contact
                  </Button>
                </Box>
              </Box>
              <Typography
                component="h6"
                variant="caption"
                sx={{ fontWeight: "bold", mt: 4 }}
              >
                Owned Suites/Units
              </Typography>
              <Box sx={{ display: "flex" }}>
                <Row>
                  <CustomLabel label="Suite#">
                    <TextField
                      type="number"
                      variant="outlined"
                      size="small"
                      sx={{ display: "block", width: "80%" }}
                      required
                    />
                  </CustomLabel>
                  <CustomLabel label="Sq Feet">
                    <TextField
                      type="number"
                      variant="outlined"
                      size="small"
                      sx={{ display: "block", width: "80%" }}
                      required
                    />
                  </CustomLabel>
                  <Box sx={{ mt: 5, mr: 20 }}>
                    <DeleteOutlineIcon />
                  </Box>
                  <CustomLabel label="Suite#">
                    <TextField
                      type="number"
                      variant="outlined"
                      size="small"
                      sx={{ display: "block", width: "80%" }}
                      required
                    />
                  </CustomLabel>
                  <CustomLabel label="Sq Feet">
                    <TextField
                      type="number"
                      variant="outlined"
                      size="small"
                      sx={{ display: "block" }}
                      required
                    />
                  </CustomLabel>
                  <Box sx={{ mt: 5, ml: 4 }}>
                    <DeleteOutlineIcon />
                  </Box>
                </Row>
              </Box>

              <Button variant="text" sx={{ mt: 1 }}>
                + Add Suite{" "}
              </Button>
            </Box>
          </>
        );
    }
  }

  const breadcrumbs = [
    <Link underline="hover" key="1" href="/">
      Properties
    </Link>,
    <Typography key="3" color="text.primary">
      Add Property
    </Typography>,
  ];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Leave Site Dialog
  const [leaveopen, setleaveOpen] = React.useState(false);

  const leaveClickOpen = () => {
    if (activeStep === 0) {
      setleaveOpen(true);
    } else if (activeStep !== 0)
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const leaveClose = () => {
    setleaveOpen(false);
  };

  // Delete Owner Dialog

  const [deleteopen, setDeleteOpen] = React.useState(false);

  const deleteClickOpen = () => {
    setDeleteOpen(true);
  };
  const deleteClose = () => {
    setDeleteOpen(false);
  };

  const checkProperty = (value: string): boolean => {
    value = value.trim();
    setPropertyName(value);

    if (isSubmitted) {
      if (value === "") {
        setPropertyError("Property Name is required");
        return false;
      } else {
        setPropertyError("");
        return true;
      }
    }
    return false;
  };

  const checkOwner = (value: string): boolean => {
    value = value.trim();
    setOwner(value);

    if (isSubmitted) {
      if (owner === "") {
        setOwnerError("Field is required");
        return false;
      } else {
        setOwnerError("");
        return true;
      }
    }
    return false;
  };

  const checkAddress = (value: string): boolean => {
    value = value.trim();
    setAddress(value);

    if (isSubmitted) {
      if (address === "") {
        setAddressError("Address is required");
        return false;
      } else {
        setAddressError("");
        return true;
      }
    }
    return false;
  };

  const checkCountry = (value: string): boolean => {
    value = value.trim();
    setCountry(value);

    if (isSubmitted) {
      if (country === "") {
        setCountryError("Country is required");
        return false;
      } else {
        setCountryError("");
        return true;
      }
    }
    return false;
  };

  const checkState = (value: string): boolean => {
    value = value.trim();
    setState(value);

    if (isSubmitted) {
      if (state === "") {
        setStateError("State is required");
        return false;
      } else {
        setStateError("");
        return true;
      }
    }
    return false;
  };

  const checkCity = (value: string): boolean => {
    value = value.trim();
    setCity(value);

    if (isSubmitted) {
      if (city === "") {
        setCityError("City is required");
        return false;
      } else {
        setCityError("");
        return true;
      }
    }
    return false;
  };

  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  const onSave = async () => {
    setSubmitted(true);

    const isValidProperty = checkProperty(propertyName);
    const isValidOwner = checkOwner(owner);
    const isValidAddress = checkAddress(address);
    const isValidCountry = checkCountry(country);
    const isValidState = checkState(state);
    const isValidCity = checkCity(city);

    if (
      isValidProperty
      || isValidOwner
      || isValidAddress
      || isValidCountry
      || isValidState
      || isValidCity
    ) {
      return;
    }

    setError("");
    // TODO: add loading

    try {
      // const propertyId = StringUtils.generateId();
      // const property: Property = {
      //   id: propertyId,
      //   // TODO: add remaining fiels
      // };
      // await Injector.propertyManager.create(property, image);
      // TODO - navigate to detail screen
    } catch (error) {
      setError(`${error}`);
    }

    // TODO: hide loading
  };

  const nextStep = () => {
    setSubmitted(true);
    if (activeStep < 1) setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleOnSave = async () => {
    // setSubmitted(true);
    // console.log("aaaa");
    // await setDoc(doc(firebaseFirestore, "owner-details", uuidv4()), {
    //   ownerName: "Divya",
    //   suites: 23,
    // });
    // alert("Save");
  };

  return (
    <Box sx={{ backgroundColor: "#F9FAFB;" }}>
      <Container maxWidth="lg" sx={{ padding: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 4,
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
            <Button variant="outlined" autoFocus onClick={leaveClickOpen}>
              {activeStep === 0 ? "Cancel" : "Back"}
            </Button>

            <Button
              variant="contained"
              autoFocus
              sx={{ ml: 2 }}
              onClick={() => nextStep()}
              onChange={(e) => setImage((e.target as any).files[0])}
            >
              {activeStep === 1 ? "Save" : "Continue"}
            </Button>
          </Box>
        </Box>
        <Stepper
          activeStep={activeStep}
          sx={{ width: "40%", mx: "auto", py: 4 }}
        >
          {steps.map((step) => (
            <Step key={step.label}>
              <StepLabel>{step.label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box>{getstepsContent(activeStep)}</Box>

        {/* Add new Association Box */}

        {/* Add Contact Dialog Starts  */}
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          maxWidth="xl"
        >
          <DialogTitle>
            Add Contact
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <Close />
            </IconButton>
          </DialogTitle>

          <DialogContent>
            <Row>
              <Column>
                <CustomLabel label="Contact Name">
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="e.g. Brian Smith"
                    size="small"
                  />
                </CustomLabel>
              </Column>
              <Box sx={{ mx: 2 }} />
              <Column>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <CustomLabel label="Mailing Address"> </CustomLabel>
                  <FormControlLabel
                    sx={{ textAlign: "right", mr: 0, mb: -1 }}
                    control={<Checkbox size="small" />}
                    label="Same as Property Address"
                  />
                </Box>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="e.g. 1234 Work Dr. Newport Beach, CA 92646"
                  size="small"
                />
              </Column>
            </Row>

            <Row>
              <Column>
                <CustomLabel label="Phone Number">
                  <Grid container>
                    <Grid xs={4}>
                      <Select
                        id="demo-simple-select"
                        value={phone}
                        size="small"
                        fullWidth
                        sx={{ width: "90%" }}
                      >
                        <MenuItem>Cell</MenuItem>
                        <MenuItem>Office</MenuItem>
                      </Select>
                    </Grid>

                    <Grid xs={8}>
                      <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="e.g. Brian Smith"
                        size="small"
                      />
                    </Grid>
                  </Grid>
                </CustomLabel>
              </Column>
              <Box sx={{ mx: 2 }} />
              <Column>
                <CustomLabel label="Email Address">
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="e.g. Smith@plumbing.com"
                    size="small"
                  />
                </CustomLabel>
              </Column>
            </Row>

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
                    textTransform: "capitalize",
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
                    textTransform: "capitalize",
                  }}
                >
                  Manager
                </Button>

                <Button
                  variant="outlined"
                  size="medium"
                  sx={{
                    m: 0.5,
                    color: "#000",
                    border: "1px solid #000",
                    borderRadius: "4px",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                >
                  Accounting
                </Button>
              </Box>
            </Box>

            <Box sx={{ pt: 1 }}>
              <Typography
                variant="caption"
                component="h6"
                sx={{ fontWeight: "bold" }}
              >
                Assign Tags
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
                    textTransform: "capitalize",
                  }}
                >
                  Main Contact
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
                    textTransform: "capitalize",
                  }}
                >
                  Invoicing
                </Button>

                <Button
                  variant="outlined"
                  size="medium"
                  sx={{
                    m: 0.5,
                    color: "#000",
                    border: "1px solid #000",
                    borderRadius: "4px",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                >
                  Financial Reports
                </Button>

                <Button
                  variant="outlined"
                  size="medium"
                  sx={{
                    m: 0.5,
                    color: "#000",
                    border: "1px solid #000",
                    borderRadius: "4px",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                >
                  Maintenance
                </Button>

                <Button
                  variant="outlined"
                  size="medium"
                  sx={{
                    m: 0.5,
                    color: "#000",
                    border: "1px solid #000",
                    borderRadius: "4px",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                >
                  + Add Tag
                </Button>
              </Box>
            </Box>
          </DialogContent>

          <DialogActions>
            <Button variant="outlined" autoFocus onClick={handleClose}>
              Cancel
            </Button>

            <Button variant="outlined" autoFocus onClick={handleClose}>
              Save & New
            </Button>

            <Button variant="contained" autoFocus onClick={handleClose}>
              Save
            </Button>
          </DialogActions>

          {/* Add Contact Diualog Ends */}
        </Dialog>
        {/* Leave Site Dialog Starts */}
        <Dialog
          open={leaveopen}
          onClose={leaveClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          maxWidth="xl"
        >
          <DialogTitle id="alert-dialog-title">{"Leave Site?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Changes you made may not be saved.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={leaveClose}>
              Cancel
            </Button>
            <Button variant="contained" onClick={handleClose} autoFocus>
              Leave
            </Button>
          </DialogActions>
        </Dialog>
        {/* Leave Site Dialog Ends */}
        {/* Remove Owner Dialog Starts */}
        <Dialog
          open={deleteopen}
          onClose={deleteClose}
          aria-labelledby=""
          aria-describedby=""
          maxWidth="xl"
        >
          <DialogTitle id="">Remove Owner</DialogTitle>
          <DialogContent>
            <DialogContentText id="">
              Are you sure you want to remove this owner?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={deleteClose}>
              Cancel
            </Button>
            <Button variant="contained" onClick={handleClose} autoFocus>
              Remove
            </Button>
          </DialogActions>
        </Dialog>
        {/* Remove Owner Dialog Ends */}
      </Container>
    </Box>
  );
}
