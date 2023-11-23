import{
    styled,
    Box,
    Container,
    Typography,
    TextField
} from '@mui/material';

import {
    Link
} from 'react-router-dom';

import 
    LanguageIcon 
from '@mui/icons-material/Language';



import { 
    Colors 
} from '@/common/constants';

import { 
    Fragment 
} from 'react';
import CustomButton from './CustomButton';

const SeparatorBox = styled(Box)({
    width: '100%',
    height: '2px',
    backgroundColor: Colors.AZTEC
})

const SocialBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(3, 0),
    backgroundColor: Colors.AZTEC,
    width: '100%',
    height: '60px'
}))

const SocialMedia = styled(Container)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center'
}))

const ConnectContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    paddingBlock: theme.spacing(6)
}))

const Title = styled(Typography)({
    color: `${Colors.AZTEC}`,
    fontWeight: 'bold',
    fontSize: '22px',
    maxWidth: '300px',
    marginBottom: '30px'
})

const FooterDetailsContainer = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(1)
}))

const FooterFormContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column'
}))

const TextFormField = styled(TextField)({
    width: '350px'
})

const SocialMediaDetails = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '2px'
})

const LinkText = styled(Typography)({
    color: Colors.White,
    fontSize: '12px'
})

const WebIcon = styled(LanguageIcon)({
    color: Colors.White
})



function Footer(){
    return(
        <Fragment>
            <SeparatorBox></SeparatorBox>
            <ConnectContainer>
                <FooterDetailsContainer>
                    <Title variant='h3'>
                        We are an independent 
                        Pan-African creative and 
                        communications agency 
                    </Title>
                    <CustomButton 
                     buttonText={"LET'S CONNECT"} 
                    />
                </FooterDetailsContainer>
                <FooterFormContainer>
                    <TextFormField 
                        label='Email address' 
                        variant='standard'
                    />
                    <TextFormField 
                        label='Subject' 
                        variant='standard'
                    />
                    <TextFormField 
                        label='Message' 
                        variant='standard'
                    />
                </FooterFormContainer>
            </ConnectContainer>
            <SocialBox>
                <SocialMedia>
                    <SocialMediaDetails>
                        <WebIcon />
                        <LinkText>
                            216 Media
                        </LinkText>
                    </SocialMediaDetails>
                    <SocialMediaDetails>
                        <WebIcon />
                        <LinkText>
                            216 Media
                        </LinkText>
                    </SocialMediaDetails>
                </SocialMedia>
            </SocialBox>
        </Fragment>
    )
}

export default Footer;