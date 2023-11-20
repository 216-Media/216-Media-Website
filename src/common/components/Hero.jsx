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
        maxWidth: '900px',
        marginTop: theme.spacing(3),
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
        
        margin: theme.spacing(4, 0, 4, 0),
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px',
        }
    }))

    // const HeroContainer = styled(Box)(({ theme }) => ({
    //     width: '95%',
    //     margin: '0 auto',
    //     maxWidth: '1380px',
    //     padding: '13px 0'
    // }));

    return(
        
            <HeroContainer>
                <Box>
                    <Title variant='h1'>We are an independent Pan-African creative and communications agency</Title>
                </Box>
            </HeroContainer>
        
       
    )
}

export default Hero;