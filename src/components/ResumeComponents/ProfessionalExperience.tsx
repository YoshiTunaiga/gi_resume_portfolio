import {
  Container,
  Paper,
  Typography,
  Box,
  // List,
  // ListItem,
  // ListItemText,
  // ListItemIcon,
  Chip,
  Divider,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
// import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { experience, skills } from "../../data/experienceData";

const ProfessionalExperience = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        padding: "10 10 2 10",
        "& .MuiContainer-root": {
          margin: 0,
          paddingLeft: 0,
          paddingRight: 0,
        },
      }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        {/* Technical Skills */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Technical Skills
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {skills.map((skill, index) => (
              <Chip key={index} label={skill} variant="outlined" size="small" />
            ))}
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />
        {/* Experience */}
        <Box sx={{ mb: 4, mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Professional Experience
          </Typography>
          <Box className="resume-section-box">
            {experience.map((job, index) => (
              <Box key={index} sx={{ mb: 3, mt: 2 }}>
                <Grid
                  container
                  justifyContent="space-between"
                  textAlign={{ sm: "left" }}>
                  <Grid>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {job.title}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      sx={{ maxWidth: { xs: "100%", sm: "100%" } }}>
                      {job.company}
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography variant="body2" color="textSecondary">
                      {job.period}
                    </Typography>
                  </Grid>
                </Grid>
                {/* <List
                dense
                sx={{
                  "& .MuiListItemIcon-root": {
                    minWidth: 34,
                  },
                }}>
                {job.achievements.map((achievement, i) => (
                  <ListItem key={i}>
                    <ListItemIcon>
                      <ArrowRightIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={achievement}
                      primaryTypographyProps={{ variant: "body2" }}
                    />
                  </ListItem>
                ))}
              </List> */}
              </Box>
            ))}
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default ProfessionalExperience;
