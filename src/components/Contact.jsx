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

import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";

const Contact = ({ contact }) => {
  return (
    <TableRow>
      <TableCell>{contact.name}</TableCell>
      <TableCell>{contact.phoneNumber}</TableCell>
      <TableCell>{contact.telephone}</TableCell>
      <TableCell>{contact.email}</TableCell>
      <TableCell>{contact.description}</TableCell>
      <TableCell>
        <ClearIcon sx={{ cursor: "pointer", color: "#F44336" }} />
      </TableCell>
      <TableCell>
        <EditIcon sx={{ cursor: "pointer", color: "#FFD54F" }} />
      </TableCell>
    </TableRow>
  );
};

export default Contact;
