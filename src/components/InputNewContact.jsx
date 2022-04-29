import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { ContactContext } from "../context/ContactContext";

import {
  Container,
  Paper,
  TextField,
  Typography,
  Button,
  Box,
  Grid,
} from "@mui/material";

function InputNewContact() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [newContactAdded, setNewContactAdded] = useState(false);

  const { dispatch, contacts } = useContext(ContactContext);

  const addNewContact = (e) => {
    e.preventDefault();

    if (name.trim() || name.length < 0) {
      const newContact = {
        id: uuidv4(),
        name: name.charAt(0).toUpperCase() + name.slice(1),
        phoneNumber: number,
        telephone: telephone,
        email: email,
        description: description,
      };

      dispatch({ type: "ADD_CONTACT", payload: newContact });

      localStorage.setItem(
        "contacts",
        JSON.stringify([...contacts, newContact])
      );
      setNewContactAdded(true);

      setName("");
      setNumber("");
      setTelephone("");
      setEmail("");
      setDescription("");

      setTimeout(() => {
        setNewContactAdded(false);
      }, 1500);
    }
  };

  const inputChangeHandler = (e) => {
    if (e.target.id === "name") {
      setName(e.target.value);
    }

    if (e.target.id === "phoneNumber") {
      setNumber(e.target.value);
    }

    if (e.target.id === "telephone") {
      setTelephone(e.target.value);
    }

    if (e.target.id === "email") {
      setEmail(e.target.value);
    }

    if (e.target.id === "description") {
      setDescription(e.target.value);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper sx={{ mt: 10 }} elevation={0}>
        <Typography variant="h5" align="center" paddingTop={3}>
          Add a new contact
        </Typography>
        <Box
          component="form"
          sx={{
            px: 2,
            py: 3,
          }}
        >
          <TextField
            margin="normal"
            required
            error={!name}
            helperText={!name ? "You have to write the name" : null}
            autoFocus
            fullWidth
            label="Name"
            type="text"
            id="name"
            value={name}
            onChange={inputChangeHandler}
          />

          <TextField
            margin="normal"
            fullWidth
            label="Phone Number"
            type="number"
            id="phoneNumber"
            value={number}
            onChange={inputChangeHandler}
          />

          <TextField
            margin="normal"
            fullWidth
            label="Telephone"
            type="number"
            id="telephone"
            value={telephone}
            onChange={inputChangeHandler}
          />

          <TextField
            margin="normal"
            fullWidth
            label="Email"
            type="email"
            id="email"
            value={email}
            onChange={inputChangeHandler}
          />

          <TextField
            fullWidth
            margin="normal"
            placeholder="Add any extra description you want"
            id="description"
            value={description}
            onChange={inputChangeHandler}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            size="large"
            onClick={addNewContact}
          >
            Add Contact
          </Button>

          {newContactAdded ? (
            <Typography
              variant="subtitle1"
              color="green"
              textAlign="center"
              sx={{
                background: "#DCEDC8",
                borderRadius: "5px",
                marginBottom: "0.7rem",
              }}
            >
              New Contact has been Added
            </Typography>
          ) : null}

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
