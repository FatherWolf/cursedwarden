// src/pages/HomePage.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from '@mui/material';
import Largelogo from '../Images/Largelogo.png';
import keithImg from '../Images/keithimg.png';
import hdfImg from '../Images/hdfimg.png';
import gamma from '../Images/gamma.png';

const services = [
  {
    title: 'Custom Web & WordPress Development',
    description:
      'From React & MUI single-page apps to WordPress sites, we deliver scalable, easy-to-manage web solutions.',
  },
  {
    title: 'SEO & Digital Marketing',
    description:
      'Improve your Google ranking and run targeted ad campaigns that drive real customer growth.',
  },
  {
    title: 'Client-Centric Collaboration',
    description:
      'Transparent planning, regular check-ins, and post-launch support—every step of the way.',
  },
];

const projects = [
  {
    title: "Keith's Roofing",
    image: keithImg,
    link: 'https://keith.cursedwardenlabs.com',
  },
  {
    title: 'HDF Hauling',
    image: hdfImg,
    link: 'https://hdfhauling.com',
  },
];

const HomePage: React.FC = () => (
  <>
    <Helmet>
      <title>Cursed Warden Labs | Bespoke Web & Software Dev</title>
      <meta
        name="description"
        content="Cursed Warden Labs builds custom React, MUI & WordPress websites, Node.js backends, and marketing strategies that help businesses get up to 80% more traffic."
      />
      <meta
        name="keywords"
        content="custom web development, WordPress design, React developer, Node.js backend, SEO, digital marketing"
      />
      <link rel="canonical" href="https://cursedwardenlabs.com/" />
    </Helmet>

    <Box
      component="main"
      sx={{ bgcolor: '#000', color: '#fff', minHeight: '100vh' }}
    >
      {/* HERO */}
      <Box
        component="section"
        sx={{ py: { xs: 8, md: 12 }, textAlign: 'center' }}
      >
        <Container maxWidth="sm">
          <Box
            component="img"
            src={Largelogo}
            alt="Cursed Warden Labs Logo"
            sx={{
              width: '80%',
              maxWidth: 300,
              mb: 4,
              mx: 'auto',
              display: 'block',
            }}
          />
          <Typography
            variant="h2"
            component="h1"
            sx={{ fontWeight: 'bold', color: '#c3f73a', mb: 2 }}
          >
            Let’s Bring Your Website to Life
          </Typography>
          <Typography variant="h6" sx={{ color: '#ddd' }}>
            Businesses with professional websites see up to{' '}
            <Box component="span" sx={{ fontWeight: 'bold', color: '#c3f73a' }}>
              80% more traffic
            </Box>{' '}
            and{' '}
            <Box component="span" sx={{ fontWeight: 'bold', color: '#c3f73a' }}>
              55% higher revenue
            </Box>
            .
          </Typography>
        </Container>
      </Box>

      {/* SERVICES */}
      <Box component="section" sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            sx={{ color: '#c3f73a', mb: 4 }}
          >
            Our Services
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3,1fr)' },
              gap: 4,
            }}
          >
            {services.map((svc) => (
              <Card
                key={svc.title}
                elevation={0}
                sx={{ bgcolor: '#1c1018', color: '#fff', p: 2 }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ color: '#c3f73a', mb: 1 }}>
                    {svc.title}
                  </Typography>
                  <Typography>{svc.description}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* FEATURED PROJECTS */}
      <Box component="section" sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            sx={{ color: '#c3f73a', mb: 4 }}
          >
            Recent and Ongoing Projects
          </Typography>
          <Box
            sx={{
              display: 'grid',
              // only two columns, even on desktop
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
              gap: 4,
              // center the whole grid and cap its max width
              justifyContent: 'center',
              maxWidth: 800,
              mx: 'auto',
            }}
          >
            {projects.map((proj) => (
              <Card
                key={proj.title}
                elevation={0}
                sx={{ bgcolor: '#1c1018', overflow: 'hidden' }}
              >
                {proj.link ? (
                  <CardActionArea
                    component="a"
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CardMedia
                      component="img"
                      height="180"
                      image={proj.image}
                      alt={proj.title}
                    />
                    <CardContent>
                      <Typography variant="h6" sx={{ color: '#c3f73a' }}>
                        {proj.title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                ) : (
                  <>
                    <CardMedia
                      component="img"
                      height="180"
                      image={proj.image}
                      alt={proj.title}
                    />
                    <CardContent>
                      <Typography variant="h6" sx={{ color: '#c3f73a' }}>
                        {proj.title}
                      </Typography>
                    </CardContent>
                  </>
                )}
              </Card>
            ))}
          </Box>
        </Container>
      </Box>
      {/* CTA */}
      <Box
        component="section"
        sx={{ py: { xs: 8, md: 12 }, textAlign: 'center' }}
      >
        <Container maxWidth="sm">
          <Typography variant="h4" gutterBottom sx={{ color: '#c3f73a' }}>
            Ready to Get Started?
          </Typography>
          <Typography variant="body1" paragraph>
            Reach out now and let's discuss how we can transform your online
            presence.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#c3f73a',
              color: '#000',
              '&:hover': { backgroundColor: '#a6e12f' },
            }}
            href="/contact"
          >
            Contact Us
          </Button>
        </Container>
      </Box>
    </Box>
  </>
);

export default HomePage;
