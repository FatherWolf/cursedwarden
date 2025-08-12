import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Link,
  Divider,
} from '@mui/material';

const SEOFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#0a0a0a',
        color: '#fff',
        pt: 6,
        pb: 3,
        borderTop: '1px solid #333',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {/* Company Info */}
          <Box sx={{ flex: '1 1 300px', minWidth: '300px' }}>
            <Typography variant="h6" sx={{ color: '#c3f73a', mb: 2 }}>
              Cursed Warden Labs
            </Typography>
            <Typography variant="body2" sx={{ color: '#ddd', mb: 2 }}>
              Professional web development company serving Charlotte NC and surrounding areas. 
              Specializing in React applications, WordPress websites, and SEO optimization.
            </Typography>
            <Typography variant="body2" sx={{ color: '#bbb' }}>
              📍 Maiden, NC 28650<br />
              📧 contact@cursedwardenlabs.com<br />
              📱 Available for consultation
            </Typography>
          </Box>

          {/* Services Links */}
          <Box sx={{ flex: '1 1 200px', minWidth: '200px' }}>
            <Typography variant="h6" sx={{ color: '#c3f73a', mb: 2 }}>
              Our Services
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link
                component={RouterLink}
                to="/services"
                sx={{ color: '#ddd', textDecoration: 'none', '&:hover': { color: '#c3f73a' } }}
              >
                React Web Development
              </Link>
              <Link
                component={RouterLink}
                to="/services"
                sx={{ color: '#ddd', textDecoration: 'none', '&:hover': { color: '#c3f73a' } }}
              >
                WordPress Development
              </Link>
              <Link
                component={RouterLink}
                to="/services"
                sx={{ color: '#ddd', textDecoration: 'none', '&:hover': { color: '#c3f73a' } }}
              >
                SEO Optimization
              </Link>
              <Link
                component={RouterLink}
                to="/services"
                sx={{ color: '#ddd', textDecoration: 'none', '&:hover': { color: '#c3f73a' } }}
              >
                Digital Marketing
              </Link>
              <Link
                component={RouterLink}
                to="/contact"
                sx={{ color: '#c3f73a', textDecoration: 'none', fontWeight: 'bold' }}
              >
                Get Free Quote →
              </Link>
            </Box>
          </Box>

          {/* Areas Served */}
          <Box sx={{ flex: '1 1 150px', minWidth: '150px' }}>
            <Typography variant="h6" sx={{ color: '#c3f73a', mb: 2 }}>
              Areas Served
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              <Typography variant="body2" sx={{ color: '#ddd' }}>Charlotte, NC</Typography>
              <Typography variant="body2" sx={{ color: '#ddd' }}>Gastonia, NC</Typography>
              <Typography variant="body2" sx={{ color: '#ddd' }}>Concord, NC</Typography>
              <Typography variant="body2" sx={{ color: '#ddd' }}>Maiden, NC</Typography>
              <Typography variant="body2" sx={{ color: '#ddd' }}>Statesville, NC</Typography>
              <Typography variant="body2" sx={{ color: '#ddd' }}>Hickory, NC</Typography>
            </Box>
          </Box>

          {/* Quick Links */}
          <Box sx={{ flex: '1 1 200px', minWidth: '200px' }}>
            <Typography variant="h6" sx={{ color: '#c3f73a', mb: 2 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link
                component={RouterLink}
                to="/"
                sx={{ color: '#ddd', textDecoration: 'none', '&:hover': { color: '#c3f73a' } }}
              >
                Home
              </Link>
              <Link
                component={RouterLink}
                to="/about"
                sx={{ color: '#ddd', textDecoration: 'none', '&:hover': { color: '#c3f73a' } }}
              >
                About Austin Engle
              </Link>
              <Link
                component={RouterLink}
                to="/services"
                sx={{ color: '#ddd', textDecoration: 'none', '&:hover': { color: '#c3f73a' } }}
              >
                Web Development Services
              </Link>
              <Link
                component={RouterLink}
                to="/contact"
                sx={{ color: '#ddd', textDecoration: 'none', '&:hover': { color: '#c3f73a' } }}
              >
                Request Quote
              </Link>
              <Link
                href="/resume.pdf"
                target="_blank"
                sx={{ color: '#ddd', textDecoration: 'none', '&:hover': { color: '#c3f73a' } }}
              >
                Download Resume
              </Link>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ bgcolor: '#333', my: 3 }} />

        {/* Bottom Section */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: '#999', mb: 1 }}>
            © {currentYear} Cursed Warden Labs. All rights reserved. 
            Professional web development services in Charlotte, NC.
          </Typography>
          <Typography variant="caption" sx={{ color: '#777' }}>
            Web Development Charlotte | React Developer | WordPress Development | SEO Services Charlotte NC
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default SEOFooter;