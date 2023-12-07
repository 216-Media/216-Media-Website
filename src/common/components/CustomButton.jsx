import {
    useState
} from 'react'

import{
    Button,
    styled
} from '@mui/material';



function CustomButton({ 
    buttonText, 
    arrowDirection, 
    animationDirection,
    borderColor,
    textColor,
    backgroundColor,
    type
}){

    const CustomButton = styled(Button)(({ theme }) => ({
        backgroundColor:  `${backgroundColor}`,
        color:  `${textColor}`,
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        display: 'flex',
        gap: theme.spacing(1),
        alignItems: 'flex-start',
        borderRadius: '50px',
        padding: theme.spacing(1, 1),
        border: `2px solid ${borderColor}`,
        width: '180px',
        '& .MuiSvgIcon-root': {
            transition: 'transform 0.5s ease',
        },
        '&:hover .MuiSvgIcon-root': {
            animation: `${animationDirection} 1s ease-in-out`,
        },
    }))

    return (
        <CustomButton
            type={type}
        >
            {buttonText}
            {arrowDirection}
        </CustomButton>
    )
}
export default CustomButton;
