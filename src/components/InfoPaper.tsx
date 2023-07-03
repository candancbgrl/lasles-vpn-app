import { Divider, Grid, Paper } from '@mui/material';

import { ReactComponent as User }  from './SvgCodes/Icons/User.svg'
import { ReactComponent as Location }  from './SvgCodes/Icons/Location.svg'
import { ReactComponent as Server }  from './SvgCodes/Icons/Server.svg'


import { PaperItem } from './PaperItem'

export const InfoPaper = () => {
    return (
        <Grid mt={10} sx={{ paddingLeft: { md: 18 }, paddingRight: { md: 18 } }}>
            <Paper elevation={16}>
                <Grid container >
                    <PaperItem  icon = {<User/>} number='90' header='Users' />
                    <Divider orientation="vertical" flexItem sx={{marginTop:5,marginBottom:5,borderWidth: '1px'}} />
                    <PaperItem icon = {<Location/>} number='30' header='Locations'/>
                    <Divider orientation="vertical" flexItem sx={{marginTop:5,marginBottom:5,borderWidth: '1px'}}/>
                    <PaperItem icon = {<Server/>} number='50' header='Servers'/>
                </Grid>
            </Paper>
        </Grid>

    )
}
