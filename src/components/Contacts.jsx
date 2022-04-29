import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

import Contact from "./Contact";
import NoContacts from "./NoContacts";

const Contacts = ({ deleteHandler, contactsArr, filteredContacts }) => {
  return (
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
          {contactsArr.length > 0 ? (
            filteredContacts.map((contact) => (
              <Contact
                contactProps={contact}
                key={contact.id}
                deleteHandler={deleteHandler}
              />
            ))
          ) : (
            <NoContacts />
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Contacts;
