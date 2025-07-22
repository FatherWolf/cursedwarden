// src/pages/AboutPage.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Container,
  Typography,
  Avatar,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import ProfilePic from '../Images/Profile.png';

const AboutPage: React.FC = () => (
  <>
    <Helmet>
      <title>Cursed Warden Labs | About Austin Engle</title>
      <meta
        name="description"
        content="Meet Austin Engle, a customer-focused Full Stack Engineer specializing in React, JavaScript, UI/UX design, and agile delivery."
      />
      <link rel="canonical" href="https://cursedwardenlabs.com/about" />
    </Helmet>

    <Box
      component="main"
      sx={{ bgcolor: '#000', color: '#fff', py: { xs: 6, md: 10 } }}
    >
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Avatar
          src={ProfilePic}
          alt="Austin Engle"
          sx={{
            width: 200,
            height: 200,
            mx: 'auto',
            mb: 3,
            border: '3px solid #c3f73a',
          }}
        />

        <Typography variant="h4" gutterBottom sx={{ color: '#c3f73a' }}>
          Austin Engle
        </Typography>

        <Typography variant="subtitle1" paragraph>
          Full Stack Software Engineer
          <br />
          Maiden, NC •{' '}
          <a
            href="https://linkedin.com/in/dev-engle"
            style={{ color: '#c3f73a', textDecoration: 'none' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/dev-engle
          </a>
        </Typography>

        <Button
          variant="outlined"
          color="secondary"
          href="/resume.pdf"
          target="_blank"
          sx={{ borderColor: '#c3f73a', color: '#c3f73a', mb: 4 }}
        >
          Download Resume
        </Button>

        <Typography
          variant="body1"
          paragraph
          sx={{ maxWidth: 700, mx: 'auto' }}
        >
          I’m a customer-focused engineer with 6+ years transforming client
          visions into high-impact web applications. From Figma prototypes to
          production deployment, I combine UI/UX design with robust
          React/Node.js architectures, driving measurable gains in
          responsiveness, engagement, and revenue.
        </Typography>
      </Container>

      <Container maxWidth="md" sx={{ mt: 6 }}>
        <Typography variant="h5" sx={{ color: '#c3f73a', mb: 2 }}>
          Key Skills & Highlights
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="React • JavaScript/TypeScript • Material-UI"
              secondary="Crafted single-page apps and custom components, boosting site performance by 20%."
              primaryTypographyProps={{ color: '#fff', fontWeight: 'bold' }}
              secondaryTypographyProps={{ color: 'grey.400' }}
            />
          </ListItem>
          <Divider sx={{ bgcolor: 'grey.800' }} />
          <ListItem>
            <ListItemText
              primary="UI/UX & Figma Prototyping"
              secondary="Designed, reviewed, and implemented client layouts—improving onboarding satisfaction by 20%."
              primaryTypographyProps={{ color: '#fff', fontWeight: 'bold' }}
              secondaryTypographyProps={{ color: 'grey.400' }}
            />
          </ListItem>
          <Divider sx={{ bgcolor: 'grey.800' }} />
          <ListItem>
            <ListItemText
              primary="Agile Leadership (Scrum Master)"
              secondary="Orchestrated sprints, stand-ups & retrospectives, elevating team delivery cadence and alignment."
              primaryTypographyProps={{ color: '#fff', fontWeight: 'bold' }}
              secondaryTypographyProps={{ color: 'grey.400' }}
            />
          </ListItem>
          <Divider sx={{ bgcolor: 'grey.800' }} />
          <ListItem>
            <ListItemText
              primary="Customer Focus & Support"
              secondary="Maintained 99% uptime on client sites, provided post-launch support, and drove continuous optimizations."
              primaryTypographyProps={{ color: '#fff', fontWeight: 'bold' }}
              secondaryTypographyProps={{ color: 'grey.400' }}
            />
          </ListItem>
        </List>
      </Container>
    </Box>
  </>
);

export default AboutPage;
