import {
  Container,
  Paper,
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
} from "@mui/material";
import { testimonialsData } from "../../data/testimonialsData";

const Testimonials = () => {
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
      <Paper
        elevation={0}
        sx={{
          py: 2,
          my: 0,
          mx: 0,
          display: "flex",
          gap: 4,
          flexWrap: "wrap",
          bgcolor: "var(--dark-background)",
        }}>
        {testimonialsData.map((testimonial) => (
          <Card key={testimonial.date} sx={{}}>
            <CardHeader
              sx={{
                textAlign: { xs: "center", sm: "left" },
                display: { xs: "block", sm: "flex" },
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "center",
              }}
              avatar={
                <Avatar
                  sx={{ bgcolor: "red" }}
                  aria-label="recipe"
                  src={
                    testimonial.customer_avatar && testimonial.customer_avatar
                  }>
                  {testimonial.customer_name[0]}
                </Avatar>
              }
              title={testimonial.customer_name}
              subheader={testimonial.customer_tagline}
            />
            <CardContent sx={{ py: 0 }}>
              <Typography
                variant="body2"
                sx={{ p: 0, m: 0, color: "text.secondary" }}>
                {testimonial.text}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Paper>
    </Container>
  );
};

export default Testimonials;
