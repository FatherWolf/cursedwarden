// src/pages/HomePage.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  CardActionArea,
} from '@mui/material';
import Largelogo from '../Images/Largelogo.webp';
import LargelogoPng from '../Images/Largelogo.png';
import keithImg from '../Images/keithimg.webp';
import keithImgPng from '../Images/keithimg.png';
import hdfImg from '../Images/hdfimg.webp';
import hdfImgPng from '../Images/hdfimg.png';
import ProgressiveImage from '../components/ProgressiveImage';
import StructuredData from '../components/StructuredData';

const services = [
  {
    title: 'Charlotte Web Development Services',
    description:
      'Professional React.js and WordPress development in Charlotte NC. Custom websites that increase traffic by 80% and convert visitors into customers. Mobile-responsive design guaranteed.',
  },
  {
    title: 'SEO & Digital Marketing Charlotte',
    description:
      'Top-ranked SEO services in Charlotte NC. We get your business to #1 on Google with proven strategies that drive 200% more leads and revenue growth.',
  },
  {
    title: 'Expert Web Developer Support',
    description:
      '6+ years of experience serving Charlotte, Gastonia, and Concord. Free consultations, transparent pricing, and ongoing support to grow your online presence.',
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
    <StructuredData type="organization" />
    <StructuredData type="website" />
    <StructuredData
      type="breadcrumb"
      data={{
        items: [{ name: 'Home', url: '/' }],
      }}
    />
    <Helmet>
      <title>
        Web Development Charlotte NC | Custom Websites & SEO | Cursed Warden
        Labs
      </title>

      {/* Primary meta tags */}
      <meta
        name="description"
        content="Top-rated web development company in Charlotte NC. Custom React websites, WordPress development, SEO optimization & digital marketing. 80% more traffic guaranteed. Get your free quote today!"
      />
      <meta
        name="keywords"
        content="web development Charlotte NC, website design Charlotte, React developer Charlotte, WordPress developer Charlotte, SEO services Charlotte, digital marketing Charlotte, custom websites North Carolina, Maiden NC web developer, small business websites, e-commerce development"
      />
      <meta name="author" content="Austin Engle - Cursed Warden Labs" />
      <meta name="geo.region" content="US-NC" />
      <meta name="geo.placename" content="Charlotte, NC" />
      <meta name="geo.position" content="35.2271;-80.8431" />
      <meta name="ICBM" content="35.2271, -80.8431" />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href="https://cursedwardenlabs.com/" />

      {/* Open Graph / Facebook */}
      <meta
        property="og:title"
        content="#1 Web Development Charlotte NC | Custom Websites & SEO Services"
      />
      <meta
        property="og:description"
        content="Award-winning web development company in Charlotte NC. Custom React websites, WordPress development, and SEO services that increase traffic by 80%. Serving Charlotte, Gastonia, Concord & surrounding areas."
      />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Cursed Warden Labs" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://cursedwardenlabs.com/" />
      <meta
        property="og:image"
        content="https://cursedwardenlabs.com/social-preview.png"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="#1 Web Development Charlotte NC | Custom Websites & SEO Services"
      />
      <meta
        name="twitter:description"
        content="Award-winning web development company in Charlotte NC. Custom React websites, WordPress development, and SEO services that increase traffic by 80%."
      />
      <meta name="twitter:site" content="@CursedWardenLabs" />
      <meta name="twitter:creator" content="@DevEngle" />
      <meta
        name="twitter:image"
        content="https://cursedwardenlabs.com/twitter-preview.png"
      />
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
            sx={{
              width: '80%',
              maxWidth: 300,
              mb: 4,
              mx: 'auto',
              display: 'block',
            }}
          >
            <ProgressiveImage
              webpSrc={Largelogo}
              fallbackSrc={LargelogoPng}
              alt="Cursed Warden Labs - #1 Web Development Company Charlotte NC - React WordPress SEO Services"
              loading="eager"
              style={{ width: '100%', height: 'auto' }}
            />
          </Box>
          <Typography
            variant="h3"
            component="h1"
            sx={{ fontWeight: 'bold', color: '#c3f73a', mb: 2 }}
          >
            Professional Web Development in Charlotte NC
          </Typography>
          <Typography variant="h6" sx={{ color: '#ddd', mb: 2 }}>
            Professional web development services that get results. Our
            Charlotte NC clients see{' '}
            <Box component="span" sx={{ fontWeight: 'bold', color: '#c3f73a' }}>
              80% more website traffic
            </Box>{' '}
            and{' '}
            <Box component="span" sx={{ fontWeight: 'bold', color: '#c3f73a' }}>
              200% more leads
            </Box>{' '}
            within 90 days.
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: '#bbb', fontStyle: 'italic' }}
          >
            Serving Charlotte, Gastonia, Concord, Maiden & surrounding NC areas
            since 2020
          </Typography>
        </Container>
      </Box>

      {/* ACTION BUTTONS */}
      <Box sx={{ textAlign: 'center', my: { xs: 4, md: 6 } }}>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            component={RouterLink}
            to="/contact"
            variant="contained"
            size="large"
            sx={{
              backgroundColor: '#c3f73a',
              color: '#000',
              px: { xs: 4, md: 6 },
              py: { xs: 1.5, md: 2 },
              fontSize: { xs: '1rem', md: '1.25rem' },
              '&:hover': { backgroundColor: '#a6e12f' },
            }}
          >
            Get Quote
          </Button>
          <Button
            component={RouterLink}
            to="/free-assets"
            variant="outlined"
            size="large"
            sx={{
              borderColor: '#c3f73a',
              color: '#c3f73a',
              px: { xs: 4, md: 6 },
              py: { xs: 1.5, md: 2 },
              fontSize: { xs: '1rem', md: '1.25rem' },
              '&:hover': {
                borderColor: '#a6e12f',
                backgroundColor: 'rgba(195, 247, 58, 0.1)',
              },
            }}
          >
            Free Resources
          </Button>
        </Box>
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
                sx={{ bgcolor: '#1c1018', p: 2 }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ color: '#c3f73a', mb: 1 }}>
                    {svc.title}
                  </Typography>
                  <Typography sx={{ color: '#fff' }}>
                    {svc.description}
                  </Typography>
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
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2,1fr)' },
              gap: 4,
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
                <CardActionArea
                  component="a"
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Box sx={{ height: 180, overflow: 'hidden' }}>
                    <ProgressiveImage
                      webpSrc={
                        proj.title === "Keith's Roofing" ? keithImg : hdfImg
                      }
                      fallbackSrc={
                        proj.title === "Keith's Roofing"
                          ? keithImgPng
                          : hdfImgPng
                      }
                      alt={`${proj.title} - Professional Website Design by Cursed Warden Labs Charlotte NC Web Developer`}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '180px',
                        objectFit: 'cover',
                      }}
                    />
                  </Box>
                  <CardContent>
                    <Typography variant="h6" sx={{ color: '#c3f73a' }}>
                      {proj.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* FINAL CTA */}
      <Box
        component="section"
        sx={{ py: { xs: 8, md: 12 }, textAlign: 'center' }}
      >
        <Container maxWidth="sm">
          <Typography variant="h4" gutterBottom sx={{ color: '#c3f73a' }}>
            Ready to Get Started?
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: '#ddd' }}>
            Reach out now and let’s discuss how we can transform your online
            presence.
          </Typography>
          <Button
            component={RouterLink}
            to="/contact"
            variant="contained"
            sx={{
              backgroundColor: '#c3f73a',
              color: '#000',
              '&:hover': { backgroundColor: '#a6e12f' },
            }}
          >
            Contact Us
          </Button>
        </Container>
      </Box>
    </Box>
  </>
);

export default HomePage;
