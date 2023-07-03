import { Box, Grid, Typography } from '@mui/material';
import { HeaderText, GetStartedButton, HomeDesc } from './Styled'


export const HomePage = () => {

    return (
        <Grid container mt={10} spacing={2} sx={{ paddingLeft: { md: 18 }, paddingRight: { md: 18 } }}>
            <Grid item xs={12} md={6} order={{ xs: 2, sm: 1 }} mt={8}>
                <Grid md={10}>
                    <HeaderText
                    >Want anything to be easy with <Typography sx={{
                        fontSize: {md:'54px',xs:'40px'},
                        fontFamily: 'Rubik, sans-serif', lineHeight: '80px'
                    }} component="span" fontWeight="bold">LaslesVPN</Typography>.</HeaderText>
                </Grid>
                <Grid md={10} mt={2} >
                    <HomeDesc>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</HomeDesc>
                </Grid>
                <Grid md={9} mt={5} sx={{ display: 'flex',  justifyContent: {md: 'start',xs:'center'}, }}>
                    <GetStartedButton color='error' variant="contained">
                        <Typography variant="subtitle1" sx={{ textTransform: 'none', fontFamily: 'Rubik, sans-serif', fontWeight: 'bold' }} >
                            Get Started
                        </Typography>
                    </GetStartedButton>
                </Grid>
            </Grid>
            <Grid md={6} xs={12} order={{ xs: 1, sm: 2 }} >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                    <Box sx={{ width: { md: 800, xs: 400 }, height: { md: 500, xs: 300 } }}>
                        <img
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            src={process.env.PUBLIC_URL + '/img/homeImg.png'} />
                    </Box>
                </div>
            </Grid>
        </Grid>
    )
}
