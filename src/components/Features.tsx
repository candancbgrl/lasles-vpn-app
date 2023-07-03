import { ReactComponent as Done } from './SvgCodes/Icons/Done.svg'
import { Typography, Stack } from '@mui/material';


export const Features = () => {
    return (
        <Stack direction='row' spacing={1}>
            <Done />
            <Typography sx={{ fontSize: { md: '16px', xs: '14px' } }}>Powerfull online protection.</Typography>
        </Stack>
    )
}
