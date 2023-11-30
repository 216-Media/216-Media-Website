import{
    styled,
    Box,
    Typography
} from '@mui/material';

import {
    Colors, 
    wheelAnimation
} from '@/common/constants';

const ScrollWheel = styled('div')(({ theme }) => ({
    width: '30px',
    height: '60px',
    borderRadius: '60px',
    border: `2px solid ${Colors.White}`,
    position: 'relative',
    '&::before': {
        content: '" "',
        width: '10px',
        height: '10px',
        position: 'absolute',
        top: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
		backgroundColor: Colors.White,
		borderRadius: '50%',
		opacity: '1',
		animation: `${wheelAnimation} 2s infinite`
    }
}))

const ScrollContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
})

const ScrollText = styled(Typography)(({ theme }) => ({
    fontSize: '10px',
    color: Colors.White,
    marginTop: theme.spacing(1),
}))

function ScrollTrigger(){
    return (
        <ScrollContainer>
            <ScrollWheel></ScrollWheel>
            <ScrollText variant="caption">
                scroll down
            </ScrollText>
        </ScrollContainer>
        
    )
}

export default ScrollTrigger;