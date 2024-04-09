import Image from "next/image";
import styles from "./page.module.css";
import { Button, Box, Grid } from "@mui/material";

import AppNavbar from "./components/layout/AppNavbar";
import HeroSection from "./components/layout/HeroSection";
export default function Home() {
  return (
    <>
      <Grid sx={{ px: 5 }}>
        <AppNavbar />
        <HeroSection />
      </Grid>
    </>
  );
}
