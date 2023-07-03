import { Box, Grid, Stack, Typography } from '@mui/material';
import { HeaderFirst } from './Styled';
import { ReactComponent as Facebook } from './SvgCodes/Icons/Facebook.svg';
import { ReactComponent as Twitter } from './SvgCodes/Icons/Twitter.svg';
import { ReactComponent as Instagram } from './SvgCodes/Icons/Instagram.svg';
import { ReactComponent as Logo } from './SvgCodes/Logo.svg';

const productList = ['Download', 'Pricing', 'Locations', 'Server', 'Countires', 'Blog']
const engageList = ['LaslesVPN ?', 'FAQ', 'Tutorials', 'Abous Us', 'Privacy Policy', 'Terms of Service']
const earnList = ['Affiliate', 'Become Partner']

export const BottomBar = () => {
  return (
    <Grid
      sx={{
        marginTop: 15,
        width: '99vw',
        backgroundColor: '#F8F8F8',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: { md: '80vh', xs: '120vh' },
        }}
      >
        <Grid container>
          <Grid item md={3} xs={12} order={{ sm: 2, md: 1 }}
            sx={{ marginLeft: { md: 30, xs: 5 }, marginTop: { xs: 40, md: 0 } }}
          >
            <Stack direction='column' spacing={5}>
              <Stack direction='row' >
                <Logo style={{ marginRight: 10 }} />
                <HeaderFirst variant='h5'>
                  Lasles
                </HeaderFirst>
                <HeaderFirst isVpn variant='h5'  >
                  VPN
                </HeaderFirst>
              </Stack>
              <Typography variant="body1" component="div" style={{ maxWidth: 330, fontFamily: 'Rubik, sans-serif', fontSize: '16px', lineHeight: '30px', color: '#4F5665' }}>
                <span style={{ fontWeight: 'bold', fontFamily: 'Rubik, sans-serif', fontSize: '16px', lineHeight: '30px', color: '#4F5665', }}>LaslesVPN </span>
                is a private virtual network that has unique features and has high security.
              </Typography>
              <Stack direction='row' >
                <Facebook />
                <Twitter />
                <Instagram />
              </Stack>
              <Typography style={{ fontSize: '16px', lineHeight: '30px', color: '#AFB5C0' }}>
                ©2020Lasles<span style={{ fontSize: '16px', lineHeight: '30px', color: '#AFB5C0', fontWeight: 'bold' }}>VPN</span>
              </Typography>
            </Stack>
          </Grid>
          <Grid item md={3} xs={12} order={{ sm: 1, md: 2 }}
            sx={{ marginLeft: { md: 50, xs: 5 }, marginTop: { xs: 10, md: 0 } }}
          >
            <Stack direction='row' spacing={10}>
              <Stack direction='column' spacing={2}>
                <Typography style={{ fontFamily: 'Rubik, sans-serif', fontWeight: 'bold', marginBottom: 15 }}>Product</Typography>
                {
                  productList.map((item) => (
                    <Typography style={{ fontFamily: 'Rubik, sans-serif', color: '#4F5665' }}>{item}</Typography>
                  ))
                }
              </Stack>

              <Stack direction='column' spacing={2}>
                <Typography style={{ fontFamily: 'Rubik, sans-serif', fontWeight: 'bold', marginBottom: 15 }}>Engage</Typography>
                {
                  engageList.map((item) => (
                    <Typography style={{ fontFamily: 'Rubik, sans-serif', color: '#4F5665' }}>{item}</Typography>
                  ))
                }
              </Stack>

              <Stack direction='column' spacing={2}>
                <Typography style={{ fontFamily: 'Rubik, sans-serif', fontWeight: 'bold', marginBottom: 15 }}>Earn Money</Typography>
                {
                  earnList.map((item) => (
                    <Typography style={{ fontFamily: 'Rubik, sans-serif', color: '#4F5665' }}>{item}</Typography>
                  ))
                }
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  )
}
