import { Grid } from '@mui/material';

import { PlanningPaperItems } from './PlanningPaperItems'

export const PlanningPaper = () => {
    return (
        <Grid mt={5} spacing={3} sx={{ display: 'flex', justifyContent: 'center' }}>
            <PlanningPaperItems />
        </Grid>
    )
}
