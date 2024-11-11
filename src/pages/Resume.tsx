import React, { useState, SyntheticEvent } from "react";
import { Container, Box, Tabs, Tab } from "@mui/material";
import ProfessionalExperience from "../components/ResumeComponents/ProfessionalExperience";
import Education from "../components/ResumeComponents/Education";
import Volunteering from "../components/ResumeComponents/Volunteering";
import { TabPanel } from "../components/TabPanel";
// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
// }

// function TabPanel(props: TabPanelProps) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`tabpanel-${index}`}
//       {...other}>
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

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
