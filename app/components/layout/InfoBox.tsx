"use client";
import * as React from "react";
import { Grid, Box, Button, Typography } from "@mui/material";
import { text } from "stream/consumers";

function infoBox({
  bgcolor,
  textcolor,
  title,
  description,
}: {
  bgcolor: string;
  textcolor: string;
  title: string;
  description: string;
}) {
  return (
    <Grid
      sx={{
        p: 6,
        borderRadius: 6,
        background: bgcolor,
        m: 1,
      }}
    >
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <Typography
            variant="h5"
            sx={{ flexGrow: 1, fontWeight: 600, color: textcolor }}
          >
            {title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            sx={{ fontWeight: 400, color: textcolor }}
          >
            {description}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default infoBox;
