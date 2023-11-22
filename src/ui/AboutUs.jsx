import {
    Container,
    styled,
    Typography,
    Box
} from '@mui/material';

import {
    Colors
} from '@/common/constants';

import 
    CustomButton 
from '@/common/components/CustomButton';

import 
    KeyboardArrowDownIcon 
from '@mui/icons-material/KeyboardArrowDown';

import
    Fade
from '@mui/material/Fade';

import {
    keyframes
} from '@emotion/react'

const bounceArrowDown = keyframes`
    from, 20%, 53%, 80%, to {
        transform: translate3d(0,0,0);
    }
    40%, 43% {
        transform: translate3d(0, -4px, 0);
    }

    70% {
        transform: translate3d(0, -5px, 0);
    }

    90% {
        transform: translate3d(0,-2px,0);
    }
`;

const BouncingImg = styled('img')

const AboutContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    zIndex: '-3',
    flexDirection: 'column',
    textAlign: 'left',
    alignItems: 'left',
    padding: theme.spacing(6, 0, 0, 0),
    [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
        alignItems: 'center'
    }
}));

const Title = styled(Typography)(({ theme }) => ({
    color: `${Colors.AZTEC}`,
    fontWeight: '800',
    fontSize: '26px',
    marginRight: '2px'
}));

const Description = styled(Typography)(({ theme }) => ({
    color: `${Colors.AZTEC}`,
    fontWeight: '400',
    fontSize: '17px',
    maxWidth: '585px',
    margin: theme.spacing(4, 0)
}));

const TitleContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center'
}));

const DownArrow = styled(KeyboardArrowDownIcon)(({ theme }) => ({
    width: '35px',
    height: '35px',
    animation: `${bounceArrowDown} 1.8s ease infinite`
}))

function AboutUs(){
    return(
        <AboutContainer>
            <TitleContainer>
                <Title>About Us</Title>
                <DownArrow />
            </TitleContainer>
            <Description>
                216 Media is an independent, creative, events and communications agency.
                At 216 Media, we are architects of unforgettable experiences and the 
                creators of spectacular visual narratives. Our passion lies in seamlessly
                blending the worlds of design and event management to craft unique and memorable
                moments that leave a lasting impression
            </Description>
            <CustomButton buttonText={'LEARN MORE'}/>
        </AboutContainer>
    )
}

export default AboutUs;