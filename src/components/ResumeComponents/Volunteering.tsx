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

import { volunteering } from "../../data";

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
                textAlign={{ xs: "center", sm: "left" }}
                alignItems="center"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}>
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
                  <Typography variant="subtitle2" color="textSecondary">
                    {volunteer.period}
                  </Typography>
                </Grid>
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
            </Box>
          ))}
        </Box>
      </Paper>
    </Container>
  );
};

export default Volunteering;
