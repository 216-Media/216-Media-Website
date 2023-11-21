import { 
    Typography, 
    Box, 
    styled, 
    Container 
} from "@mui/material";

import { 
    Colors 
} from "@/common/constants";


function Hero(){
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
        fontWeight: 'bold',
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
        backgroundColor: '#E6F0FF'
    }))

    return(
        <HeroBox>
            <HeroContainer>
                <Box>
                    <Title variant='h1'>
                        We are an independent Pan-African creative and communications agency
                    </Title>
                </Box>
            </HeroContainer>
        </HeroBox>
    )
}

export default Hero;