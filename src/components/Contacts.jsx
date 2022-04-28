import { useContext, useEffect, useState } from "react";

import {
  Button,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TextField,
  Stack,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { Link } from "react-router-dom";

import { ContactContext } from "../context/ContactContext";
import Contact from "./Contact";

const Contacts = () => {
  const [contactsArr, setContactsArr] = useState([]);
  const [errorInfo, setErrorInfo] = useState(true);

  const { dispatch, contacts } = useContext(ContactContext);

  useEffect(() => {
    if (localStorage.getItem("contacts")) {
      setContactsArr(JSON.parse(localStorage.getItem("contacts")));
      setErrorInfo(false);
    }
  }, [contacts]);

  const deleteHandler = (id) => {
    const deleteContact = contacts.filter((contact) => contact.id !== id);

    dispatch({ type: "DELETE_CONTACT", payload: deleteContact });

    console.log(deleteContact);

    localStorage.setItem("contacts", JSON.stringify(deleteContact));
  };

  return (
    <>
      <Stack direction="row" justifyContent="space-between" px={4} py={2}>
        <Typography variant="h4">All Contacts</Typography>

        <Stack direction="row" spacing={2}>
          <TextField
            placeholder="Search any data you want..."
            size="small"
            sx={{ width: "500px" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          ></TextField>

          <Link to="/main">
            <Button
              variant="outlined"
              color="warning"
              size="large"
              sx={{ textTransform: "none" }}
            >
              Back to Main page
            </Button>
          </Link>
        </Stack>
      </Stack>

      <TableContainer
        sx={{
          maxWidth: "70vw",
          maxHeight: "70vh",
          mx: "auto",
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Telephone</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Desceription</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {errorInfo ? (
              <TableRow>
                <TableCell sx={{ fontWeight: "bold", fontSize: "2rem" }}>
                  No contacts
                </TableCell>
              </TableRow>
            ) : (
              contactsArr.map((contact) => (
                <Contact
                  contactProps={contact}
                  key={contact.id}
                  deleteHandler={deleteHandler}
                />
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Contacts;
