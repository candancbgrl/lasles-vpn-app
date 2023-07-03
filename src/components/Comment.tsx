import {
    Grid, Stack
} from '@mui/material';
import { CommentHeader } from './Styled';
import { CustomerPaper } from './CustomerPaper';


export const Comment = () => {
    return (
        <Grid sx={{ backgroundColor: '#fff' }}>
            <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
                <Stack direction='column' sx={{ display: 'flex', alignItems: 'center' }}>
                    <CommentHeader isHeader>Trusted by Thousands of Happy Customer</CommentHeader>
                    <CommentHeader
                    >These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</CommentHeader>
                </Stack>
            </Grid>
            <Grid>
                <CustomerPaper />
            </Grid>
        </Grid>
    )
}
