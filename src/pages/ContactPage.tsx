// src/pages/ContactPage.tsx
import React, { useState, useRef, useEffect } from 'react';
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
import emailjs, { init } from '@emailjs/browser';

const PRICES = {
  websiteDesign: 500,
  hosting: 0,
  additionalPage: 200,
  seo: 500,
  logo: 300,
};

const ContactPage: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  // Initialize EmailJS with your User ID (public key)
  useEffect(() => {
    init(process.env.REACT_APP_EMAILJS_USER_ID || '');
  }, []);

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
    additionalPagesQty: 0,
    seo: false,
    logo: false,
    marketing: false,
  });

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setContact((c) => ({ ...c, [e.target.name]: e.target.value }));

  const handleToggle =
    (key: keyof typeof opts) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const checked = e.target.checked;
      setOpts((o) => ({
        ...o,
        [key]: checked,
        ...(key === 'additionalPages' && !checked
          ? { additionalPagesQty: 0 }
          : {}),
      }));
    };

  const total =
    (opts.websiteDesign ? PRICES.websiteDesign : 0) +
    (opts.hosting ? PRICES.hosting : 0) +
    (opts.additionalPages
      ? opts.additionalPagesQty * PRICES.additionalPage
      : 0) +
    (opts.seo ? PRICES.seo : 0) +
    (opts.logo ? PRICES.logo : 0);

  const isFormValid =
    contact.firstName &&
    contact.lastName &&
    contact.phone &&
    contact.email &&
    contact.message;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        formRef.current!
      )
      .then(() => {
        alert('Your quote request has been sent!');
        // Optionally reset form here
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        alert(`EmailJS error: ${err.text || err.statusText || err.message}`);
      });
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

          <Box component="form" ref={formRef} onSubmit={handleSubmit}>
            <Stack spacing={3}>
              {/* Hidden total for template */}
              <input type="hidden" name="total" value={total.toString()} />

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
                    name="websiteDesign"
                    value={`$${PRICES.websiteDesign}`}
                    checked={opts.websiteDesign}
                    onChange={handleToggle('websiteDesign')}
                    sx={{ color: '#c3f73a' }}
                  />
                }
                label={`Website Design & Dev — $${PRICES.websiteDesign}*`}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    name="hosting"
                    value="Included"
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
                    name="additionalPages"
                    value={opts.additionalPages ? 'Yes' : 'No'}
                    checked={opts.additionalPages}
                    onChange={handleToggle('additionalPages')}
                    sx={{ color: '#c3f73a' }}
                  />
                }
                label={`Additional Page(s) — $${PRICES.additionalPage}* each`}
              />

              {opts.additionalPages && (
                <TextField
                  select
                  name="additionalPagesQty"
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
                  SelectProps={{
                    sx: {
                      color: '#fff', // selected value color
                      '.MuiSelect-icon': { color: '#fff' }, // arrow icon
                    },
                    MenuProps: {
                      PaperProps: {
                        sx: {
                          bgcolor: '#1c1018', // menu background
                          color: '#fff', // default text color
                        },
                      },
                    },
                  }}
                >
                  {[1, 2, 3, 4].map((n) => (
                    <MenuItem
                      key={n}
                      value={n}
                      sx={{
                        color: '#fff', // menu item text
                        '&.Mui-selected': {
                          // when selected
                          bgcolor: '#333',
                        },
                        '&:hover': {
                          // hover state
                          bgcolor: '#222',
                        },
                      }}
                    >
                      {n}
                    </MenuItem>
                  ))}
                  <MenuItem
                    value={5}
                    sx={{
                      color: '#fff',
                      '&.Mui-selected': { bgcolor: '#333' },
                      '&:hover': { bgcolor: '#222' },
                    }}
                  >
                    5+ (get a discount per page)
                  </MenuItem>
                </TextField>
              )}

              <FormControlLabel
                control={
                  <Checkbox
                    name="seo"
                    value={`$${PRICES.seo}`}
                    checked={opts.seo}
                    onChange={handleToggle('seo')}
                    sx={{ color: '#c3f73a' }}
                  />
                }
                label={`SEO & Ranking — $${PRICES.seo}*`}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    name="logo"
                    value={`$${PRICES.logo}`}
                    checked={opts.logo}
                    onChange={handleToggle('logo')}
                    sx={{ color: '#c3f73a' }}
                  />
                }
                label={`Logo Design — $${PRICES.logo}*`}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    name="marketing"
                    value="Marketing & Ad Management"
                    checked={opts.marketing}
                    onChange={handleToggle('marketing')}
                    sx={{ color: '#c3f73a' }}
                  />
                }
                label="Marketing & Ad Management"
              />

              {/* Total & submit */}
              <Box sx={{ textAlign: 'right', mt: 2 }}>
                <Typography variant="h6">Total: ${total}</Typography>
              </Box>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={!isFormValid}
                sx={{
                  bgcolor: '#c3f73a',
                  color: '#000',
                  py: 1.5,
                  '&:hover': { bgcolor: '#a6e12f' },
                }}
              >
                Get Quote
              </Button>

              <Typography
                variant="caption"
                sx={{ color: 'grey.500', mt: 2, textAlign: 'center' }}
              >
                * Prices are rough estimates and may be higher or lower
                depending on project requirements.
              </Typography>
            </Stack>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ContactPage;
