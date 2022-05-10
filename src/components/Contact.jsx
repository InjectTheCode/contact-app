import { useState } from "react";

import { TableRow, TableCell } from "@mui/material";

import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";

import DeleteModal from "./Modals/DeleteModal";
import EditModal from "./Modals/EditModal";

const Contact = ({ contactProps }) => {
  const [deleteOpenModal, setDeleteOpenModal] = useState(false);
  const [editOpenModal, setEditOpenModal] = useState(false);

  const deleteModalToggle = () => {
    setDeleteOpenModal(!deleteOpenModal);
  };

  const editModalToggle = () => {
    setEditOpenModal(!editOpenModal);
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
          onClick={deleteModalToggle}
        />
        <DeleteModal
          open={deleteOpenModal}
          onClose={deleteModalToggle}
          contactProps={contactProps}
        />

        <EditIcon
          sx={{ cursor: "pointer", color: "#FFD54F" }}
          onClick={editModalToggle}
        />
        <EditModal
          open={editOpenModal}
          onClose={editModalToggle}
          contactProps={contactProps}
        />
      </TableCell>
    </TableRow>
  );
};

export default Contact;
