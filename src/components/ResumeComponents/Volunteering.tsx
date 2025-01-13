import {
  Container,
  Paper,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

import { volunteering } from "../../data/data";

const Volunteering = () => {
  return (
    <Container maxWidth="lg" fixed sx={{ padding: "10 10 2 10" }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        {/* Volunteering */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Volunteer Experience
          </Typography>
          {volunteering.map((volunteer, index) => (
            <Box key={index} sx={{ mb: 3 }}>
              <Grid
                container
                width="100%"
                justifyContent="space-between"
                textAlign={{ xs: "left", sm: "left" }}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderBottom: "1px solid var(--gold)",
                  marginBottom: 2,
                }}>
                <Grid container direction="column">
                  <Grid>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {volunteer.title},{" "}
                      <span
                        style={{
                          fontWeight: "normal",
                          fontSize: 16,
                          fontStyle: "italic",
                        }}>
                        {volunteer.organization}, {volunteer.location}
                      </span>
                    </Typography>
                  </Grid>
                  <Grid>
                    <List dense>
                      {volunteer.achievements.map((achievement, index) => (
                        <ListItem key={index}>
                          <ListItemText
                            primary={achievement}
                            primaryTypographyProps={{ variant: "body2" }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                </Grid>
                <Grid>
                  <Typography variant="subtitle2" color="textSecondary">
                    {volunteer.period}
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

export default Volunteering;
