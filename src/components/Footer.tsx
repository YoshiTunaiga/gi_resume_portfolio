import React from "react";
import { Divider, Box, Typography, Link } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { LinkedIn, GitHub, LocationOn } from "@mui/icons-material";

const Footer = () => {
  return (
    <>
      <Divider />
      <Grid container spacing={4} justifyContent="space-between" sx={{ py: 4 }}>
        <Grid>
          Contact Info
          <Box
            sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <LocationOn fontSize="small" />
              <Typography variant="body2">Kissimmee, FL</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid>
          LinkedIn
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <LinkedIn fontSize="small" />
              <Typography variant="body2">
                <Link href="https://www.linkedin.com/in/gisseldiazf/">
                  linkedin.com/in/gisseldiazf
                </Link>
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid>
          GitHub
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <GitHub fontSize="small" />
              <Typography variant="body2">
                <Link href="https://github.com/YoshiTunaiga">
                  github.com/YoshiTunaiga
                </Link>
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid>
          &copy; {new Date().getFullYear()}
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <Typography variant="body2">
                Gi Diaz, Full Stack Software Engineer
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
