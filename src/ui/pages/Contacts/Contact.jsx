import { 
    Fragment 
} from 'react';

import{
    styled,
    Box,
    Typography
} from '@mui/material';

import
    ArrowDownwardIcon
from '@mui/icons-material/ArrowDownward'

import
    ServicePatternImg
from '@/assets/icons/service-patterns.png';

import { 
    ArrowDownAnimation,
    Colors 
} from '@/common/constants';

import 
    NavigationBar 
from '@/common/components/NavigationBar';

import{
    ContactUsImg
}from '@/assets/images'

import 
    ScrollTrigger 
from '@/common/components/ScrollTrigger';


const Overlay = styled('div')({
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.BlackOpac,
    zIndex: -1
})


const ContactContainer = styled(Box)(({ theme }) => ({
    backgroundImage: `url(${ContactUsImg})`,
    position: 'relative',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '100% 80%',
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(30, 0, 10, 0),
   
}))

const ContactTitle = styled(Typography)(({ theme }) => ({
    color: Colors.White,
    fontSize: '50px',
    marginBlock: theme.spacing(3),
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        fontSize: '44px'
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '35px'
    }
}))

const ContactContainerDetails = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
}))

const ContactBoxForm = styled(Box)(({ theme }) => ({
    textAlign: 'center',
}))

function Contact(){
    return(
        <Fragment>
            <NavigationBar />

            <ContactContainer>
                <Overlay />
                <ContactContainerDetails>

                    <Box position='relative'>
                        <ContactTitle
                            variant='h1'
                            fontWeight={'bold'}
                        >
                            Chat to Us
                        </ContactTitle>

                        <ScrollTrigger />
                    </Box>      
                </ContactContainerDetails>
            </ContactContainer>


        </Fragment>
    )
}

export default Contact;