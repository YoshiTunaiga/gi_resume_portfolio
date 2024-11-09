import React from "react";
import {
  Container,
  Paper,
  Typography,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Chip,
  // Avatar,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import ArrowRightIcon from "@mui/icons-material/ArrowRight"; // import {
//   Email,
//   Phone,
//   LinkedIn,
//   GitHub,
//   LocationOn,
// } from "@mui/icons-material";

const Resume = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "Python",
    "SQL",
    "NoSQL",
    "HTML/CSS",
    "React",
    "React Native",
    "Node.js",
    "Vite",
    "Git",
    "Express",
    "Bubble.io",
    "PostgreSQL",
    "MongoDB",
    "Firebase",
    "AWS (S3, Amplify)",
    "REST APIs",
    "Databricks",
    "CI/CD",
    "Agile",
    "Responsive Web Design",
    "En-to-End Testing",
    "Material-UI",
    "Semantic-UI",
    "styled-components",
    "Bootstrap",
    "tailwindcss",
    "shadcn",
    "Figma",
    "Playwright",
    "Jira",
    "EHR",
    "HIPAA",
  ];

  const experience = [
    {
      title: "Full Stack Software Engineer",
      company: "ApolloMed (now Astrana Health), Alhambra, CA",
      period: "May 2022 - March 2024",
      achievements: [
        "Built and maintained various scalable internal healthcare delivery applications as a core technical contributor for Astrana's Remote Patient Monitoring (RPM)/ Chronic Care Management (CCM) system, Orma.",
        "Managed seamless health data integrations from Remote Patient Monitoring APIs, including Body Trace, Tenovi, and Garmin, resulting in the delivery of real-time vital sign data for 200+ patients, enhancing overall care efficiency.",
        "Collaborated with cross-functional teams across various departments, such as Data, Product, and Strategy, to gather requirements, define user stories, and deliver solutions that effectively met business objectives.",
        "Resolved technical problems that caused software bugs, resulting in an 80% reduction in reported issues over three quarters while providing timely solutions and updates to ensure the smooth functioning of the software.",
        "Implemented query indexing to optimize front-end and back-end performance, which decreased page load times and improved data searches by 20%.",
        "Coordinated with users and stakeholders to extract critical requirements leading to the creation of comprehensive Technical Design Documents and the implementation of robust full-stack features, such as customized Alerts and an advanced Search Bar, improving user experience and satisfaction by 40%.",
      ],
    },
    {
      title: "Junior Software Developer",
      company: "Budget Better (now Much), Techstars '22, Norwalk, CT",
      period: "February 2022 - May 2022",
      achievements: [
        "Accelerated the development of new user-facing social features on the Community Feed, resulting in 20% increased interaction and retention informed by user feedback.",
        "Translated designs and wireframes into high-quality features, generating and optimizing reusable components for maximum DRY performance across a wide range of web-capable devices and browsers, improving user experience by 40%.",
      ],
    },
    {
      title: "Instructional Mentor PT",
      company: "Fullstack Academy – Software Engineer Bootcamp, New York, NY",
      period: "January 2022 - May 2022",
      achievements: [
        "Led intensive daily algorithm sessions focusing on optimization and whiteboard strategies, resulting in a 30% increase in problem-solving skills for cohorts exceeding 20 students each.",
      ],
    },
    {
      title: "Sexual and Behavioral Health Educator",
      company:
        "Community Healthcare Network (non-profit organization), New York, NY",
      period: "June 2021 - August 2021",
      achievements: [
        "Operated a caseload of 90+ HIV-negative patients, delivering Sexual and Behavioral Health services focused on HIV/STI prevention and consistently documenting patient progress using eClinicalWorks HER.",
        "Collaborated with team members to conduct case studies, effectively analyzing and resolving complex challenges across various clinics within the organization.",
      ],
    },
  ];

  const education = {
    degree: "Master of Science in Computer Science",
    school: "Tech University",
    year: "2017",
    gpa: "3.9/4.0",
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        {/* Header */}
        {/* <Box sx={{ mb: 4, textAlign: "center" }}>
          <Avatar
            sx={{
              width: 120,
              height: 120,
              margin: "auto",
              mb: 2,
              bgcolor: "primary.main",
            }}>
            AK
          </Avatar>
          <Typography variant="h4" gutterBottom>
            Alex Kumar
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            Senior Software Engineer
          </Typography>

          Contact Info
          <Box
            sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <Email fontSize="small" />
              <Typography variant="body2">alex.kumar@email.com</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <Phone fontSize="small" />
              <Typography variant="body2">(555) 123-4567</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <LocationOn fontSize="small" />
              <Typography variant="body2">San Francisco, CA</Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <LinkedIn fontSize="small" />
              <Typography variant="body2">linkedin.com/in/alexkumar</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <GitHub fontSize="small" />
              <Typography variant="body2">github.com/alexkumar</Typography>
            </Box>
          </Box>
        </Box> */}

        <Divider sx={{ mb: 4 }} />

        {/* Skills */}
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

        {/* Experience */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Professional Experience
          </Typography>
          {experience.map((job, index) => (
            <Box key={index} sx={{ mb: 3 }}>
              <Grid
                container
                justifyContent="space-between"
                textAlign={{ xs: "center", sm: "left" }}
                alignItems="center">
                <Grid>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {job.title}
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    {job.company}
                  </Typography>
                </Grid>
                <Grid>
                  <Typography variant="body2" color="textSecondary">
                    {job.period}
                  </Typography>
                </Grid>
              </Grid>
              <List dense>
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
              </List>
            </Box>
          ))}
        </Box>

        {/* Education */}
        <Box>
          <Typography variant="h6" gutterBottom>
            Education
          </Typography>
          <Typography variant="subtitle1" fontWeight="bold">
            {education.degree}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {education.school}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Graduated {education.year} • GPA: {education.gpa}
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Resume;
