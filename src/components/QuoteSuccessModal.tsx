import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  Button,
  Fade,
  Zoom,
  Grow,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

interface QuoteSuccessModalProps {
  open: boolean;
  onClose: () => void;
}

const QuoteSuccessModal: React.FC<QuoteSuccessModalProps> = ({ open, onClose }) => {
  const navigate = useNavigate();

  const handleContinueClick = () => {
    onClose();
    navigate('/');
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          bgcolor: 'transparent',
          boxShadow: 'none',
          overflow: 'visible',
        },
      }}
      BackdropProps={{
        sx: { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
      }}
    >
      <Fade in={open} timeout={400}>
        <Box>
          <Zoom in={open} timeout={600}>
            <DialogContent
              sx={{
                bgcolor: '#1c1018',
                borderRadius: 4,
                border: '2px solid #c3f73a',
                textAlign: 'center',
                p: 5,
                position: 'relative',
                overflow: 'visible',
              }}
            >
              {/* Success Icon with animation */}
              <Grow in={open} timeout={800}>
                <Box
                  sx={{
                    position: 'absolute',
                    top: -30,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    bgcolor: '#c3f73a',
                    borderRadius: '50%',
                    p: 2,
                    border: '4px solid #1c1018',
                    boxShadow: '0 0 30px rgba(195, 247, 58, 0.3)',
                  }}
                >
                  <CheckCircleIcon
                    sx={{
                      fontSize: 48,
                      color: '#000',
                      animation: 'pulse 2s infinite',
                    }}
                  />
                </Box>
              </Grow>

              {/* Main Content */}
              <Box sx={{ mt: 4, mb: 3 }}>
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{
                    color: '#c3f73a',
                    fontWeight: 'bold',
                    mb: 2,
                    textShadow: '0 0 10px rgba(195, 247, 58, 0.3)',
                  }}
                >
                  Quote Submitted Successfully!
                </Typography>
                
                <Typography
                  variant="h6"
                  sx={{
                    color: '#fff',
                    mb: 3,
                    lineHeight: 1.6,
                  }}
                >
                  Thank you for your interest in our services
                </Typography>

                {/* Info Cards */}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 2,
                    mb: 4,
                  }}
                >
                  <Box
                    sx={{
                      flex: 1,
                      bgcolor: '#000',
                      borderRadius: 2,
                      p: 2,
                      border: '1px solid #333',
                    }}
                  >
                    <EmailIcon sx={{ color: '#c3f73a', mb: 1 }} />
                    <Typography variant="body2" sx={{ color: '#ddd' }}>
                      Confirmation sent to your email
                    </Typography>
                  </Box>
                  
                  <Box
                    sx={{
                      flex: 1,
                      bgcolor: '#000',
                      borderRadius: 2,
                      p: 2,
                      border: '1px solid #333',
                    }}
                  >
                    <AccessTimeIcon sx={{ color: '#c3f73a', mb: 1 }} />
                    <Typography variant="body2" sx={{ color: '#ddd' }}>
                      Response within 24 hours
                    </Typography>
                  </Box>
                </Box>

                <Typography
                  variant="body1"
                  sx={{
                    color: '#ddd',
                    mb: 4,
                    lineHeight: 1.6,
                  }}
                >
                  We've received your quote request and will review your project details carefully. 
                  You'll hear back from us soon with a personalized proposal and next steps.
                </Typography>

                {/* Action Button */}
                <Button
                  variant="contained"
                  onClick={handleContinueClick}
                  sx={{
                    bgcolor: '#c3f73a',
                    color: '#000',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    borderRadius: 3,
                    textTransform: 'none',
                    boxShadow: '0 4px 20px rgba(195, 247, 58, 0.3)',
                    '&:hover': {
                      bgcolor: '#a6e12f',
                      boxShadow: '0 6px 25px rgba(195, 247, 58, 0.4)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Continue Exploring
                </Button>
              </Box>

              {/* Decorative elements */}
              <Box
                sx={{
                  position: 'absolute',
                  top: -10,
                  right: -10,
                  width: 20,
                  height: 20,
                  bgcolor: '#c3f73a',
                  borderRadius: '50%',
                  opacity: 0.6,
                  animation: 'float 3s ease-in-out infinite',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: -5,
                  left: -5,
                  width: 15,
                  height: 15,
                  bgcolor: '#c3f73a',
                  borderRadius: '50%',
                  opacity: 0.4,
                  animation: 'float 3s ease-in-out infinite 1.5s',
                }}
              />
            </DialogContent>
          </Zoom>
        </Box>
      </Fade>

      {/* CSS animations */}
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
        `}
      </style>
    </Dialog>
  );
};

export default QuoteSuccessModal;