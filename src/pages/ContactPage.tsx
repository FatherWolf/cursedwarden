// src/pages/ContactPage.tsx
import React, { useState, useRef } from 'react';
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
import emailjs from '@emailjs/browser';

const PRICES = {
  barebones: 300,
  basicWebsite: 1000,
  reactApp: 3500,
  ecommerce: 2000,
  hosting: 0,
  additionalPage: 100,
  seo: 500,
  logo: 300,
};

type Opts = {
  barebones: boolean;
  basicWebsite: boolean;
  reactApp: boolean;
  ecommerce: boolean;
  hosting: boolean;
  additionalPages: boolean;
  additionalPagesQty: number;
  seo: boolean;
  logo: boolean;
  marketing: boolean;
};

const ContactPage: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });

  const [opts, setOpts] = useState<Opts>({
    barebones: false,
    basicWebsite: false,
    reactApp: false,
    ecommerce: false,
    hosting: true,
    additionalPages: false,
    additionalPagesQty: 1,
    seo: false,
    logo: false,
    marketing: false,
  });

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setContact((c) => ({ ...c, [e.target.name]: e.target.value }));

  // When a starter package is clicked, clear all other base flags
  const selectPackage = (
    pkg: keyof Omit<
      Opts,
      | 'hosting'
      | 'additionalPages'
      | 'additionalPagesQty'
      | 'seo'
      | 'logo'
      | 'marketing'
    >
  ) => {
    setOpts((o) => ({
      ...o,
      barebones: false,
      basicWebsite: false,
      reactApp: false,
      ecommerce: false,
      [pkg]: true,
    }));
    document
      .getElementById('contact-form')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleToggle =
    (
      key: keyof Pick<
        Opts,
        'hosting' | 'additionalPages' | 'seo' | 'logo' | 'marketing'
      >
    ) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setOpts((o) => ({ ...o, [key]: e.target.checked }));

  const total =
    (opts.barebones ? PRICES.barebones : 0) +
    (opts.basicWebsite ? PRICES.basicWebsite : 0) +
    (opts.reactApp ? PRICES.reactApp : 0) +
    (opts.ecommerce ? PRICES.ecommerce : 0) +
    (opts.hosting ? PRICES.hosting : 0) +
    (opts.additionalPages
      ? opts.additionalPagesQty * PRICES.additionalPage
      : 0) +
    (opts.seo ? PRICES.seo : 0) +
    (opts.logo ? PRICES.logo : 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.REACT_APP_EMAILJS_USER_ID!
      )
      .then(() => alert('Your quote request has been sent!'))
      .catch((err) => {
        console.error(err);
        alert('Oops—something went wrong sending your request.');
      });
  };

  return (
    <>
      <Helmet>
        <title>Cursed Warden Labs | Request a Quote</title>
        <meta
          name="description"
          content="Quick-start packages from $300–$3,500 plus custom add-ons. Request your tailored web or software quote now."
        />
        <link rel="canonical" href="https://cursedwardenlabs.com/contact" />
      </Helmet>

      <Box
        component="main"
        sx={{ bgcolor: '#000', color: '#fff', py: { xs: 4, md: 8 } }}
      >
        <Container maxWidth="md">
          {/* Page Header */}
          <Typography
            variant="h4"
            align="center"
            sx={{ color: '#c3f73a', mb: 4 }}
          >
            Request a Custom Quote
          </Typography>

          {/* Starter Packages */}
          <Box sx={{ mb: 6 }}>
            <Typography variant="h6" sx={{ color: '#c3f73a', mb: 2 }}>
              Our Starter Packages
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
              {[
                {
                  key: 'barebones' as const,
                  title: 'Barebones One-Page',
                  desc: 'Simple one-page site with your logo, text & a few images.',
                  price: PRICES.barebones,
                },
                {
                  key: 'basicWebsite' as const,
                  title: 'Basic Website Package',
                  desc: 'Multi-page React/MUI or WordPress site + contact page included.',
                  price: PRICES.basicWebsite,
                },
                {
                  key: 'reactApp' as const,
                  title: 'Custom React App',
                  desc: 'SPA with custom UI & Node.js or Firebase back end.',
                  price: PRICES.reactApp,
                },
                {
                  key: 'ecommerce' as const,
                  title: 'E-commerce Solution',
                  desc: 'Online store with product management & payment integration.',
                  price: PRICES.ecommerce,
                },
              ].map((pkg) => (
                <Box
                  key={pkg.key}
                  sx={{
                    flex: 1,
                    p: 3,
                    bgcolor: '#1c1018',
                    borderRadius: 2,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{ color: '#c3f73a', fontWeight: 'bold' }}
                  >
                    {pkg.title}
                  </Typography>
                  <Typography variant="body2" sx={{ my: 1 }}>
                    Starts at ${pkg.price.toLocaleString()} — {pkg.desc}
                  </Typography>
                  <Box sx={{ mt: 'auto' }}>
                    <Button
                      variant="outlined"
                      sx={{ borderColor: '#c3f73a', color: '#c3f73a' }}
                      onClick={() => selectPackage(pkg.key)}
                    >
                      Get a Custom Quote
                    </Button>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Box>

          {/* Detailed Quote Form */}
          <Box
            component="form"
            id="contact-form"
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
          >
            {/* hidden fields so EmailJS sees the checkbox values */}
            <input
              type="hidden"
              name="barebones"
              value={opts.barebones ? 'Yes' : 'No'}
            />
            <input
              type="hidden"
              name="basicWebsite"
              value={opts.basicWebsite ? 'Yes' : 'No'}
            />
            <input
              type="hidden"
              name="reactApp"
              value={opts.reactApp ? 'Yes' : 'No'}
            />
            <input
              type="hidden"
              name="ecommerce"
              value={opts.ecommerce ? 'Yes' : 'No'}
            />
            <input
              type="hidden"
              name="hosting"
              value={opts.hosting ? 'Included' : 'No'}
            />
            <input
              type="hidden"
              name="additionalPages"
              value={opts.additionalPages ? 'Yes' : 'No'}
            />
            <input
              type="hidden"
              name="additionalPagesQty"
              value={opts.additionalPagesQty.toString()}
            />
            <input type="hidden" name="seo" value={opts.seo ? 'Yes' : 'No'} />
            <input type="hidden" name="logo" value={opts.logo ? 'Yes' : 'No'} />
            <input
              type="hidden"
              name="marketing"
              value={opts.marketing ? 'Yes' : 'No'}
            />
            <input type="hidden" name="total" value={total.toString()} />

            <Stack spacing={3}>
              {/* Contact Info */}
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField
                  fullWidth
                  required
                  name="firstName"
                  label="First Name"
                  value={contact.firstName}
                  onChange={handleContactChange}
                  InputProps={{
                    sx: { bgcolor: '#1c1018', color: '#fff' },
                  }}
                />
                <TextField
                  fullWidth
                  required
                  name="lastName"
                  label="Last Name"
                  value={contact.lastName}
                  onChange={handleContactChange}
                  InputProps={{
                    sx: { bgcolor: '#1c1018', color: '#fff' },
                  }}
                />
              </Stack>

              <TextField
                fullWidth
                required
                name="phone"
                label="Phone Number"
                value={contact.phone}
                onChange={handleContactChange}
                InputProps={{
                  sx: { bgcolor: '#1c1018', color: '#fff' },
                }}
              />
              <TextField
                fullWidth
                required
                name="email"
                label="Email Address"
                type="email"
                value={contact.email}
                onChange={handleContactChange}
                InputProps={{
                  sx: { bgcolor: '#1c1018', color: '#fff' },
                }}
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
                InputProps={{
                  sx: { bgcolor: '#1c1018', color: '#fff' },
                }}
              />

              {/* Add-Ons */}
              <Typography variant="h6" sx={{ color: '#c3f73a' }}>
                Additional Services & Add-Ons
              </Typography>
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
                label={`Additional Page(s) — $${PRICES.additionalPage}* each`}
              />
              {opts.additionalPages && (
                <TextField
                  select
                  label="Qty"
                  name="additionalPagesQty"
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
                      color: '#fff',
                      backgroundColor: '#1c1018',
                      '.MuiSelect-icon': { color: '#fff' },
                    },
                    MenuProps: {
                      PaperProps: { sx: { bgcolor: '#1c1018' } },
                    },
                  }}
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <MenuItem key={n} value={n} sx={{ color: '#fff' }}>
                      {n === 5 ? '5+ (get a discount per page)' : n}
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
                label={`SEO & Ranking — $${PRICES.seo}*`}
              />
              <FormControlLabel
                control={
                  <Checkbox
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
                    checked={opts.marketing}
                    onChange={handleToggle('marketing')}
                    sx={{ color: '#c3f73a' }}
                  />
                }
                label="Marketing & Ad Management (custom pricing)"
              />

              {/* Total & Submit */}
              <Box sx={{ textAlign: 'right', mt: 2 }}>
                <Typography variant="h6">Total Estimate: ${total}</Typography>
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
                Send Quote Request
              </Button>
              <Typography
                variant="caption"
                sx={{ color: 'grey.500', textAlign: 'center', mt: 1 }}
              >
                * Prices are rough estimates and may vary based on your final
                requirements.
              </Typography>
            </Stack>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ContactPage;
