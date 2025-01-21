import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Container,
  Paper,
  Typography,
  Collapse,
} from "@mui/material";
import { projectsData } from "../../data/projectsData";
import { ProjectImage } from "../common/ProjectImage";

import { styled } from "@mui/material/styles";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { PublicOutlined, GitHub } from "@mui/icons-material";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

const Engineering = () => {
  const [selectedCard, setSelectedCard] = useState(0);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
          justifyContent: "center",
          gap: 4,
          flexWrap: "wrap",
          bgcolor: "var(--dark-background)",
        }}>
        {projectsData.map((project, index) => (
          <Card
            key={project.title}
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? "" : undefined}
            sx={{
              maxWidth: 350,
              minHeight: 460,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}>
            <ProjectImage imagePath={project.image} />
            <CardContent sx={{ height: "100%" }}>
              <Typography variant="h5" component="div">
                {project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              {project.link && (
                <IconButton aria-label="add to favorites">
                  <a
                    target="_blank"
                    href={project.link}
                    style={{ color: "#0074b1" }}>
                    <PublicOutlined />
                  </a>
                </IconButton>
              )}
              {project.gitHubLink && (
                <IconButton aria-label="share">
                  <a
                    target="_blank"
                    href={project.gitHubLink}
                    style={{
                      textDecoration: "none",
                      color: "var(--semantic-black)",
                    }}>
                    <GitHub />
                  </a>
                </IconButton>
              )}
              <ExpandMore
                expand={expanded && selectedCard === index}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more">
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: "bold",
                    display:
                      expanded && selectedCard === index ? "none" : "block",
                  }}>
                  Tech - Skills
                </Typography>
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse
              in={expanded && selectedCard === index}
              timeout="auto"
              unmountOnExit>
              <CardContent>
                <Typography sx={{ marginBottom: 2 }}>
                  {project.techSkills}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        ))}
      </Paper>
    </Container>
  );
};

export default Engineering;
