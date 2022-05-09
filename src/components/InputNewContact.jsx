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
  TextareaAutosize,
} from "@mui/material";

function InputNewContact() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");
  const [newContactAdded, setNewContactAdded] = useState(false);

  const { dispatch, contacts } = useContext(ContactContext);

  let characterLimite = 125;

  const addNewContact = (e) => {
    e.preventDefault();

    if (name.trim() || (name.length < 0 && number.length <= 11)) {
      const newContact = {
        id: uuidv4(),
        name: name.charAt(0).toUpperCase() + name.slice(1),
        lastName: lastName.charAt(0).toUpperCase() + lastName.slice(1),
        phoneNumber: number,
        telephone: telephone,
        email: email,
        description: desc,
      };

      dispatch({ type: "ADD_CONTACT", payload: newContact });

      localStorage.setItem(
        "contacts",
        JSON.stringify([...contacts, newContact])
      );
      setNewContactAdded(true);

      setName("");
      setLastName("");
      setNumber("");
      setTelephone("");
      setEmail("");
      setDesc("");

      setTimeout(() => {
        setNewContactAdded(false);
      }, 1100);
    }
  };

  const inputChangeHandler = (e) => {
    if (e.target.id === "name") {
      setName(e.target.value);
    }

    if (e.target.id === "lastName") {
      setLastName(e.target.value);
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
    if (
      e.target.id === "description" &&
      characterLimite - e.target.value.length >= 0
    ) {
      setDesc(e.target.value);
    }
  };

  let content;
  if (newContactAdded) {
    content = (
      <Typography
        variant="subtitle1"
        color="green"
        textAlign="center"
        margin={2}
        padding={1}
        fontWeight={600}
        letterSpacing={1}
        sx={{
          background: "#DCEDC8",
          borderRadius: "5px",
          marginBottom: "0.7rem",
        }}
      >
        New Contact has been Added
      </Typography>
    );
  }

  if (!newContactAdded) {
    content = (
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
    );
  }

  return (
    <>
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
              helperText={
                !name ? "You have to write the name" : "max character is 20"
              }
              autoFocus
              fullWidth
              label="Name"
              type="text"
              id="name"
              value={name}
              inputProps={{ maxLength: 20 }}
              onChange={inputChangeHandler}
            />

            <TextField
              margin="normal"
              fullWidth
              label="Last Name"
              type="text"
              id="lastName"
              value={lastName}
              inputProps={{ maxLength: 15 }}
              onChange={inputChangeHandler}
            />

            <TextField
              margin="normal"
              fullWidth
              label="Phone Number"
              placeholder="format number like 09121234567"
              type="number"
              id="phoneNumber"
              value={number}
              error={number.length > 11}
              helperText={
                number.length > 11 &&
                "Phone number should less or equal 11 characters for example 09121234567"
              }
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

            <Box>
              <TextareaAutosize
                minRows={3}
                placeholder="Add any extra description you want"
                id="description"
                value={desc}
                onChange={inputChangeHandler}
                helperText={"salaam"}
              />
              {desc.length > 0 && (
                <small>{characterLimite - desc.length} remaining</small>
              )}
            </Box>

            {content}

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

              <Link to="/contacts">
                <Button
                  type="submit"
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                  }}
                >
                  Go to Contacts List
                </Button>
              </Link>
            </Grid>
            <Typography color="gray" textAlign="center" mt={2}>
              if you go back you will lost inputs data
            </Typography>
          </Box>
        </Paper>
      </Container>
    </>
  );
}

export default InputNewContact;
