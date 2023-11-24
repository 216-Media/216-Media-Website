import {
    Container,
    styled,
    Typography,
    Box
} from '@mui/material';

import {
    ArrowRightAnimation,
    Colors
} from '@/common/constants';

import 
    CustomButton 
from '@/common/components/CustomButton';


import 
    EastIcon 
from '@mui/icons-material/East';

import DownArrowAnimation from '@/common/components/DownArrowAnimation';



const AboutContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    alignItems: 'left',
    padding: theme.spacing(6, 0, 0, 0),
    marginBottom: theme.spacing(3),
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

function AboutUs(){
    return(
        <AboutContainer>
            <TitleContainer>
                <Title>About Us</Title>
                <DownArrowAnimation />
            </TitleContainer>
            <Description>
                216 Media is an independent, creative, events and communications agency.
                At 216 Media, we are architects of unforgettable experiences and the 
                creators of spectacular visual narratives. Our passion lies in seamlessly
                blending the worlds of design and event management to craft unique and memorable
                moments that leave a lasting impression
            </Description>
            <CustomButton 
             arrowDirection={<EastIcon />} 
             buttonText={'LEARN MORE'}
             animationDirection={ArrowRightAnimation}
            />
        </AboutContainer>
    )
}

export default AboutUs;