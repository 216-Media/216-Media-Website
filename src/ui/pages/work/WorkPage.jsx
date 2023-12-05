import 
    NavigationBar 
from '@/common/components/NavigationBar';

import{
    Box,
    styled,
    Typography
} from '@mui/material'

import { 
    Fragment 
} from 'react';

import{
    ServiceImg
} from '@/assets/images';

import { 
    Colors 
} from '@/common/constants';

import 
    ScrollTrigger 
from '@/common/components/ScrollTrigger';
import Footer from '@/common/components/Footer/Footer';


const WorkContainerDetails = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
}))

const WorkContainer = styled(Box)(({ theme }) => ({
    backgroundImage: `url(${ServiceImg})`,
    backgroundSize: 'cover',
    position: 'relative',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    backgroundPosition: '100% 80%',
    margin: '0 auto',
    height: '100vh',
    padding: theme.spacing(30, 0, 10, 0),
}));


const Overlay = styled('div')({
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.BlackOpac,
    zIndex: 1
})

const WorkTitle = styled(Typography)(({ theme }) => ({
    color: Colors.White,
    fontSize: '50px',
    marginBlock: theme.spacing(3),
    textAlign: 'center',
    maxWidth: '1300px',
    [theme.breakpoints.down("md")]: {
        fontSize: "44px",
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "35px",
    }
}))

function WorkPage(){
    return(
        <Fragment>
            <NavigationBar />
            <WorkContainer>
                <Overlay />
                <WorkContainerDetails>
                    <Box position='relative' zIndex='1'>
                        <WorkTitle 
                         variant='h1'
                         fontWeight={'bold'} 
                        >
                            Making Our Clients Happy through Digital Experience
                        </WorkTitle>

                        <ScrollTrigger />
                    </Box>
                
                </WorkContainerDetails>
            </WorkContainer>
            <Footer />
        </Fragment>
        
    )
}

export default WorkPage;