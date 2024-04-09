"use client";
import * as React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

const pages = ["API", "Artists", "NFTs", "Blog"];

function AppNavbar() {
  return (
    <Grid sx={{ px: 4, py: 1 }}>
      <Box sx={{ display: "flex" }}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.1191 3.20123L27.1486 9.66137L16.5918 16.5942L4.85327 9.66137L16.1191 3.20123Z"
            fill="#F74581"
          />
          <path
            d="M4.85327 9.66138L16.5918 16.5942V28.6479L5.01084 22.1877L4.85327 9.66138Z"
            fill="#813380"
          />
          <path
            d="M16.5918 16.5942L27.1486 9.66138V22.109L16.5918 28.5691V16.5942Z"
            fill="#1A237E"
          />
          <path
            d="M4.85716 9.92495L4.85326 9.66133L5.01082 9.74011L16.6707 28.4905L16.5918 28.6478L16.476 28.5874L4.85716 9.92495Z"
            fill="#F74581"
          />
        </svg>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: 600 }}
        >
          Arttribute
        </Typography>
        <Box sx={{ display: "flex" }}>
          {pages.map((page) => (
            <Button key={page} sx={{ textTransform: "none" }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
                {page}
              </Typography>
            </Button>
          ))}
        </Box>
      </Box>
    </Grid>
  );
}
export default AppNavbar;
