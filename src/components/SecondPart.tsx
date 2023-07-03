import { Box, Grid, Stack,} from '@mui/material';
import { SubtitleHeader,SubtitleDesc } from './Styled'
import { Features } from './Features'

export const SecondPart = () => {
    return (
        <Grid container mt={10} mb={20} spacing={2} sx={{ paddingLeft: { md: 18, xs: 2 }, paddingRight: { md: 18, xs: 5 } }}>
            <Grid md={6} xs={12}  >
                <Stack sx={{ display: 'flex', justifyContent: { xs: 'end', md: 'center' }, alignItems: { xs: 'end', md: 'center' }, }}>
                    <Box sx={{ width: { md: 600, xs: 400 }, height: { md: 500, xs: 300 } }}>
                        <img
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            src={process.env.PUBLIC_URL + '/img/secondPart.png'} />
                    </Box>
                </Stack>
            </Grid>
            <Grid item xs={12} md={6} mt={8}>
                <Grid md={7} >
                    <SubtitleHeader
                    >We Provide Many Features You Can Use</SubtitleHeader>
                </Grid>
                <Grid md={10} mt={2} >
                    <SubtitleDesc>You can explore the features that we provide with fun and have their own functions each feature.</SubtitleDesc>
                </Grid>
                <Grid md={9} mt={5} sx={{ display: 'flex', justifyContent: 'start', }}>
                    <Stack direction='column' spacing={3} sx={{ marginLeft: { md: 5, xs: 8 }, }}>
                        <Features />
                        <Features />
                        <Features />
                        <Features />
                    </Stack>
                </Grid>
            </Grid>
        </Grid>
    )
}
