import Image from "next/image";
import styles from "./page.module.css";
import { Button, Box, Grid, Typography } from "@mui/material";

import AppNavbar from "./components/layout/AppNavbar";
import HeroSection from "./components/layout/HeroSection";
import InfoBox from "./components/layout/InfoBox";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <>
      <Box sx={{ px: 5 }}>
        <AppNavbar />
        <HeroSection />

        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item>
            <Typography variant="h4" sx={{ mt: 6, fontWeight: 600 }}>
              Simple, Collaborative, Transformative
            </Typography>
          </Grid>
        </Grid>
        <Grid container sx={{ mt: 4 }}>
          <Grid item xs={12} sm={4}>
            <InfoBox
              bgcolor="#c2185b"
              textcolor="white"
              title="Artists Inspire AI"
              description="Fuel AI models with your unique art. It's like teaching it your creative language! Upload your art collections to train custom AI models"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <InfoBox
              bgcolor="#e91e63"
              textcolor="white"
              title="Choose your Inspiration"
              description="Explore a world of AI-models infused with styles from your favorite artists Pick the one that sparks your imagination!"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <InfoBox
              bgcolor="#4527a0"
              textcolor="white"
              title="Collaborative Creation"
              description="Together, merge ideas into stunning artwork that tells new stories. Use AI models fine tuned by artists to bring your artistic vision to life."
            />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}
