import React, { useState, SyntheticEvent } from "react";
import { Container, Box, Tabs, Tab, Typography } from "@mui/material";
import ProfessionalExperience from "../components/ResumeComponents/ProfessionalExperience";
import Education from "../components/ResumeComponents/Education";
import Volunteering from "../components/ResumeComponents/Volunteering";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
const Resume = () => {
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
          display: "flex",
        }}>
        <Tabs
          orientation="vertical"
          aria-label="Vertical tabs example"
          value={value}
          onChange={handleChange}
          sx={{ borderRight: 1, borderColor: "divider" }}>
          <Tab label="Professional Experience" {...a11yProps(0)} />
          <Tab label="Education" {...a11yProps(1)} />
          <Tab label="Volunteer" {...a11yProps(2)} />
        </Tabs>
        <CustomTabPanel value={value} index={0}>
          <ProfessionalExperience />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Education />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Volunteering />
        </CustomTabPanel>
      </Box>
    </Container>
  );
};

export default Resume;
