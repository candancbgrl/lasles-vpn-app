
import {
    Paper, Box, Typography, Grid, Stack, Button
} from '@mui/material';
import { ChoosingItem } from './ChoosingItem'
import { ChoosePlanningText } from './Styled'
import { useState } from 'react';

export const PlanningPaper = () => {

    const [selectedButton, setSelectedButton] = useState(1);

    const handleButtonClick = (buttonId: any) => {
        setSelectedButton(buttonId);
    };

    const freePlan = ['Unlimited Bandwitch', 'Encrypted Connection',
        'No Traffic Logs', 'Works on All Devices'];
    const standartPlan = ['Unlimited Bandwitch', 'Encrypted Connection',
        'No Traffic Logs', 'Works on All Devices', 'Connect Anyware'];
    const premiumPlan = ['Unlimited Bandwitch', 'Encrypted Connection',
        'No Traffic Logs', 'Works on All Devices', 'Connect Anyware', 'Get New Features'];


    return (
        <Grid mt={5} spacing={3} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid container mt={5} spacing={1} sx={{ display: 'flex', justifyContent: 'center' }}>

                <Grid item md={4} xs={12}  >
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            marginLeft: { md: 20 },
                            justifyContent: { xs: 'center' }
                        }}>
                        <Paper variant="outlined" elevation={0} sx={{
                            padding: { md: 10, xs: 5 },
                            borderColor: selectedButton === 1 ? '#F53838' : '#DDDDDD', borderWidth: 2
                        }}>
                            <Grid container justifyContent="center" alignItems="center">
                                <Box py={5} px={5} sx={{
                                    width: { md: 200, xs: 100 }, height: { md: 200, xs: 100 },

                                }}>
                                    <img
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        src={process.env.PUBLIC_URL + '/img/plan.png'} />
                                </Box>
                            </Grid>
                            <ChoosePlanningText isHeader>Free Plan</ChoosePlanningText>
                            <Stack direction='column' spacing={2} mt={5} ml={5}>
                                {freePlan.map((item: any) => (
                                    <ChoosingItem text={item} />
                                ))}
                            </Stack>

                            <Grid md={12} mt={15} sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Typography sx={{ fontSize: '25px', fontWeight: 'bold', lineHeight: '30px' }} >Free</Typography>
                            </Grid>
                            <Grid md={12} mt={5} sx={{ display: 'flex', justifyContent: 'center' }}>

                                <Button
                                    variant={selectedButton === 1 ? 'contained' : 'outlined'}
                                    color={selectedButton === 1 ? 'error' : 'inherit'}
                                    onClick={() => handleButtonClick(1)}
                                    sx={{
                                        width: '200px', height: '50px', borderRadius: 10,
                                        borderColor: '#F53838', borderWidth: 2,
                                        color: selectedButton === 1 ? '#fff' : '#F53838',
                                        fontWeight: 'bold',
                                        textTransform: 'none',
                                        fontSize: '18px'
                                    }}>
                                    Select
                                </Button>
                            </Grid>
                        </Paper>
                    </Box>
                </Grid>

                <Grid item md={4} xs={12}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            marginLeft: { md: 5 },
                            marginRight: { md: 5 },
                            justifyContent: { xs: 'center' }
                        }}>
                        <Paper variant="outlined" elevation={0} sx={{
                            padding: { md: 10, xs: 5 },
                            borderColor: selectedButton === 2 ? '#F53838' : '#DDDDDD', borderWidth: 2
                        }}>
                            <Grid container justifyContent="center" alignItems="center">
                                <Box py={5} px={5} sx={{ width: { md: 200, xs: 100 }, height: { md: 200, xs: 100 } }}>
                                    <img
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        src={process.env.PUBLIC_URL + '/img/plan.png'} />
                                </Box>
                            </Grid>
                            <ChoosePlanningText isHeader>Standart Plan</ChoosePlanningText>
                            <Stack direction='column' spacing={2} mt={5} ml={5}>
                                {standartPlan.map((item: any) => (
                                    <ChoosingItem text={item} />
                                ))}
                            </Stack>
                            <Grid md={12} mt={11} sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Typography sx={{ fontSize: '25px', fontWeight: 'bold', lineHeight: '30px' }} >$9</Typography>
                                <Typography sx={{ fontSize: '25px', marginLeft: 1, lineHeight: '30px' }} >/ mo</Typography>
                            </Grid>
                            <Grid md={12} mt={5} sx={{ display: 'flex', justifyContent: 'center' }}>

                                <Button
                                    variant={selectedButton === 2 ? 'contained' : 'outlined'}
                                    color={selectedButton === 2 ? 'error' : 'inherit'}
                                    onClick={() => handleButtonClick(2)}
                                    sx={{
                                        width: '200px', height: '50px', borderRadius: 10,
                                        borderColor: '#F53838', borderWidth: 2,
                                        color: selectedButton === 2 ? '#fff' : '#F53838',
                                        fontWeight: 'bold',
                                        textTransform: 'none',
                                        fontSize: '18px'
                                    }}>
                                    Select
                                </Button>
                            </Grid>
                        </Paper>
                    </Box>
                </Grid>
                <Grid item md={4} xs={12}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            marginRight: { md: 20 },
                            justifyContent: { xs: 'center' }
                        }}>
                        <Paper variant="outlined" elevation={0} sx={{
                            padding: { md: 10, xs: 5 },
                            borderColor: selectedButton === 3 ? '#F53838' : '#DDDDDD', borderWidth: 2
                        }}>
                            <Grid container justifyContent="center" alignItems="center">
                                <Box py={5} px={5} sx={{ width: { md: 200, xs: 100 }, height: { md: 200, xs: 100 } }}>
                                    <img
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        src={process.env.PUBLIC_URL + '/img/plan.png'} />
                                </Box>
                            </Grid>
                            <ChoosePlanningText isHeader>Premium Plan</ChoosePlanningText>
                            <Stack direction='column' spacing={2} mt={5} ml={5}>
                                {premiumPlan.map((item: any) => (
                                    <ChoosingItem text={item} />
                                ))}
                            </Stack>
                            <Grid md={12} mt={7} sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Typography sx={{ fontSize: '25px', fontWeight: 'bold', lineHeight: '30px' }} >$12 </Typography>
                                <Typography sx={{ fontSize: '25px', marginLeft: 1, lineHeight: '30px' }} > / mo</Typography>
                            </Grid>
                            <Grid md={12} mt={5} sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Button
                                    variant={selectedButton === 3 ? 'contained' : 'outlined'}
                                    color={selectedButton === 3 ? 'error' : 'inherit'}
                                    onClick={() => handleButtonClick(3)}
                                    sx={{
                                        width: '200px', height: '50px', borderRadius: 10,
                                        borderColor: '#F53838', borderWidth: 2,
                                        color: selectedButton === 3 ? '#fff' : '#F53838',
                                        fontWeight: 'bold',
                                        textTransform: 'none',
                                        fontSize: '18px'
                                    }}
                                >
                                    Select
                                </Button>
                            </Grid>
                        </Paper>
                    </Box>
                </Grid>
            </Grid >
        </Grid>
    )
}
