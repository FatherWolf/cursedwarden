// src/pages/ContactPage.tsx
import React, { useState } from 'react';
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
  websiteDesign: 1500, // ~30 hrs @ $50/hr
  hosting: 0, // included
  additionalPage: 250, // ~5 hrs @ $50/hr each
  seo: 500, // ~10 hrs @ $50/hr
  logo: 300, // ~6 hrs @ $50/hr
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

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleToggle =
    (key: keyof typeof opts) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setOpts((prev) => ({ ...prev, [key]: e.target.checked }));
    };

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
    console.log({ contact, opts, total });
    // TODO: send to your backend/email service
  };

  return (
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
                  sx: { backgroundColor: '#1c1018', color: '#fff' },
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
                  sx: { backgroundColor: '#1c1018', color: '#fff' },
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
              InputProps={{ sx: { backgroundColor: '#1c1018', color: '#fff' } }}
            />
            <TextField
              fullWidth
              required
              name="email"
              label="Email Address"
              type="email"
              value={contact.email}
              onChange={handleContactChange}
              InputProps={{ sx: { backgroundColor: '#1c1018', color: '#fff' } }}
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
              InputProps={{ sx: { backgroundColor: '#1c1018', color: '#fff' } }}
            />

            {/* Service Options */}
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
                label="Quantity"
                value={opts.additionalPagesQty}
                size="small"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setOpts((prev) => ({
                    ...prev,
                    additionalPagesQty: parseInt(e.target.value, 10),
                  }))
                }
                InputLabelProps={{ sx: { color: '#fff' } }}
                InputProps={{
                  sx: { backgroundColor: '#1c1018', color: '#fff' },
                }}
                SelectProps={{
                  sx: { '.MuiSelect-icon': { color: '#fff' } },
                }}
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

            {/* Total & Submit */}
            <Box sx={{ textAlign: 'right', mt: 2 }}>
              <Typography variant="h6">Total: ${total}</Typography>
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: '#c3f73a',
                color: '#000',
                py: 1.5,
                '&:hover': { backgroundColor: '#a6e12f' },
              }}
            >
              Get Quote
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactPage;
