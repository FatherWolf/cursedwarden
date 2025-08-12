// src/pages/AboutPage.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Container,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import ProfilePic from '../Images/Profile.webp';
import ProfilePicPng from '../Images/Profile.png';
import ProgressiveImage from '../components/ProgressiveImage';
import StructuredData from '../components/StructuredData';

const AboutPage: React.FC = () => (
  <>
    <StructuredData type="person" />
    <StructuredData 
      type="breadcrumb" 
      data={{
        items: [
          { name: 'Home', url: '/' },
          { name: 'About', url: '/about' }
        ]
      }} 
    />
    <Helmet>
      <title>About Austin Engle | Expert Web Developer Charlotte NC | 6+ Years Experience</title>
      <meta
        name="description"
        content="Meet Austin Engle, Charlotte NC's premier web developer with 6+ years experience. Expert in React, TypeScript, WordPress & SEO. Based in Maiden NC, serving all of Charlotte metro area. View resume & portfolio."
      />
      <meta
        name="keywords"
        content="Austin Engle web developer, Charlotte NC web developer, React developer Charlotte, full stack developer North Carolina, Maiden NC developer, web developer resume, JavaScript developer Charlotte, TypeScript expert"
      />
      <meta name="author" content="Austin Engle" />
      <meta property="og:title" content="Austin Engle | Expert Web Developer Charlotte NC" />
      <meta property="og:description" content="Meet Austin Engle, Charlotte NC's premier web developer with 6+ years experience in React, TypeScript, WordPress & SEO." />
      <meta property="og:type" content="profile" />
      <meta property="og:url" content="https://cursedwardenlabs.com/about" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Austin Engle | Expert Web Developer Charlotte NC" />
      <meta name="twitter:description" content="Meet Austin Engle, Charlotte NC's premier web developer with 6+ years experience in React, TypeScript, WordPress & SEO." />
      <link rel="canonical" href="https://cursedwardenlabs.com/about" />
    </Helmet>

    <Box
      component="main"
      sx={{ bgcolor: '#000', color: '#fff', py: { xs: 6, md: 10 } }}
    >
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Box
          sx={{
            width: 200,
            height: 200,
            mx: 'auto',
            mb: 3,
            border: '3px solid #c3f73a',
            borderRadius: '50%',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ProgressiveImage
            webpSrc={ProfilePic}
            fallbackSrc={ProfilePicPng}
            alt="Austin Engle - Expert Web Developer Charlotte NC - 6+ Years Experience React WordPress SEO"
            loading="eager"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>

        <Typography variant="h4" gutterBottom sx={{ color: '#c3f73a' }}>
          Austin Engle
        </Typography>

        <Typography variant="subtitle1" paragraph>
          Full Stack Software Engineer
          <br />
          Maiden, NC &nbsp;•&nbsp;&nbsp;
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
          component="a"
          href="/resume.pdf"
          download="Austin_Engle_Resume.pdf"
          sx={{
            borderColor: '#c3f73a',
            color: '#c3f73a',
            mb: 4,
          }}
        >
          Download Resume
        </Button>

        <Typography
          variant="body1"
          paragraph
          sx={{ maxWidth: 700, mx: 'auto' }}
        >
          Customer-focused Full Stack Software Engineer with 6+ years of
          experience designing and delivering modern web applications. Expert in
          React, JavaScript/TypeScript, Material-UI, and UI/UX design. Proven
          track record improving performance (–25% load time), responsiveness
          (+30%), and engagement (+40%). Skilled Scrum Master and team
          collaborator who turns Figma prototypes into scalable,
          production-ready code.
        </Typography>
      </Container>

      <Container maxWidth="md" sx={{ mt: 6 }}>
        <Typography variant="h5" sx={{ color: '#c3f73a', mb: 2 }}>
          Core Competencies & Highlights
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Front-End: React.js, React Native, Material-UI, Angular.js, SASS/CSS, HTML5"
              secondary="Crafted single-page apps and custom components, boosting site performance by 20%."
              primaryTypographyProps={{ color: '#fff', fontWeight: 'bold' }}
              secondaryTypographyProps={{ color: 'grey.400' }}
            />
          </ListItem>
          <Divider sx={{ bgcolor: 'grey.800' }} />
          <ListItem>
            <ListItemText
              primary="Back-End: Node.js, Express, RESTful APIs, Firebase, Contentful"
              secondary="Built scalable server-side logic and integrated third-party services."
              primaryTypographyProps={{ color: '#fff', fontWeight: 'bold' }}
              secondaryTypographyProps={{ color: 'grey.400' }}
            />
          </ListItem>
          <Divider sx={{ bgcolor: 'grey.800' }} />
          <ListItem>
            <ListItemText
              primary="UX & Design: Figma, responsive layouts, accessibility"
              secondary="Designed interactive prototypes and delivered a 20% increase in user satisfaction."
              primaryTypographyProps={{ color: '#fff', fontWeight: 'bold' }}
              secondaryTypographyProps={{ color: 'grey.400' }}
            />
          </ListItem>
          <Divider sx={{ bgcolor: 'grey.800' }} />
          <ListItem>
            <ListItemText
              primary="Agile & Leadership: Scrum Master, CI/CD, Docker"
              secondary="Led sprint planning and automated deployments, reducing release times by 50%."
              primaryTypographyProps={{ color: '#fff', fontWeight: 'bold' }}
              secondaryTypographyProps={{ color: 'grey.400' }}
            />
          </ListItem>
          <Divider sx={{ bgcolor: 'grey.800' }} />
          <ListItem>
            <ListItemText
              primary="Customer Focus & Support"
              secondary="Delivered 99% uptime, provided post-launch support, and drove continuous optimizations."
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
