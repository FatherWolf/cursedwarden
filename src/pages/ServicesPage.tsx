// src/pages/ServicesPage.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';

const ServicesPage: React.FC = () => (
  <>
    <Helmet>
      <title>Cursed Warden Labs | Our Services</title>
      <meta
        name="description"
        content="Our Services: Website design & development, WordPress integration, SEO & digital marketing, and client-centric collaboration. Learn how we plan, prototype, and build custom solutions."
      />
      <meta
        name="keywords"
        content="website design, Figma prototyping, React development, WordPress, SEO services, digital marketing, project planning"
      />
      <link rel="canonical" href="https://cursedwardenlabs.com/services" />
    </Helmet>

    <Box
      component="main"
      sx={{ bgcolor: '#000', color: '#fff', py: { xs: 6, md: 12 } }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          component="h1"
          align="center"
          gutterBottom
          sx={{ color: '#c3f73a', mb: { xs: 4, md: 6 } }}
        >
          Our Services
        </Typography>

        {/* Website Design & Development */}
        <Box component="section" sx={{ mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ color: '#fff' }}
          >
            Website Design & Development
          </Typography>
          <Typography paragraph sx={{ color: '#ddd' }}>
            From initial planning to final launch, we handle every step of your
            website’s creation. We start by mapping out a clear site structure,
            then craft interactive mockups in Figma and share them with you via
            a collaborative planning board for feedback and approval before we
            write a single line of code.
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="Planning & Prototyping"
                primaryTypographyProps={{ sx: { color: '#fff' } }}
                secondary="Interactive wireframes and Figma mockups shared for your review on a live planning board."
                secondaryTypographyProps={{ sx: { color: 'grey.400' } }}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Custom Development"
                primaryTypographyProps={{ sx: { color: '#fff' } }}
                secondary="Responsive React & MUI apps or feature-rich WordPress sites, built to your exact specifications."
                secondaryTypographyProps={{ sx: { color: 'grey.400' } }}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Self-Editing"
                primaryTypographyProps={{ sx: { color: '#fff' } }}
                secondary="WordPress admin interface lets you update content yourself—no developer needed."
                secondaryTypographyProps={{ sx: { color: 'grey.400' } }}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Performance & Security"
                primaryTypographyProps={{ sx: { color: '#fff' } }}
                secondary="Optimized code, hosting, and SSL ensure your site loads fast and stays secure."
                secondaryTypographyProps={{ sx: { color: 'grey.400' } }}
              />
            </ListItem>
          </List>
        </Box>
        <Divider sx={{ bgcolor: 'grey.800', mb: { xs: 6, md: 8 } }} />

        {/* SEO & Marketing */}
        <Box component="section" sx={{ mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ color: '#fff' }}
          >
            SEO & Digital Marketing
          </Typography>
          <Typography paragraph sx={{ color: '#ddd' }}>
            We make sure your business shows up at the top of Google and turn
            visitors into customers with targeted ad campaigns.
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="Keyword Strategy"
                primaryTypographyProps={{ sx: { color: '#fff' } }}
                secondary="Research and implement the terms your customers search for."
                secondaryTypographyProps={{ sx: { color: 'grey.400' } }}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Ad Campaigns"
                primaryTypographyProps={{ sx: { color: '#fff' } }}
                secondary="Custom Google Ads and social media campaigns that drive qualified leads."
                secondaryTypographyProps={{ sx: { color: 'grey.400' } }}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Analytics & Reporting"
                primaryTypographyProps={{ sx: { color: '#fff' } }}
                secondary="Track visits, conversions, and ROI to continually optimize performance."
                secondaryTypographyProps={{ sx: { color: 'grey.400' } }}
              />
            </ListItem>
          </List>
        </Box>
        <Divider sx={{ bgcolor: 'grey.800', mb: { xs: 6, md: 8 } }} />

        {/* Collaboration */}
        <Box component="section">
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ color: '#fff' }}
          >
            Client-Centric Collaboration
          </Typography>
          <Typography paragraph sx={{ color: '#ddd' }}>
            We keep you involved and informed at every stage—from kick-off
            planning to post-launch support.
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="Clear Roadmaps"
                primaryTypographyProps={{ sx: { color: '#fff' } }}
                secondary="Step-by-step project plans so you know what’s coming next."
                secondaryTypographyProps={{ sx: { color: 'grey.400' } }}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Regular Updates"
                primaryTypographyProps={{ sx: { color: '#fff' } }}
                secondary="Frequent check-ins ensure alignment, transparency, and confidence."
                secondaryTypographyProps={{ sx: { color: 'grey.400' } }}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Ongoing Support"
                primaryTypographyProps={{ sx: { color: '#fff' } }}
                secondary="Maintenance, enhancements, and advice as your business grows."
                secondaryTypographyProps={{ sx: { color: 'grey.400' } }}
              />
            </ListItem>
          </List>
        </Box>
      </Container>
    </Box>
  </>
);

export default ServicesPage;
