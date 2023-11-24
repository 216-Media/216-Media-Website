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
    CallIcon 
from '@mui/icons-material/Call';

import 
    CopyrightIcon 
from '@mui/icons-material/Copyright';

import 
    InstagramIcon 
from '@mui/icons-material/Instagram';

import 
    TwitterIcon 
from '@mui/icons-material/Twitter';

import 
    FacebookOutlinedIcon 
from '@mui/icons-material/FacebookOutlined';

import 
    LanguageIcon 
from '@mui/icons-material/Language';


import { 
    Colors, 
    socialIcons 
} from '@/common/constants';

import { 
    Fragment 
} from 'react';

import 
    CustomButton 
from './CustomButton';

import
    Facebook
from '@/assets/icons/facebook.png';

import
    Instagram
from '@/assets/icons/Instagram.png';

import
    Twitter
from '@/assets/icons/twitter.png';

import 
    WhatsApp
from '@/assets/icons/whatsApp.png'

const iconList = [
    {
        icon: WhatsApp,
        linkText: '00115348400'
    },
    {
        icon: Facebook,
        linkText: '216 Media'
    },
    {
        icon: Instagram,
        linkText: '@twoonesix_media'
    },
    {
        icon: Twitter,
        linkText: '@twoonesix_media'
    },
    {
        icon: '',
        linkText: '216Media-EverythingMedia&Marketing'
    }
]

const SeparatorBox = styled(Box)({
    width: '100%',
    height: '2px',
    backgroundColor: Colors.AZTEC
})

const SocialBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(3, 0),
    backgroundColor: Colors.AZTEC,
    width: '100%',
    height: '70px'
}))

const SocialMedia = styled(Container)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: theme.spacing(4)
}))

const ConnectContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    paddingBlock: theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        justifyContent: 'center'
    }
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

const LinkText = styled(Typography)(({ theme }) =>({
    color: Colors.White,
    fontSize: '12px',
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}))

const SocialImg = styled('img')({
    color: Colors.White,
    width: '22px'
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
                    {iconList.map((social, index) => (
                        <SocialMediaDetails key={index}>
                            <SocialImg src={social.icon}/>
                            <LinkText>
                                {social.linkText}
                            </LinkText>
                        </SocialMediaDetails>
                    ))}
                </SocialMedia>
            </SocialBox>
        </Fragment>
    )
}

export default Footer;