import { Button, Stack, Typography } from "@mui/material";

import { Link } from "react-router-dom";

import AddIcon from "@mui/icons-material/Add";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

const Main = () => {
  return (
    <>
      <Typography variant="h2" align="center" mt={4}>
        Welcom Mohsen
      </Typography>
      <Typography variant="h6" align="center" mt={2}>
        Please chose what do you want to do
      </Typography>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="center"
        mt={5}
      >
        <Link to="/add-new">
          <Button variant="contained" size="large" startIcon={<AddIcon />}>
            Add new Contact
          </Button>
        </Link>

        <Button variant="contained" size="large" startIcon={<PeopleAltIcon />}>
          Show all contacts
        </Button>
      </Stack>
    </>
  );
};

export default Main;
