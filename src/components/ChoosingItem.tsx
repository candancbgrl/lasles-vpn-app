import {
    Stack
} from '@mui/material';

import { ReactComponent as Tic } from './SvgCodes/Icons/Tic.svg';
import { ChoosePlanningText } from './Styled'

type ChooseProp ={
    text:any; 
}

export const ChoosingItem: React.FC<ChooseProp> = ({ text})=> {
    return (
        <Stack direction='row' sx={{ justifyContent: 'flex-start' }} spacing={4}>
            <Stack pt={1} ><Tic /></Stack>
            <ChoosePlanningText>{text}</ChoosePlanningText>
        </Stack>
    )
}
