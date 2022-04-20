import * as React from "react";
import { Button, AppBar, Toolbar, Typography } from "@mui/material";

export default function SearchAppBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h5"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          Contact App
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
