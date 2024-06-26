import {
    Container,
    styled,
    Typography,
    Box
} from '@mui/material';

import {
    ArrowRightAnimation,
    Colors,
    values
} from '@/common/constants';

import{
    Link
} from 'react-router-dom'

import 
    CustomButton 
from '@/common/components/CustomButton';

import 
    ArrowOutwardIcon 
from '@mui/icons-material/ArrowOutward';


import 
    DownArrowAnimation 
from '@/common/components/DownArrowAnimation';

import Values from './Values';

import CardValues from '@/common/components/CardValue';



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
    color: Colors.AZTEC,
    fontWeight: '800',
    fontSize: '26px',
    marginRight: '2px'
}));

const Description = styled(Typography)(({ theme }) => ({
    color: `${Colors.AZTEC}`,
    fontWeight: '400',
    fontSize: '17px',
    maxWidth: '620px',
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
                <Title>Who we are.</Title>
                <DownArrowAnimation />
            </TitleContainer>
            <Description>
                216 Media is an independent, creative, events and communications agency.
                At 216 Media, we are architects of unforgettable experiences and the 
                creators of spectacular visual narratives.
            </Description>


            <CardValues
                values={values}
            />

            <Link
                style={{ 
                    textDecoration: 'none' 
                }}
                to='/about-us'
            >
                <CustomButton 
                    arrowDirection={<ArrowOutwardIcon />} 
                    buttonText={'LEARN MORE'}
                    textColor={Colors.AZTEC}
                    borderColor={Colors.AZTEC}
                    backgroundColor={Colors.White}
                />
            </Link>
            
        </AboutContainer>
    )
}

export default AboutUs;