import React from "react";

import { Link } from "react-router-dom";

import {
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
  Button,
  Box,
  Grid,
} from "@mui/material";

function InputNewContact() {
  return (
    <Container maxWidth="sm">
      <Paper sx={{ mt: 10 }}>
        <Typography variant="h5" align="center" paddingTop={3}>
          Add a new contact
        </Typography>
        <Box
          component="form"
          sx={{
            paddingTop: 2,
            paddingBottom: 2,
            paddingLeft: 3,
            paddingRight: 3,
          }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            label="Name"
            type="text"
            id="name"
          />
          <TextField
            margin="normal"
            fullWidth
            label="Phone Number"
            type="number"
            id="phoneNumber"
          />
          <TextField
            margin="normal"
            fullWidth
            label="Telephone"
            type="number"
            id="telephone"
          />
          <TextField
            fullWidth
            margin="normal"
            placeholder="Add any extra description you want"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            size="large"
          >
            Add Contact
          </Button>

          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Link to="/main">
              <Button
                variant="outlined"
                color="warning"
                sx={{
                  textTransform: "none",
                }}
              >
                Back to main page
              </Button>
            </Link>
            <Typography color="gray">
              if you go back you will lost inputs data
            </Typography>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}

export default InputNewContact;
