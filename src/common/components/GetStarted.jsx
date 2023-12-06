import{
    styled,
    Container,
    Typography,
    Box
}from '@mui/material';

import { 
    Colors 
} from '@/common/constants';

import{
    Banner
} from '@/assets/images';

import {
    Link
} from 'react-router-dom';

import 
    ArrowOutwardIcon 
from '@mui/icons-material/ArrowOutward';

import CustomButton from './CustomButton';

const GetStartedContainer = styled(Container)(({ theme }) => ({
    padding: theme.spacing(4, 2),
    backgroundImage: `url(${Banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    zIndex: -1,
    borderRadius: '5px',
    marginBottom: theme.spacing(6)
}))

const GetStartedDetailsContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    gap: theme.spacing(2)
}))

const GetStartedTopTitle = styled(Typography)({
    fontSize: '17px',
    letterSpacing: '2px',
    color: Colors.ScaleGrey
})

const GetStartedTitle = styled(Typography)(({ theme }) => ({
    fontSize: '30px',
    color: Colors.White,
    [theme.breakpoints.down('sm')]: {
        fontSize: '22px'
    }
}))

const NavigationLink = styled(Link)({
    textDecoration: 'none'
})

function GetStarted(){
    return(
        <Container>
            <GetStartedContainer>
                <GetStartedDetailsContainer>
                    <GetStartedTopTitle variant='p'>
                        Get Started
                    </GetStartedTopTitle>
                    <GetStartedTitle
                        variant='h1'
                        fontWeight={'bold'}
                    >
                        Fill in the brief and get the project estimate
                    </GetStartedTitle>

                    <NavigationLink
                     to='/contact-us'
                     >
                        <CustomButton
                            backgroundColor={'transparent'}
                            borderColor={Colors.White}
                            textColor={Colors.White}
                            buttonText={'Get Started'}
                            arrowDirection={<ArrowOutwardIcon />}
                        />
                    </NavigationLink>
                    
                </GetStartedDetailsContainer>
            </GetStartedContainer>
        
        </Container>
        
    )
}

export default GetStarted;