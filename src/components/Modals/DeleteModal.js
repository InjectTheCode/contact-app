import React, { useContext } from "react";
import { ContactContext } from "../../context/ContactContext";

import {
  Backdrop,
  Box,
  Modal,
  Fade,
  Button,
  Typography,
  Grid,
} from "@mui/material";

function DeleteModal({ open, onClose, contactProps }) {
  const { deleteCon } = useContext(ContactContext);

  const style = {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #fff",
    boxShadow: 24,
    p: 1,
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            Are you sure?
          </Typography>
          <Grid container spacing={2} mt={2}>
            <Grid item>
              <Button
                variant="contained"
                color="error"
                onClick={() => deleteCon(contactProps.id)}
              >
                Delete
              </Button>
            </Grid>
            <Grid item>
              <Button onClick={onClose}>Cancle</Button>
            </Grid>
          </Grid>
        </Box>
      </Fade>
    </Modal>
  );
}

export default DeleteModal;
