import { useContext, useEffect, useState } from "react";

import {
  Button,
  Typography,
  TextField,
  InputAdornment,
  Grid,
  Container,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import { Link } from "react-router-dom";

import { ContactContext } from "../context/ContactContext";
import Contacts from "./Contacts";

const ContactsList = () => {
  const [contactsArr, setContactsArr] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchToDisplay, setSearchToDisplay] = useState("");

  const { contacts } = useContext(ContactContext);

  // fetching contact list from localStorage and Context
  useEffect(() => {
    if (localStorage.getItem("contacts")) {
      setContactsArr(JSON.parse(localStorage.getItem("contacts")));
    }
    setContactsArr(contacts);
  }, [contacts]);

  // create delay for searching
  useEffect(() => {
    const searchTimeout = setTimeout(() => {
      setSearchToDisplay(searchInput);
    }, 1200);
    return () => clearTimeout(searchTimeout);
  }, [searchInput]);

  return (
    <Container maxWidth="xl" sx={{ marginTop: 3 }}>
      <Grid container mb={6} direction="row" justifyContent="space-between">
        <Grid item lg="auto">
          <Typography variant="h5">All Contacts</Typography>
        </Grid>

        <Grid item>
          <Grid container spacing={2}>
            <Grid item>
              <Link to="/main">
                <Button
                  variant="outlined"
                  color="warning"
                  size="medium"
                  sx={{ textTransform: "none" }}
                >
                  Back to Main page
                </Button>
              </Link>
            </Grid>

            <Grid item>
              <Link to="/add-new">
                <Button
                  variant="outlined"
                  color="primary"
                  size="medium"
                  sx={{ textTransform: "none" }}
                >
                  Add new Contact
                </Button>
              </Link>
            </Grid>

            <Grid item>
              <TextField
                placeholder="Search any data you want..."
                size="small"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              ></TextField>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Contacts
        contactsArr={contactsArr}
        filteredContacts={contactsArr.filter((contact) => {
          let searchInAllData =
            contact.name.toLowerCase() +
            contact.lastName.toLowerCase() +
            contact.phoneNumber +
            contact.telephone +
            contact.email.toLowerCase() +
            contact.description.toLowerCase();

          return searchInAllData.includes(searchToDisplay);
        })}
      />
    </Container>
  );
};

export default ContactsList;
