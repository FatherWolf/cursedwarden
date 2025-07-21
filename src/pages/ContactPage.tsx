import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Container,
  Typography,
  TextField,
  MenuItem,
  Stack,
  FormControlLabel,
  Checkbox,
  Button,
} from '@mui/material';

const PRICES = {
  websiteDesign: 1500,
  hosting: 0,
  additionalPage: 250,
  seo: 500,
  logo: 300,
};

const ContactPage: React.FC = () => {
  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });
  const [opts, setOpts] = useState({
    websiteDesign: true,
    hosting: true,
    additionalPages: false,
    additionalPagesQty: 1,
    seo: false,
    logo: false,
  });

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setContact((c) => ({ ...c, [e.target.name]: e.target.value }));

  const handleToggle =
    (key: keyof typeof opts) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setOpts((o) => ({ ...o, [key]: e.target.checked }));

  const total =
    (opts.websiteDesign ? PRICES.websiteDesign : 0) +
    (opts.hosting ? PRICES.hosting : 0) +
    (opts.additionalPages
      ? opts.additionalPagesQty * PRICES.additionalPage
      : 0) +
    (opts.seo ? PRICES.seo : 0) +
    (opts.logo ? PRICES.logo : 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // send contact, opts, total to your backend or email service
    console.log({ contact, opts, total });
  };

  return (
    <>
      <Helmet>
        <title>Cursed Warden Labs | Contact & Quote</title>
        <meta
          name="description"
          content="Request a free quote for custom web development, SEO, digital marketing, and branding from Cursed Warden Labs."
        />
        <meta
          name="keywords"
          content="contact web developer, request quote, software development, SEO quote, logo design quote"
        />
        <link rel="canonical" href="https://cursedwardenlabs.com/contact" />
      </Helmet>

      <Box
        component="main"
        sx={{ bgcolor: '#000', color: '#fff', py: { xs: 4, md: 8 } }}
      >
        <Container maxWidth="sm">
          <Typography
            variant="h4"
            align="center"
            sx={{ color: '#c3f73a', mb: 4 }}
          >
            Request a Quote
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate>
            <Stack spacing={3}>
              {/* Contact fields */}
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField
                  fullWidth
                  required
                  name="firstName"
                  label="First Name"
                  value={contact.firstName}
                  onChange={handleContactChange}
                  InputProps={{ sx: { bgcolor: '#1c1018', color: '#fff' } }}
                />
                <TextField
                  fullWidth
                  required
                  name="lastName"
                  label="Last Name"
                  value={contact.lastName}
                  onChange={handleContactChange}
                  InputProps={{ sx: { bgcolor: '#1c1018', color: '#fff' } }}
                />
              </Stack>
              <TextField
                fullWidth
                required
                name="phone"
                label="Phone Number"
                value={contact.phone}
                onChange={handleContactChange}
                InputProps={{ sx: { bgcolor: '#1c1018', color: '#fff' } }}
              />
              <TextField
                fullWidth
                required
                name="email"
                label="Email Address"
                type="email"
                value={contact.email}
                onChange={handleContactChange}
                InputProps={{ sx: { bgcolor: '#1c1018', color: '#fff' } }}
              />
              <TextField
                fullWidth
                required
                name="message"
                label="Project Details"
                multiline
                minRows={4}
                value={contact.message}
                onChange={handleContactChange}
                InputProps={{ sx: { bgcolor: '#1c1018', color: '#fff' } }}
              />

              {/* Service selectors */}
              <Typography variant="h6" sx={{ color: '#c3f73a' }}>
                Website Options & Add-Ons
              </Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={opts.websiteDesign}
                    onChange={handleToggle('websiteDesign')}
                    sx={{ color: '#c3f73a' }}
                  />
                }
                label={`Website Design & Dev — $${PRICES.websiteDesign}`}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={opts.hosting}
                    onChange={handleToggle('hosting')}
                    sx={{ color: '#c3f73a' }}
                  />
                }
                label="Web Hosting & SSL — Included"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={opts.additionalPages}
                    onChange={handleToggle('additionalPages')}
                    sx={{ color: '#c3f73a' }}
                  />
                }
                label={`Additional Page(s) — $${PRICES.additionalPage} each`}
              />
              {opts.additionalPages && (
                <TextField
                  select
                  label="Qty"
                  value={opts.additionalPagesQty}
                  size="small"
                  onChange={(e) =>
                    setOpts((o) => ({
                      ...o,
                      additionalPagesQty: parseInt(e.target.value, 10),
                    }))
                  }
                  InputLabelProps={{ sx: { color: '#fff' } }}
                  InputProps={{ sx: { bgcolor: '#1c1018', color: '#fff' } }}
                  SelectProps={{ sx: { '.MuiSelect-icon': { color: '#fff' } } }}
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <MenuItem key={n} value={n}>
                      {n}
                    </MenuItem>
                  ))}
                </TextField>
              )}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={opts.seo}
                    onChange={handleToggle('seo')}
                    sx={{ color: '#c3f73a' }}
                  />
                }
                label={`SEO & Ranking — $${PRICES.seo}`}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={opts.logo}
                    onChange={handleToggle('logo')}
                    sx={{ color: '#c3f73a' }}
                  />
                }
                label={`Logo Design — $${PRICES.logo}`}
              />

              {/* Total & submit */}
              <Box sx={{ textAlign: 'right', mt: 2 }}>
                <Typography variant="h6">Total: ${total}</Typography>
              </Box>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  bgcolor: '#c3f73a',
                  color: '#000',
                  py: 1.5,
                  '&:hover': { bgcolor: '#a6e12f' },
                }}
              >
                Get Quote
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ContactPage;
