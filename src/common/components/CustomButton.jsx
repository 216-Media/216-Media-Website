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

import{
    keyframes
} from '@emotion/react';

import 
    EastIcon 
from '@mui/icons-material/East';

function CustomButton({ buttonText }){
    const [isClicked, setIsClicked] = useState(false);

    const ArrowAnimation = keyframes`
    0% {
        transform: translateX(0);
      }
      50% {
        transform: translateX(40px); 
      }
      100% {
        transform: translateX(100px); 
      }
    `;
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
            animation: `${ArrowAnimation} 1s ease-in-out`,
        },
    }))

    const ArrowRight = styled(EastIcon)(({ theme }) => ({
        
    }));

    return (
        <CustomButton>
            {buttonText}
            <ArrowRight />
        </CustomButton>
    )
}
export default CustomButton;
