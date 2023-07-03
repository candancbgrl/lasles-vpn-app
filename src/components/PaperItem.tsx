import { Grid, Typography, Stack} from '@mui/material';


type CardItemProps = {
    number: any;
    header: any;
    icon: any;
}

export const PaperItem : React.FC<CardItemProps> = ({ number, header, icon })=> {
    return (
        <Grid md={3.8} xs={3.8} my={10} >
            <Stack direction='row' spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                {icon}
                <Stack direction='column' sx={{ justifyContent: 'center', alignItems: 'flex-start' }}>
                    <Typography sx={{
                        fontWeight: 'bold',
                        fontSize: {md:'25px',xs:'18px'}
                    }} >{number}+</Typography>
                    <Typography sx={{
                        fontSize: {md:'20px',xs:'14px'}
                    }}>{header}</Typography>
                </Stack>
            </Stack>
            
        </Grid>
    )
}
