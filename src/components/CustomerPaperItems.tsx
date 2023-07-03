import {
    Paper, Box, Typography, Grid, Stack, Button, Avatar,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { ChoosePlanningText, SignUp } from './Styled'
import { useState } from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import { useMediaQuery,createTheme } from '@mui/material';

export const CustomerPaperItems = () => {

    const [selectedButton, setSelectedButton] = useState(1);
    const theme = createTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));


    console.log(selectedButton)

    const handleButtonClickAdd = () => {
        if (selectedButton < 3) {
            setSelectedButton(selectedButton + 1);
        }

    };
    const handleButtonClickPop = () => {
        if (selectedButton > 1) {
            setSelectedButton(selectedButton - 1);
        }
    };
    return (
        <>
            <Grid container mt={5} md={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Grid item md={4} xs={12} >
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            marginLeft: { md: 20 },

                            justifyContent: { xs: 'center' }
                        }}>
                        <Paper variant="outlined" sx={{
                            padding: { md: 5, xs: 5 },
                            borderColor: selectedButton === 1 ? '#F53838' : '#DDDDDD', borderWidth: 2
                        }}>
                            <Stack direction='column' spacing={5}>
                                <Stack direction='row' spacing={10}>
                                    <Stack direction='row'>
                                        <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + '/img/viezh.png'} />
                                        <Stack direction='column'>
                                            <Typography sx={{ marginLeft: 2, fontFamily: 'Rubik, sans-serif', fontWeight: 'bold', fontSize: '18px' }}>Viezh Robert</Typography>
                                            <Typography sx={{ marginLeft: 2, fontFamily: 'Rubik, sans-serif', fontSize: '14px' }}>Warsaw, Poland</Typography>
                                        </Stack>
                                    </Stack>
                                    <Stack direction='row' spacing={2} sx={{ alignItems: 'center', paddingLeft: 5 }}>
                                        <Typography sx={{ fontFamily: 'Rubik, sans-serif', fontSize: '15px' }}>4.5</Typography>
                                        <StarIcon fontSize='small' sx={{ color: '#FEA250' }} />

                                    </Stack>
                                </Stack>
                                <Typography sx={{
                                    lineHeight: '30px', fontFamily: 'Rubik, sans-serif',
                                    fontSize: '14px'
                                }} >“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</Typography>
                            </Stack>
                        </Paper>
                    </Box>
                </Grid>

                <Grid item md={4} xs={12}  >
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            marginLeft: { md: 10 },
                            marginRight: { md: 5 },
                            justifyContent: { xs: 'center' }
                        }}>
                        <Paper variant="outlined" sx={{
                            padding: { md: 5, xs: 5 },
                            borderColor: selectedButton === 2 ? '#F53838' : '#DDDDDD', borderWidth: 2
                        }}>
                            <Stack direction='column' spacing={5} mb={3.8}>
                                <Stack direction='row' spacing={10}>
                                    <Stack direction='row'>
                                        <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + '/img/yessica.png'} />
                                        <Stack direction='column'>
                                            <Typography sx={{ marginLeft: 2, fontFamily: 'Rubik, sans-serif', fontWeight: 'bold', fontSize: '18px' }}>Yessica Christy</Typography>
                                            <Typography sx={{ marginLeft: 2, fontFamily: 'Rubik, sans-serif', fontSize: '14px' }}>Shanxi, China</Typography>
                                        </Stack>
                                    </Stack>
                                    <Stack direction='row' spacing={1} sx={{ alignItems: 'center', paddingLeft: 5 }}>
                                        <Typography sx={{ fontFamily: 'Rubik, sans-serif', fontSize: '15px' }}>4.5</Typography>
                                        <StarIcon fontSize='small' sx={{ color: '#FEA250' }} />

                                    </Stack>

                                </Stack>
                                <Typography sx={{
                                    lineHeight: '30px', fontFamily: 'Rubik, sans-serif',
                                    fontSize: '14px'
                                }} >“I like it because I like to travel far and still can connect with high speed.”.</Typography>
                            </Stack>
                        </Paper>
                    </Box>
                </Grid>
                <Grid item md={4} xs={12}  >
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            marginLeft: { md: 5 },
                            marginRight: { md: 15 },
                            justifyContent: { xs: 'center' }
                        }}>
                        <Paper variant="outlined" sx={{
                            padding: { md: 5, xs: 5 },
                            borderColor: selectedButton === 3 ? '#F53838' : '#DDDDDD', borderWidth: 2
                        }}>
                            <Stack direction='column' spacing={5}>
                                <Stack direction='row' spacing={10}>
                                    <Stack direction='row'>
                                        <Avatar alt="Remy Sharp" src={process.env.PUBLIC_URL + '/img/kim.png'} />
                                        <Stack direction='column'>
                                            <Typography sx={{ marginLeft: 2, fontFamily: 'Rubik, sans-serif', fontWeight: 'bold', fontSize: '18px' }}>Kim Young Jou</Typography>
                                            <Typography sx={{ marginLeft: 2, fontFamily: 'Rubik, sans-serif', fontSize: '14px' }}>Seoul, South Korea</Typography>
                                        </Stack>
                                    </Stack>
                                    <Stack direction='row' spacing={1} sx={{ alignItems: 'center', paddingLeft: 5 }}>
                                        <Typography sx={{ fontFamily: 'Rubik, sans-serif', fontSize: '15px' }}>4.5</Typography>
                                        <StarIcon fontSize='small' sx={{ color: '#FEA250' }} />
                                    </Stack>
                                </Stack>
                                <Typography sx={{
                                    lineHeight: '30px', fontFamily: 'Rubik, sans-serif',
                                    fontSize: '14px'
                                }} >“This is very unusual for my business that currently requires a virtual private network that has high security.”.</Typography>
                            </Stack>
                        </Paper>
                    </Box>
                </Grid>
            </Grid >
            <Grid md={4} sx={{ marginLeft: {xs:20,md:70},maxWidth:{xs:10,md:500} }}>
                <Stack direction='row' spacing={{ md: 150, xs: 20 }} sx={{ justifyContent: 'center' }}>
                    <Stack spacing={1} direction='row' sx={{ justifyContent: 'flex-start', alignItems: 'flex-end',marginLeft:{xs:30} }} >
                        {selectedButton === 1 && (
                            <>
                                <Box sx={{ height: 15,width:50, borderRadius: 10,backgroundColor:'#F53838' }}></Box>
                                <Avatar sx={{ width: 15, height: 15 }}> </Avatar>
                                <Avatar sx={{ width: 15, height: 15 }}> </Avatar>
                            </>
                        )}

                        {selectedButton === 2 && (
                            <>
                                <Avatar sx={{ width: 15, height: 15 }}> </Avatar>
                                <Box sx={{ height: 15,width:50, borderRadius: 10,backgroundColor:'#F53838' }}></Box>
                                <Avatar sx={{ width: 15, height: 15 }}> </Avatar>
                            </>
                        )}

                        {selectedButton === 3 && (
                            <>
                                <Avatar sx={{ width: 15, height: 15 }}> </Avatar>
                                <Avatar sx={{ width: 15, height: 15 }}> </Avatar>
                                <Box sx={{ height: 15,width:50, borderRadius: 10,backgroundColor:'#F53838' }}></Box>
                            </>
                        )}
                    </Stack>
                    <Stack pt={10} direction='row' spacing={1} sx={{
                        justifyContent: 'flex-end', alignItems: 'center',
                    }}  >
                        <Button
                            onClick={() => handleButtonClickPop()}
                            color='error'
                            variant={selectedButton !== 3 ? 'contained' : 'outlined'}
                            sx={{ borderRadius: 100, height: 70, width: 70, borderWidth: 2, borderColor: '#F53838' }}>
                            { isSmallScreen ? <NorthIcon />: <KeyboardBackspaceIcon/>}
                        </Button>
                        <Button
                            variant={selectedButton !== 1 ? 'contained' : 'outlined'}
                            onClick={() => handleButtonClickAdd()}
                            color='error'
                            sx={{ borderRadius: 50, width: 70, height: 70, borderWidth: 2, borderColor: '#F53838' }}>
                            { isSmallScreen ? <SouthIcon/> : <KeyboardBackspaceIcon sx={{ transform: 'rotate(180deg)' }} />}
                        </Button>
                    </Stack>
                </Stack>
            </Grid>
        </>
    )
}
