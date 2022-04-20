import {
  Button,
  Typography,
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";

import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <>
      <Grid container justifyContent="space-between" px={4} py={2}>
        <Typography variant="h4">All Contacts</Typography>

        <Link to="/main">
          <Button
            variant="outlined"
            color="warning"
            sx={{ textTransform: "none" }}
          >
            Back to Main page
          </Button>
        </Link>
      </Grid>

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
            <TableRow>
              <TableCell>Mohsen Razavi</TableCell>
              <TableCell>09122106530</TableCell>
              <TableCell>02177474961</TableCell>
              <TableCell>mohsenr1375@gmail.com</TableCell>
              <TableCell>My own information</TableCell>
              <TableCell>
                <ClearIcon sx={{ cursor: "pointer", color: "#D32F2F" }} />
              </TableCell>
              <TableCell>
                <EditIcon sx={{ cursor: "pointer" }} color="warning" />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Mr Shariati</TableCell>
              <TableCell>09119078135</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>He's the master of React Js</TableCell>
              <TableCell>
                <ClearIcon sx={{ cursor: "pointer", color: "#D32F2F" }} />
              </TableCell>
              <TableCell>
                <EditIcon sx={{ cursor: "pointer" }} color="warning" />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Mehran</TableCell>
              <TableCell>09125352439</TableCell>
              <TableCell></TableCell>
              <TableCell>mehransh75@gmail.com</TableCell>
              <TableCell>My friend since elementry school</TableCell>
              <TableCell>
                <ClearIcon sx={{ cursor: "pointer", color: "#D32F2F" }} />
              </TableCell>
              <TableCell>
                <EditIcon sx={{ cursor: "pointer" }} color="warning" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Contacts;
