"use client";
import * as React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

function Footer() {
  return (
    <Grid container sx={{ backgroundColor: "#eceff1", mt: 12 }}>
      <Grid item lg={4} sx={{ p: 5 }}>
        <Box sx={{ display: "flex" }}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 23 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.613 0.201233L22.6425 6.66137L12.0857 13.5942L0.347168 6.66137L11.613 0.201233Z"
              fill="white"
            />
            <path
              d="M0.347168 6.66138L12.0857 13.5942V25.6479L0.504732 19.1877L0.347168 6.66138Z"
              fill="#DDDDDD"
            />
            <path
              d="M12.0857 13.5942L22.6425 6.66138V19.109L12.0857 25.5691V13.5942Z"
              fill="#A2A2A2"
            />
            <path
              d="M0.351056 6.92495L0.347152 6.66133L0.504715 6.74011L12.1646 25.4905L12.0857 25.6478L11.9699 25.5874L0.351056 6.92495Z"
              fill="white"
            />
          </svg>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 600 }}
          >
            Arttribute
          </Typography>
        </Box>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          © 2023 Arttribute. All rights reserved
        </Typography>
      </Grid>
      <Grid item lg={4} sx={{ p: 5 }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Company
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Technology
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Pricing
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          About
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Contact
        </Typography>
      </Grid>
      <Grid item lg={4} sx={{ p: 5 }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Legal
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Privacy Policy
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Terms of Service
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Arttribute License
        </Typography>
      </Grid>
    </Grid>
  );
}
export default Footer;
