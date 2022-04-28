import { useContext } from "react";

import { TableRow, TableCell } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

import { ContactContext } from "../context/ContactContext";

const Contact = ({ contactProps }) => {
  const { dispatch, contacts } = useContext(ContactContext);

  const deleteHandler = () => {
    let id = contactProps.id;
    const deleteContact = contacts.filter((contact) => contact.id !== id);

    dispatch({ type: "DELETE_CONTACT", payload: deleteContact });
    console.log(deleteContact);

    localStorage.setItem("contacts", JSON.stringify(deleteContact));
  };

  return (
    <TableRow>
      <TableCell>{contactProps.name}</TableCell>
      <TableCell>{contactProps.phoneNumber}</TableCell>
      <TableCell>{contactProps.telephone}</TableCell>
      <TableCell>{contactProps.email}</TableCell>
      <TableCell>{contactProps.description}</TableCell>
      <TableCell>
        <ClearIcon
          sx={{ cursor: "pointer", color: "#F44336" }}
          onClick={deleteHandler}
        />
      </TableCell>
    </TableRow>
  );
};

export default Contact;
