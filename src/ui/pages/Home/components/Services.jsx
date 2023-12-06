import {
    styled,
    Box,
    Typography,
} from '@mui/material';

import
    ServicePatternImg
from '@/assets/icons/service-patterns.png';

import { 
    ArrowRightAnimation,
    Colors 
} from '@/common/constants';

import 
    CustomButton 
from '@/common/components/CustomButton';

import { 
    Fragment 
} from 'react';

import 
    Typewriter 
from 'typewriter-effect';

import {
    Link
} from 'react-router-dom';

import 
    ArrowOutwardIcon 
from '@mui/icons-material/ArrowOutward';

import 
    EastIcon 
from '@mui/icons-material/East';


const ServiceContainer = styled(Box)(({ theme }) => ({
    backgroundImage: `url(${ServicePatternImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    padding: theme.spacing(30, 0, 8, 0),
    margin: '0 auto',
}))

const TitleContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    
}))
const Title = styled(Typography)(({ theme }) => ({
    color: theme.palette.mode === 'light' ? `${Colors.AZTEC}` : `${Colors.White}`,
    fontSize: '26px',
    fontWeight: 'bold',
    marginBlock: theme.spacing(3)
}))

const TypeWriterComponent = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(3),
    fontWeight: '500',
    fontSize: '20px',
    color: theme.palette.mode === 'light' ? `${Colors.AZTEC}` : `${Colors.White}`,
}))

const NavigateButtonLink = styled(Link)({
    textDecoration: 'none'
})

function Services(){

    return(
        <Fragment>
            <ServiceContainer>
                <TitleContainer>
                    <Title>
                        The great services we offer are
                    </Title>
                <TypeWriterComponent>
                    <Typewriter 
                        options={{ 
                            strings: [
                                'Advertising', 
                                'Design',
                                'Digital Marketing',
                                'Branding',
                                'Trend Insight Strategy'
                            ],
                            autoStart: true,
                            loop: true
                        }}
                    />
                </TypeWriterComponent>
                
                <NavigateButtonLink to='/services'>
                    <CustomButton
                        textColor={Colors.AZTEC}
                        borderColor={Colors.AZTEC}
                        backgroundColor={Colors.White}
                        arrowDirection={<ArrowOutwardIcon />} 
                        buttonText={
                        'LEARN MORE'
                        }
                        
                />
                </NavigateButtonLink>
                
                </TitleContainer>
            </ServiceContainer>
        </Fragment>
    )
};

export default Services;