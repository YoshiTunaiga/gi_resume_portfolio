import React, { useState, SyntheticEvent } from "react";
// import { Chip, Box } from "@mui/material";
import { Container, Box, Tabs, Tab } from "@mui/material";
import { TabPanel } from "../components/TabPanel";
import Engineering from "../components/ProjectsComponents/Engineering";
import DataAnalysis from "../components/ProjectsComponents/DataAnalysis";
import LinkedInPosts from "../components/ProjectsComponents/LinkedInPosts";

const Projects = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
        }}>
        <Tabs
          variant="scrollable"
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{ sx: { display: "none" } }}
          sx={{
            "& .MuiTabs-flexContainer": {
              flexWrap: "wrap",
            },
          }}>
          <Tab label="Engineer" />
          <Tab label="Data Analysis" />
          <Tab label="LinkedIn Posts" />
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
      </Box>
    </Container>
  );
};

export default Projects;
