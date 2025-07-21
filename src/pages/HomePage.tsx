// src/pages/HomePage.tsx
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  TextField,
  Stack,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from '@mui/material';
import Largelogo from '../Images/Largelogo.png';
import keithImg from '../Images/keithimg.png';
import hdfImg from '../Images/hdfimg.png';
import gammaImg from '../Images/gamma.png';

const services = [
  {
    title: 'Custom Web & WordPress Development',
    description:
      'From bespoke React & MUI single-page applications to feature-rich WordPress sites, we leverage Node.js backends and modern frameworks to deliver high-performance, scalable web solutions tailored to your unique business needs.',
  },
  {
    title: 'SEO & Digital Marketing',
    description:
      'We boost your online visibility with targeted search engine optimization, Google ranking strategies, and comprehensive marketing campaigns designed to drive traffic, increase conversions, and grow your brand.',
  },
  {
    title: 'Client-Centric Collaboration',
    description:
      'Whether you’re a nimble startup or a large enterprise, we partner with you every step of the way—planning, transparent communication, and ongoing support—to ensure your project’s success and exceed expectations.',
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
  {
    title: 'Project Gamma',
    image: keithImg,
  },
];

const HomePage: React.FC = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    // integrate with your email service here
  };

  return (
    <Box
      component="main"
      sx={{ bgcolor: '#000', color: '#fff', minHeight: '100vh' }}
    >
      {/* Hero + Contact Form */}
      <Box component="section" sx={{ py: { xs: 6, md: 12 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: { xs: 'center', md: 'space-between' },
              gap: { xs: 4, md: 8 },
            }}
          >
            {/* Hero Image */}
            <Box
              sx={{
                flex: '0 0 auto',
                width: { xs: 200, sm: 300, md: 400 },
                textAlign: 'center',
              }}
            >
              <Box
                component="img"
                src={Largelogo}
                alt="Cursed Warden Labs"
                sx={{
                  width: '100%',
                  height: 'auto',
                  mx: 'auto',
                  display: 'block',
                }}
              />
            </Box>

            {/* Contact Form */}
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ width: { xs: '100%', sm: 360 }, maxWidth: 360 }}
            >
              <Typography
                variant="h5"
                sx={{ color: '#c3f73a', mb: 2, textAlign: 'center' }}
              >
                Let us know what your future holds!
              </Typography>
              <Stack spacing={2}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <TextField
                    fullWidth
                    required
                    name="firstName"
                    label="First Name"
                    value={form.firstName}
                    onChange={handleChange}
                    InputProps={{
                      sx: { backgroundColor: '#1c1018', color: '#fff' },
                    }}
                  />
                  <TextField
                    fullWidth
                    required
                    name="lastName"
                    label="Last Name"
                    value={form.lastName}
                    onChange={handleChange}
                    InputProps={{
                      sx: { backgroundColor: '#1c1018', color: '#fff' },
                    }}
                  />
                </Stack>
                <TextField
                  fullWidth
                  required
                  name="phone"
                  label="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  InputProps={{
                    sx: { backgroundColor: '#1c1018', color: '#fff' },
                  }}
                />
                <TextField
                  fullWidth
                  required
                  name="email"
                  label="Email Address"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  InputProps={{
                    sx: { backgroundColor: '#1c1018', color: '#fff' },
                  }}
                />
                <TextField
                  fullWidth
                  required
                  name="message"
                  label="Your Message"
                  multiline
                  minRows={4}
                  value={form.message}
                  onChange={handleChange}
                  InputProps={{
                    sx: { backgroundColor: '#1c1018', color: '#fff' },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: '#c3f73a',
                    color: '#000',
                    py: 1.5,
                    '&:hover': { backgroundColor: '#a6e12f' },
                  }}
                >
                  Send Message
                </Button>
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Services Section */}
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
                sx={{ backgroundColor: '#1c1018', p: 2 }}
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

      {/* Portfolio Section */}
      <Box component="section" sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            sx={{ color: '#c3f73a', mb: 4 }}
          >
            Featured Projects
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2,1fr)',
                md: 'repeat(3,1fr)',
              },
              gap: 4,
            }}
          >
            {projects.map((proj) => (
              <Card
                key={proj.title}
                elevation={0}
                sx={{
                  backgroundColor: '#1c1018',
                  color: '#fff',
                  overflow: 'hidden',
                }}
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
                      loading="lazy"
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
                      loading="lazy"
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

      {/* Call-to-Action Section */}
      <Box
        component="section"
        sx={{ py: { xs: 8, md: 12 }, textAlign: 'center' }}
      >
        <Container maxWidth="sm">
          <Typography variant="h4" gutterBottom sx={{ color: '#c3f73a' }}>
            Ready to Get Started?
          </Typography>
          <Typography variant="body1" paragraph>
            Let’s build something amazing together. Reach out and let's talk
            about your next project.
          </Typography>
          <Button
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
  );
};

export default HomePage;
