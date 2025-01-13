import React, { useState, SyntheticEvent } from "react";
// import { Chip, Box } from "@mui/material";
import { Container, Box, Tabs, Tab } from "@mui/material";
import { TabPanel } from "../components/TabPanel";
import Engineering from "../components/ProjectsComponents/Engineering";
import DataAnalysis from "../components/ProjectsComponents/DataAnalysis";
import LinkedInPosts from "../components/ProjectsComponents/LinkedInPosts";
import Testimonials from "../components/ProjectsComponents/Testimonials";

const Projects = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          flexGrow: 1,
          bgcolor: "var(--dark-background)",
          border: "1px solid var(--semantic-white)",
        }}>
        <Tabs
          variant="scrollable"
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{ sx: { display: "none" } }}
          sx={{
            // border: "1px solid red",
            "& .MuiTabs-flexContainer": {
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            },
            "& .MuiButtonBase-root": {
              color: "var(--semantic-white)",
            },
            "& .Mui-selected": {
              color: "var(--gold)",
              textDecoration: "underline",
            },
          }}>
          <Tab label="Engineer" />
          <Tab label="Data Analysis" />
          <Tab label="LinkedIn Posts" />
          <Tab label="LinkedIn Recommendations" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Engineering />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <DataAnalysis />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <LinkedInPosts />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Testimonials />
        </TabPanel>
      </Box>
    </Container>
  );
};

export default Projects;
