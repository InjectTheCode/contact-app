import { useState } from "react";

import { TableRow, TableCell } from "@mui/material";

import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import DeleteModal from "./Modals/DeleteModal";

const Contact = ({ contactProps }) => {
  const [open, setOpen] = useState(false);

  const modalToggle = () => {
    setOpen(!open);
  };

  return (
    <TableRow>
      <TableCell>
        {contactProps.name} {contactProps.lastName}
      </TableCell>
      <TableCell>{contactProps.phoneNumber}</TableCell>
      <TableCell>{contactProps.telephone}</TableCell>
      <TableCell>{contactProps.email}</TableCell>
      <TableCell>{contactProps.description}</TableCell>
      <TableCell>
        <ClearIcon
          sx={{ cursor: "pointer", color: "#F44336", marginRight: "15px" }}
          onClick={modalToggle}
        />
        <DeleteModal
          open={open}
          onClose={modalToggle}
          contactProps={contactProps}
        />
        <EditIcon sx={{ cursor: "pointer", color: "#FFD54F" }} />
      </TableCell>
    </TableRow>
  );
};

export default Contact;
