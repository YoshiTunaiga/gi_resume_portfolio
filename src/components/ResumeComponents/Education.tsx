import { Container, Paper, Typography, Box, Divider } from "@mui/material";
import Grid from "@mui/material/Grid2";
import "../../styles/resume.css";

import { education, certifications } from "../../data/data";

const Education = () => {
  return (
    <Container
      maxWidth="xl"
      fixed
      sx={{
        padding: "10 10 2 10",
        "& .MuiContainer-root": {
          margin: 0,
          paddingLeft: 0,
          paddingRight: 0,
        },
      }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        {/* Education */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Education
          </Typography>
          <Box className="single-ed-container">
            {education.map((edu, index) => (
              <Box key={index}>
                <Grid className="single-education-grid">
                  <Grid>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {edu.degree},{" "}
                      <span
                        style={{
                          fontWeight: "normal",
                          fontSize: 16,
                          fontStyle: "italic",
                        }}>
                        {edu.school}, {edu.location}
                      </span>
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                      {edu.subject}
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography variant="body2" color="textSecondary">
                      {edu.year}
                    </Typography>
                    {edu.gpa && (
                      <Typography variant="body2" color="textSecondary">
                        GPA: {edu.gpa}
                      </Typography>
                    )}
                  </Grid>
                </Grid>
              </Box>
            ))}
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />
        {/* Certifications */}
        <Box sx={{ mb: 4, mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Certifications
          </Typography>
          <Box className="single-ed-container">
            {certifications.map((cert, index) => (
              <Box key={index} sx={{ mb: 3 }}>
                <Grid
                  container
                  justifyContent="space-between"
                  textAlign={{ xs: "left", sm: "left" }}>
                  <Grid>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {cert.title}
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                      {cert.issuer}
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography variant="body2" color="textSecondary">
                      {cert.year}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            ))}
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Education;
