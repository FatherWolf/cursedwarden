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
import QuoteSuccessModal from '../components/QuoteSuccessModal';
import StructuredData from '../components/StructuredData';

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
  freeAudit: boolean;
};

const ContactPage: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

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
    freeAudit: false,
  });

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContact((c) => ({ ...c, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

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
        'hosting' | 'additionalPages' | 'seo' | 'logo' | 'marketing' | 'freeAudit'
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

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!contact.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!contact.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!contact.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-()++.]{10,}$/.test(contact.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!contact.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!contact.message.trim()) {
      newErrors.message = 'Project details are required';
    } else if (contact.message.trim().length < 10) {
      newErrors.message = 'Please provide more details (at least 10 characters)';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current || isSubmitting) return;

    // Validate form before submission
    if (!validateForm()) {
      // Scroll to first error
      const firstErrorField = Object.keys(errors)[0];
      if (firstErrorField) {
        document.querySelector(`[name="${firstErrorField}"]`)?.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
      return;
    }

    setIsSubmitting(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.REACT_APP_EMAILJS_USER_ID!
      )
      .then(() => {
        setShowSuccessModal(true);
        // Reset form
        setContact({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          message: '',
        });
        setOpts({
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
          freeAudit: false,
        });
      })
      .catch((err) => {
        console.error(err);
        alert('Oops—something went wrong sending your request.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <StructuredData 
        type="service" 
        data={{
          name: "Free Web Development Quote",
          description: "Get a free, detailed quote for your web development project. Packages starting at $300 for React websites, WordPress development, and SEO services."
        }} 
      />
      <StructuredData 
        type="breadcrumb" 
        data={{
          items: [
            { name: 'Home', url: '/' },
            { name: 'Contact', url: '/contact' }
          ]
        }} 
      />
      <Helmet>
        <title>Get Free Web Development Quote Charlotte NC | $300-$3500 Packages</title>
        <meta
          name="description"
          content="Free web development quote in Charlotte NC! Affordable packages from $300-$3500. React websites, WordPress development, SEO services. Same-day response guaranteed. Serving Charlotte metro area."
        />
        <meta
          name="keywords"
          content="web development quote Charlotte, free website quote Charlotte NC, affordable web development, WordPress quote Charlotte, React development pricing, Charlotte web developer contact, Maiden NC web development"
        />
        <meta name="author" content="Austin Engle - Cursed Warden Labs" />
        <meta name="geo.region" content="US-NC" />
        <meta name="geo.placename" content="Charlotte, NC" />
        <meta property="og:title" content="Get Free Web Development Quote Charlotte NC" />
        <meta property="og:description" content="Free web development quote in Charlotte NC! Affordable packages from $300-$3500. React websites, WordPress development, SEO services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cursedwardenlabs.com/contact" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Get Free Web Development Quote Charlotte NC" />
        <meta name="twitter:description" content="Free web development quote in Charlotte NC! Affordable packages from $300-$3500. Same-day response guaranteed." />
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
            <input
              type="hidden"
              name="freeAudit"
              value={opts.freeAudit ? 'Yes' : 'No'}
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
                  error={!!errors.firstName}
                  helperText={errors.firstName}
                  InputProps={{
                    sx: { bgcolor: '#1c1018', color: '#fff' },
                  }}
                  FormHelperTextProps={{
                    sx: { color: '#f44336' },
                  }}
                />
                <TextField
                  fullWidth
                  required
                  name="lastName"
                  label="Last Name"
                  value={contact.lastName}
                  onChange={handleContactChange}
                  error={!!errors.lastName}
                  helperText={errors.lastName}
                  InputProps={{
                    sx: { bgcolor: '#1c1018', color: '#fff' },
                  }}
                  FormHelperTextProps={{
                    sx: { color: '#f44336' },
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
                error={!!errors.phone}
                helperText={errors.phone}
                InputProps={{
                  sx: { bgcolor: '#1c1018', color: '#fff' },
                }}
                FormHelperTextProps={{
                  sx: { color: '#f44336' },
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
                error={!!errors.email}
                helperText={errors.email}
                InputProps={{
                  sx: { bgcolor: '#1c1018', color: '#fff' },
                }}
                FormHelperTextProps={{
                  sx: { color: '#f44336' },
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
                error={!!errors.message}
                helperText={errors.message || 'Please describe your project requirements in detail'}
                InputProps={{
                  sx: { bgcolor: '#1c1018', color: '#fff' },
                }}
                FormHelperTextProps={{
                  sx: { color: errors.message ? '#f44336' : 'grey.400' },
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
              <FormControlLabel
                control={
                  <Checkbox
                    checked={opts.freeAudit}
                    onChange={handleToggle('freeAudit')}
                    sx={{ color: '#c3f73a' }}
                  />
                }
                label="Free Website Audit — Included"
              />

              {/* Total & Submit */}
              <Box sx={{ textAlign: 'right', mt: 2 }}>
                <Typography variant="h6">Total Estimate: ${total}</Typography>
              </Box>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={isSubmitting}
                sx={{
                  bgcolor: '#c3f73a',
                  color: '#000',
                  py: 1.5,
                  '&:hover': { bgcolor: '#a6e12f' },
                  '&:disabled': {
                    bgcolor: '#666',
                    color: '#999',
                  },
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Quote Request'}
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
        
        {/* Success Modal */}
        <QuoteSuccessModal
          open={showSuccessModal}
          onClose={() => setShowSuccessModal(false)}
        />
      </Box>
    </>
  );
};

export default ContactPage;
