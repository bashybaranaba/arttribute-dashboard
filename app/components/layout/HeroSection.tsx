"use client";
import * as React from "react";
import { Grid, Box, Button, Typography } from "@mui/material";

const pages = ["Products", "Pricing", "Blog"];

function HeroSection() {
  return (
    <Grid
      sx={{
        px: 12,
        py: 14,
        borderRadius: 6,
        background:
          "linear-gradient(145deg, #e8eaf6 30%, #fce4ec 60%, #fffde7 80%)",
      }}
    >
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <Typography variant="h3" sx={{ flexGrow: 1, fontWeight: 600 }}>
            Equitable Transparent AI Art
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 400 }}>
            Arttribute enables fair and transparent use of art in the realm of
            generative AI
          </Typography>
          <Box gap={2} sx={{ display: "flex" }}>
            <Button
              variant="contained"
              sx={{ mt: 4, borderRadius: 3, textTransform: "none", px: 8 }}
              color="secondary"
            >
              See Demo
            </Button>
            <Button
              variant="contained"
              sx={{ mt: 4, borderRadius: 3, textTransform: "none", px: 8 }}
            >
              Get Started
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default HeroSection;
