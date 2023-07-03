import { Box, Grid, Typography } from '@mui/material';
import { GetStartedButton,SubcribeBoxUp,SubcribeBoxDown,SubcribeHeader,SubcribeBoxText } from './Styled';
import { BottomBar } from './BottomBar';

export const SubcribeCard = () => {
  return (
    <SubcribeBoxUp>
      <SubcribeBoxDown>
        <BottomBar />
        <Box
          sx={{
            marginTop:10,
            boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)',
            padding: { md: 5, xs: 2 },
            backgroundColor: '#fff',
            position: 'absolute',
            maxWidth:{xs:350,md:'100vw'},
            top: -80, borderRadius: 5,paddingBottom:{xs:5}
          }}
        >
          <Grid container  spacing={{md:50,xs:2}}>
            <Grid item md={6}  sx={{textAlign:{md:'start',xs:'center'}}}>
              <SubcribeHeader>Subscribe Now for Get Special Features!</SubcribeHeader>
              <SubcribeBoxText>Let's subscribe with us and find the fun.</SubcribeBoxText>
            </Grid>

            <Grid item md={6} sx={{marginLeft:{xs:7,md:0},marginTop:{md:3,xs:0},}}>
              <GetStartedButton color='error' variant="contained">
                <Typography variant="subtitle1" sx={{ textTransform: 'none', fontFamily: 'Rubik, sans-serif', fontWeight: 'bold' }} >
                  Subcribe Now
                </Typography>
              </GetStartedButton>
            </Grid>
          </Grid>
        </Box>
      </SubcribeBoxDown>
    </SubcribeBoxUp>
  )
}
