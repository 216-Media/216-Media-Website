import { 
    Typography, 
    Box, 
    styled, 
    Container 
} from "@mui/material";

import { 
    Colors 
} from "@/common/constants";

import{
    HomeImg
} from '@/assets/images'

import 
    ScrollTrigger 
from '@/common/components/ScrollTrigger';

import{
    LandingImg
}from '@/assets/images';

import{
    SecondLandingImg
} from '@/assets/images'

const HeroContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(16, 0),
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
    }
}))

const Title = styled(Typography)(({ theme }) => ({
    fontSize: '64px',
    color: `${Colors.White}`,
    textAlign: 'left',
    maxWidth: '800px',
    margin: theme.spacing(9, 0, 4, 0),
    [theme.breakpoints.down('md')]: {
        fontSize: '44px',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '35px'
    }
}))

const Overlay = styled('div')({
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.BlackOpac
})


const HeroBox = styled(Box)(({ theme }) => ({
    position: 'relative',
    backgroundColor: Colors.SkyBlue,
    backgroundImage: `url(${SecondLandingImg})`,
    backgroundSize: 'cover',
    backgroundPosition: '100% 50%', 
    zIndex: -1,
    height: '100vh'
}))
function Hero(){

    return(
        <HeroBox>
            <Overlay />
            <HeroContainer>
                <Box position='relative'>
                    <Title 
                        variant='h1'
                        fontWeight={'bold'}
                    >
                        We are an independent, 
                        Pan-African creative and 
                        communications agency
                    </Title>

                    <ScrollTrigger />
                </Box>
            </HeroContainer>
        </HeroBox>
        
    )
}

export default Hero;