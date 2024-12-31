import { Divider, Box, Typography, Link } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { LinkedIn, GitHub } from "@mui/icons-material";

const Footer = () => {
  return (
    <>
      <Divider style={{ backgroundColor: "var(--gold)" }} />
      <Grid
        container
        spacing={10}
        justifyContent="center"
        sx={{ py: 4, textAlign: "center" }}>
        <Grid>
          LinkedIn
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <LinkedIn fontSize="small" />
              <Typography variant="body2">
                <Link
                  href="https://www.linkedin.com/in/gisseldiazf/"
                  style={{ color: "var(--gold)" }}>
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
                <Link
                  href="https://github.com/YoshiTunaiga"
                  style={{ color: "var(--gold)" }}>
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
              <Typography
                variant="body2"
                sx={{
                  flexWrap: "wrap",
                  display: "flex",
                  justifyContent: "center",
                  color: "var(--gold)",
                }}>
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
