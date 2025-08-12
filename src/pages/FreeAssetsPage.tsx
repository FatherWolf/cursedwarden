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
} from '@mui/material';
import { Download, CheckCircle } from '@mui/icons-material';
import StructuredData from '../components/StructuredData';

const assets = [
  {
    title: 'Website Launch Checklist',
    description: 'Complete checklist to ensure your website is ready for launch with SEO, performance, and security best practices.',
    fileName: 'WebsiteChecklist.pdf',
    downloadUrl: '/WebsiteChecklist.pdf',
  },
];

const FreeAssetsPage: React.FC = () => (
  <>
    <StructuredData type="website" />
    <StructuredData
      type="breadcrumb"
      data={{
        items: [
          { name: 'Home', url: '/' },
          { name: 'Free Assets', url: '/free-assets' },
        ],
      }}
    />
    <Helmet>
      <title>Free Web Development Assets | Checklists & Resources | Cursed Warden Labs</title>
      <meta
        name="description"
        content="Free web development resources and checklists from Cursed Warden Labs. Download our website launch checklist and other valuable assets for your business."
      />
      <meta
        name="keywords"
        content="free web development resources, website checklist, web development tools, free downloads, Charlotte web developer resources"
      />
      <link rel="canonical" href="https://cursedwardenlabs.com/free-assets" />
      
      <meta
        property="og:title"
        content="Free Web Development Assets | Checklists & Resources"
      />
      <meta
        property="og:description"
        content="Free web development resources and checklists from Cursed Warden Labs. Download our website launch checklist and other valuable assets."
      />
      <meta property="og:url" content="https://cursedwardenlabs.com/free-assets" />
      <meta property="og:type" content="website" />
    </Helmet>

    <Box
      component="main"
      sx={{ bgcolor: '#000', color: '#fff', minHeight: '100vh' }}
    >
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h3"
              component="h1"
              sx={{ fontWeight: 'bold', color: '#c3f73a', mb: 2 }}
            >
              Free Assets & Resources
            </Typography>
            <Typography variant="h6" sx={{ color: '#ddd', mb: 4 }}>
              Valuable resources to help grow your business online
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            {assets.map((asset) => (
              <Card
                key={asset.title}
                elevation={0}
                sx={{
                  bgcolor: '#1c1018',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <CheckCircle sx={{ color: '#c3f73a', mr: 1 }} />
                    <Typography
                      variant="h6"
                      sx={{ color: '#c3f73a', fontWeight: 'bold' }}
                    >
                      {asset.title}
                    </Typography>
                  </Box>
                  <Typography sx={{ color: '#fff', mb: 3 }}>
                    {asset.description}
                  </Typography>
                  <Button
                    component="a"
                    href={asset.downloadUrl}
                    download={asset.fileName}
                    variant="contained"
                    startIcon={<Download />}
                    sx={{
                      backgroundColor: '#c3f73a',
                      color: '#000',
                      '&:hover': { backgroundColor: '#a6e12f' },
                      width: '100%',
                    }}
                  >
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>

          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Typography variant="h5" sx={{ color: '#c3f73a', mb: 2 }}>
              Schedule Free Website Audit
            </Typography>
            <Typography variant="body1" sx={{ color: '#ddd', mb: 3 }}>
              Get a comprehensive analysis of your website's performance, SEO, and user experience
            </Typography>
            <Button
              component="a"
              href="https://calendly.com/austinengledev/30min"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              sx={{
                backgroundColor: '#c3f73a',
                color: '#000',
                mb: 4,
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                '&:hover': { backgroundColor: '#a6e12f' },
              }}
            >
              Schedule Free Audit
            </Button>
          </Box>

          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Typography variant="h5" sx={{ color: '#c3f73a', mb: 2 }}>
              Need Custom Web Development?
            </Typography>
            <Typography variant="body1" sx={{ color: '#ddd', mb: 3 }}>
              Get professional web development services tailored to your business needs
            </Typography>
            <Button
              component={RouterLink}
              to="/contact"
              variant="outlined"
              sx={{
                borderColor: '#c3f73a',
                color: '#c3f73a',
                '&:hover': {
                  borderColor: '#a6e12f',
                  backgroundColor: 'rgba(195, 247, 58, 0.1)',
                },
              }}
            >
              Get Quote
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  </>
);

export default FreeAssetsPage;