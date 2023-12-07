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
    ServiceImg,
} from '@/assets/images';

import { 
    Colors 
} from '@/common/constants';

import 
    ScrollTrigger 
from '@/common/components/ScrollTrigger';

import 
    Footer 
from '@/common/components/Footer/Footer';

import 
    WorkItem 
from './components/WorkItem';

import 
    GetStarted 
from '@/common/components/GetStarted';


const WorkContainerDetails = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 2,
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

const WorkProjectContainer = styled(Box)(({ theme }) => ({
    paddingBlock: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}))

const WorkProjectTitle = styled(Typography)(({ theme }) => ({
    color: Colors.AZTEC,
    fontSize: '35px',
    textAlign: 'center'
}))

const WorkProjectDescription = styled(Typography)(({ theme }) => ({
    color: Colors.ScaleGrey,
    fontSize: '18px',
    textAlign: 'center',
    maxWidth: '400px',
    padding: theme.spacing(2, 0, 5, 0)
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

            <WorkProjectContainer>
                <WorkProjectTitle
                    variant='h1'
                    fontWeight={'bold'}
                >
                    Our Work
                </WorkProjectTitle>

                <WorkProjectDescription>
                    This is the work we have done for a number of clients.
                </WorkProjectDescription>

                <WorkItem />
            </WorkProjectContainer>

            <GetStarted />

            <Footer />
        </Fragment>
        
    )
}

export default WorkPage;