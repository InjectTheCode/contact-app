import { TableRow, TableCell } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

const Contact = ({ contactProps, deleteHandler }) => {
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
          sx={{ cursor: "pointer", color: "#F44336" }}
          onClick={() => deleteHandler(contactProps.id)}
        />
      </TableCell>
    </TableRow>
  );
};

export default Contact;
