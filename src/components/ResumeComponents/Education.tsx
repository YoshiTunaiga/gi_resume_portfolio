import { Container, Paper, Typography, Box, Divider } from "@mui/material";
import Grid from "@mui/material/Grid2";

import { education, certifications } from "../../data";

const Education = () => {
  return (
    <Container maxWidth="lg" fixed sx={{ padding: "10 10 2 10" }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
        }}>
        {/* Education */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Education
          </Typography>
          <Box>
            {education.map((edu, index) => (
              <Box key={index} sx={{ mb: 3 }}>
                <Grid
                  container
                  width="100%"
                  justifyContent="space-between"
                  textAlign={{ xs: "center", sm: "left" }}
                  alignItems="center"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}>
                  <Grid>
                    <Typography variant="h6" fontWeight="bold">
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

        <Divider />
        {/* Certifications */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Certifications
          </Typography>
          {certifications.map((cert, index) => (
            <Box key={index} sx={{ mb: 3 }}>
              <Grid
                container
                justifyContent="space-between"
                textAlign={{ xs: "center", sm: "left" }}
                alignItems="center">
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
      </Paper>
    </Container>
  );
};

export default Education;
