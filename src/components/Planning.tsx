import {
    Grid, Stack
} from '@mui/material';
import { PlanningHeader } from './Styled';
import { PlanningPaper } from './PlanningPaper';

export const Planning = () => {
    return (
        <Grid sx={{ backgroundColor: '#F6F6F6' }}>
            <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
                <Stack direction='column' sx={{ display: 'flex', alignItems: 'center' }}>
                    <PlanningHeader isHeader>Choose Your Plan</PlanningHeader>
                    <PlanningHeader
                    >Let's choose the package that is best for you and explore it happily and cheerfully.</PlanningHeader>
                </Stack>
            </Grid>
            <Grid>
                <PlanningPaper />
            </Grid>
        </Grid>

    )
}
