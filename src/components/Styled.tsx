import { styled } from '@mui/material/styles';
import {
    ListItem, Typography, Button, Box
} from '@mui/material';

//Navbar
export const ListItemStyle = styled(ListItem)(({ theme }) => ({
    fontFamily: 'Rubik, sans-serif',
    '&:hover': {
        backgroundColor: '#F53838',
        color: '#fff',
    }
}));

export const NavbarItem = styled(Typography)(({ theme }) => ({
    fontFamily: 'Rubik, sans-serif',
    color: '#4F5665',
    fontWeight: 'normal',
    '&:hover': {
        textDecoration: 'underline',
        color: '#F53838',
    }
}));

export const SignUp = styled(Button)<{ isSelected?: number, isSelect?: boolean, }>(({ theme, isSelect, isSelected }) => ({
    fontFamily: 'Rubik, sans-serif',
    width: isSelect ? '180px' : '150px', height: isSelect ? '50px' : '60px',
    borderRadius: 100, borderWidth: isSelect ? 3 : 2,
    borderColor: '#F53838',
    backgroundColor: isSelected === 1 ? 'blue' : (isSelected === 2 ? 'green' : (isSelected === 3 ? 'pink' : 'white'))
}));

export const HeaderFirst = styled(Typography)<{ isVpn?: boolean }>(({ theme, isVpn }) => ({
    fontFamily: 'Rubik, sans-serif',
    fontWeight: isVpn ? 'bold' : '540'
}));

//Home
export const HeaderText = styled(Typography)(({ theme }) => ({
    fontSize: '54px',
    [theme.breakpoints.down('md')]: {
        fontSize: '40px',
        lineHeight: '40px',
        paddingLeft: 20,
    },
    fontFamily: 'Rubik, sans-serif',
    fontWeight: 'normal',
    lineHeight: '80px'
}));

export const GetStartedButton = styled(Button)(({ theme }) => ({
    borderRadius: 10, width: '250px', height: '60px',
    boxShadow: '5px 5px 30px 1px red', marginTop: 20,
    [theme.breakpoints.down('md')]: {

    },
}));

export const HomeDesc = styled(Typography)(({ theme }) => ({
    marginTop: 3,
    fontFamily: 'Rubik, sans-serif',
    color: '#4F5665',
    lineHeight: '30px',
    fontSize: '18px',
    [theme.breakpoints.down('md')]: {
        fontSize: '14px',
        lineHeight: '20px',
        paddingLeft: 20,
    },
}));

export const SubtitleHeader = styled(Typography)(({ theme }) => ({
    fontSize: '35px',
    [theme.breakpoints.down('md')]: {
        fontSize: '20px',
        lineHeight: '40px',
        paddingLeft: 20,
    },
    fontFamily: 'Rubik, sans-serif',
    fontWeight: 'normal',
    lineHeight: '50px',
    marginLeft: 40
}));

export const SubtitleDesc = styled(Typography)(({ theme }) => ({
    marginTop: 3,
    fontFamily: 'Rubik, sans-serif',
    color: '#4F5665',
    lineHeight: '30px',
    fontSize: '16px',
    marginLeft: 40,
    [theme.breakpoints.down('md')]: {
        fontSize: '14px',
        lineHeight: '20px',
        paddingLeft: 20,
    },
}));

//Planning
export const PlanningHeader = styled(Typography)<{ isHeader?: boolean }>(({ theme, isHeader }) => ({
    marginTop: isHeader ? 50 : 20,
    fontFamily: 'Rubik, sans-serif',
    fontSize: isHeader ? '35px' : '16px',
    lineHeight: isHeader ? '50px' : '30px',
    textAlign: isHeader ? 'start' : 'center',
    maxWidth: isHeader ? 350 : 600,
    textAlignLast: 'center',
    [theme.breakpoints.down('md')]: {
        textAlign: 'center',
        maxWidth: isHeader ? 450 : 430,
        fontSize: isHeader ? '35px' : '15px',
    },

}));

export const ChoosePlanningText = styled(Typography)<{ isHeader?: boolean }>(({ theme, isHeader }) => ({
    fontFamily: 'Rubik, sans-serif',
    fontSize: isHeader ? '18px' : '16px',
    fontWeight: isHeader ? 'bold' : 'normal',
    textAlign: 'center',
}));

export const CommentHeader = styled(Typography)<{ isHeader?: boolean }>(({ theme, isHeader }) => ({
    marginTop: isHeader ? 50 : 20,
    fontFamily: 'Rubik, sans-serif',
    fontSize: isHeader ? '35px' : '16px',
    lineHeight: isHeader ? '50px' : '30px',
    textAlign: isHeader ? 'start' : 'center',
    maxWidth: isHeader ? 450 : 530,
    textAlignLast: 'center',
    [theme.breakpoints.down('md')]: {
        textAlign: 'center',
        maxWidth: isHeader ? 450 : 430,
        fontSize: isHeader ? '35px' : '15px',
    },
}));

//SubcribeCard
export const SubcribeBoxUp = styled(Box)(({ theme }) => ({
    marginTop: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));

export const SubcribeBoxDown = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
}));

export const SubcribeHeader = styled(Typography)(({ theme }) => ({
    fontFamily: 'Rubik,sans serif',
    [theme.breakpoints.down('md')]: {
        paddingTop: 0,
        marginLeft: 50,
        maxWidth: 250,
        fontSize: '26px',
        lineHeight: '36px',
        fontWeight: 'bold',
    },
    [theme.breakpoints.up('md')]: {
        paddingTop: 2,
        marginLeft: 2,
        maxWidth: 480,
        fontSize: '35px',
        lineHeight: '45px',
    },
}));

export const SubcribeBoxText = styled(Typography)(({ theme }) => ({
    fontFamily: 'Rubik,sans serif',
    paddingTop: '1rem',
    [theme.breakpoints.down('md')]: {
        marginLeft: '3rem',
        fontSize: '14px',
        lineHeight: '22px',
    },
    [theme.breakpoints.up('md')]: {
        marginLeft: 2,
        fontSize: '16px',
        lineHeight: '30px',
    },
}));
   