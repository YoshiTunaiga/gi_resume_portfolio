import { useState } from "react";
import { Container, Box, Tabs, Tab } from "@mui/material";
import ProfessionalExperience from "../components/ResumeComponents/ProfessionalExperience";
import Education from "../components/ResumeComponents/Education";
import Volunteering from "../components/ResumeComponents/Volunteering";
import { TabPanel } from "../components/TabPanel";

const Resume = () => {
  const [value, setValue] = useState(0);

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        my: 4,
        py: 4,
        "& .MuiContainer-root": {
          margin: 0,
          paddingLeft: 0,
          paddingRight: 0,
        },
      }}>
      <Box
        sx={{
          "& .MuiBox-root": {
            padding: 0,
            margin: 0,
          },
          padding: 0,
          margin: 0,
          width: "100%",
          maxWidth: "1200px",
          minWidth: "300px",
          flexGrow: 1,
          bgcolor: "var(--dark-background)",
          border: "1px solid var(--semantic-white)",
        }}>
        <Tabs
          variant="scrollable"
          value={value}
          onChange={(_e, newValue) => handleChange(newValue)}
          TabIndicatorProps={{ sx: { display: "none" } }}
          sx={{
            "& .MuiTabs-flexContainer": {
              flexWrap: "wrap",
            },
            "& .MuiButtonBase-root": {
              color: "var(--semantic-white)",
            },
            "& .Mui-selected": {
              color: "var(--gold) !important",
              textDecoration: "underline",
            },
          }}>
          <Tab label="Professional Experience" />
          <Tab label="Education" />
          <Tab label="Volunteer" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <ProfessionalExperience />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Education />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Volunteering />
        </TabPanel>
      </Box>
    </Container>
  );
};

export default Resume;
