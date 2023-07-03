import {
    Grid, Stack
} from '@mui/material';
import { PlanningHeader } from './Styled';
import { ReactComponent as Network } from './SvgCodes/Network.svg'
import { ReactComponent as AllApps } from './SvgCodes/AllApps.svg';


export const GlobalNetwork = () => {
    return (
        <Grid sx={{ backgroundColor: '#F6F6F6' }}>
            <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
                <Stack direction='column' sx={{ display: 'flex', alignItems: 'center',marginTop:10 }}>
                    <PlanningHeader isHeader>Huge Global Network of Fast VPN</PlanningHeader>
                    <Stack sx={{ maxWidth: {md:'550px',xs:'350px'} }}>
                        <PlanningHeader>See LaslesVPN everywhere to make it easier for you when you move locations.</PlanningHeader>
                    </Stack>
                </Stack>
            </Grid>
            <Grid sx={{ justifyContent: 'center', display: 'flex', marginTop: {md:10,xs:0} }}>
                <Network />
            </Grid>
            <Grid sx={{ justifyContent: 'center', display: 'flex', marginTop: {md:10,xs:0} }}>
                <AllApps />
            </Grid>
        </Grid>
    )
}
