import {
    useState
} from 'react'

import{
    Button,
    styled
} from '@mui/material';

import { 
    Colors 
} from '@/common/constants';

import
    ArrowRightImg
from '@/assets/icons/right-arrow.png';



import 
    EastIcon 
from '@mui/icons-material/East';

function CustomButton({ buttonText, arrowDirection, animationDirection }){
    const [isClicked, setIsClicked] = useState(false);

   
    const CustomButton = styled(Button)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'light' ? `${Colors.White}` : `${Colors.HavelockBlue}`,
        color: theme.palette.mode === 'light' ? `${Colors.AZTEC}` : `${Colors.White}`,
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        display: 'flex',
        gap: theme.spacing(2),
        borderRadius: '50px',
        padding: theme.spacing(1, 1),
        border: `2px solid ${Colors.AZTEC}`,
        width: '180px',
        '& .MuiSvgIcon-root': {
            transition: 'transform 0.5s ease',
        },
        '&:hover .MuiSvgIcon-root': {
            animation: `${animationDirection} 1s ease-in-out`,
        },
    }))

    return (
        <CustomButton>
            {buttonText}
            {arrowDirection}
        </CustomButton>
    )
}
export default CustomButton;
