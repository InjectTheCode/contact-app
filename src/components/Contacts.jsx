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
  const [contacts, setContacts] = useState([]);
  const [errorInfo, setErrorInfo] = useState(true);
  // const { contacts } = useContext(ContactContext);
  // const contacts = JSON.parse(localStorage.getItem("contacts"));

  useEffect(() => {
    if (localStorage.getItem("contacts")) {
      setContacts(JSON.parse(localStorage.getItem("contacts")));
      setErrorInfo(false);
    }
  }, []);

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
              <h2>No contacts</h2>
            ) : (
              contacts.map((contact) => (
                <Contact contact={contact} key={contact.id} />
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Contacts;
