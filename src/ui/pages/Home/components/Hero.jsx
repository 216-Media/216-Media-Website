import {
    useCallback,
    useRef,
    useState
} from 'react';

import {
    loadFull
} from 'tsparticles';

import { 
    Typography, 
    Box, 
    styled, 
    Container 
} from "@mui/material";

import { 
    Colors 
} from "@/common/constants";

import 
    Particles 
from 'react-particles';

import 
    Fade
from 'react-reveal/Fade'

const HeroContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(9, 0),
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
    }
}))

const Title = styled(Typography)(({ theme }) => ({
    fontSize: '64px',
    color: `${Colors.AZTEC}`,
    textAlign: 'center',
    maxWidth: '800px',
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down('md')]: {
        fontSize: '44px',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '35px'
    }
}))

const HeroBox = styled(Box)(({ theme }) => ({
    backgroundColor: Colors.SkyBlue,
    position: 'relative',
    zIndex: 1,
}))

const ParticleContainer = styled(Particles)({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0
})
function Hero(){
    const [particlesLoaded, setParticlesLoaded] = useState(false);

    const particleRef = useRef(null);

    const particleInit = useCallback(async engine => {
        await loadFull(engine);
        setParticlesLoaded(true);
    }, []);

    return(
        <Box>
            {!particlesLoaded && (
            <ParticleContainer
                id="tsparticles"
                init={particleInit}
                loaded={particlesLoaded}
                ref={(ref) => (particleRef.current = ref)}
                height='100%'
                width='100%'
                options={{
                    background: {
                        color: {
                            value: "",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 6,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />
            )}
        
            <HeroBox>
                <HeroContainer>
                    <Box position='relative'>
                        <Fade bottom>
                            <Title 
                                variant='h1'
                                fontWeight={'bold'}
                            >
                                We are an independent, Pan-African creative and communications agency
                            </Title>
                        </Fade>
                        
                    </Box>
                </HeroContainer>
            </HeroBox>
        </Box>
    )
}

export default Hero;