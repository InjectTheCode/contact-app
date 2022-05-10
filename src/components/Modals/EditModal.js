import React from "react";

import {
  Backdrop,
  Box,
  Modal,
  Fade,
  Button,
  Typography,
  Grid,
  TextareaAutosize,
  TextField,
} from "@mui/material";

const EditModal = ({ open, onClose }) => {
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
            Editing
          </Typography>

          <Box
            component="form"
            sx={{
              px: 2,
              py: 3,
            }}
          >
            <TextField
              margin="normal"
              fullWidth
              label="Name"
              type="text"
              id="name"
              // inputProps={{ maxLength: 20 }}
            />

            <TextField
              margin="normal"
              fullWidth
              label="Last Name"
              type="text"
              id="lastName"
              inputProps={{ maxLength: 30 }}
            />

            <TextField
              margin="normal"
              fullWidth
              label="Phone Number"
              placeholder="format number like 09121234567"
              type="number"
              id="phoneNumber"
            />

            <TextField
              margin="normal"
              fullWidth
              label="Telephone"
              type="number"
              id="telephone"
            />

            <TextField
              margin="normal"
              fullWidth
              label="Email"
              type="email"
              id="email"
            />

            <Box>
              <TextareaAutosize
                minRows={3}
                placeholder="Add any extra description you want"
                id="description"
              />
            </Box>
          </Box>

          <Grid container spacing={2} mt={2}>
            <Grid item>
              <Button variant="contained" color="error">
                Save
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
};

export default EditModal;
