import 
    NavigationBar 
from '@/common/components/NavigationBar';

import {
    styled,
    Box,
    Typography
} from '@mui/material'

import { 
    Fragment 
} from 'react';

import {
    WorkImg
} from '@/assets/images';

import { 
    Colors 
} from '@/common/constants';

import 
    Footer 
from '@/common/components/Footer/Footer';

import 
    ScrollTrigger 
from '@/common/components/ScrollTrigger';

import 
    ServiceCards 
from '@/ui/pages/Services/components/ServiceCards';

import 
    GetStarted 
from '@/common/components/GetStarted';

const ServicesContainer = styled(Box)(({ theme }) => ({
    backgroundImage: `url(${WorkImg})`,
    backgroundSize: 'cover',
    position: 'relative',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    backgroundPosition: '100% 80%',
    margin: '0 auto',
    height: '100vh',
    padding: theme.spacing(30, 0, 10, 0),
}))

const Overlay = styled('div')({
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.BlackOpac,
    zIndex: 1
})

const ServicesContainerDetails = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
}))

const ServicesTitle = styled(Typography)(({ theme }) => ({
    color: Colors.White,
    fontSize: '50px',
    marginBlock: theme.spacing(3),
    textAlign: 'center',
    maxWidth: '900px',
    [theme.breakpoints.down("md")]: {
        fontSize: "44px",
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "35px",
    }
}))

const ServiceOfferContainer = styled(Box)(({ theme }) => ({
    paddingBlock: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}))

const OfferTitle = styled(Typography)(({ theme }) => ({
    color: Colors.AZTEC,
    fontSize: '35px',
    textAlign: 'center'
}))

const OfferDescription = styled(Typography)(({ theme }) => ({
    color: Colors.ScaleGrey,
    fontSize: '18px',
    textAlign: 'center',
    maxWidth: '400px',
    padding: theme.spacing(2, 0, 5, 0)
}))

function ServicesPage(){
    return(
        <Fragment>
            <NavigationBar />
            <ServicesContainer>
                <Overlay />
                <ServicesContainerDetails>
                    <Box position='relative' zIndex='1'>
                        <ServicesTitle
                         variant='h1'
                         fontWeight={'bold'}
                        >
                            Making Designs To Empower your Business
                        </ServicesTitle>

                        <ScrollTrigger />
                    </Box>
                </ServicesContainerDetails>
            </ServicesContainer>

            <ServiceOfferContainer>
                <OfferTitle
                 variant='h1'
                 fontWeight={'bold'}
                >
                    Our Services
                </OfferTitle>

                <OfferDescription>
                    We offer a wide range of Services to 
                    our clients and make sure their happy.
                </OfferDescription>
                <ServiceCards />
            </ServiceOfferContainer>

            <GetStarted />
            <Footer />
        </Fragment>
    )
}

export default ServicesPage;