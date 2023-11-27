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



import { 
    ArrowRightAnimation,
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
from '@/assets/icons/whatsApp.png';

import 
    EastIcon 
from '@mui/icons-material/East';

import 
    CopyRight
from '@/assets/icons/CopyRight.png';

const iconList = [
    {
        icon: WhatsApp,
        linkText: '00115348400',
        link: 'tel:00115348400'
        
    },
    {
        icon: Facebook,
        linkText: '216 Media',
        link: 'https://www.facebook.com/people/216-Media/61552352197950/'
    },
    {
        icon: Instagram,
        linkText: '@twoonesix_media',
        link: 'https://www.instagram.com/twoonesix_media/'
    },
    {
        icon: Twitter,
        linkText: '@twoonesix_media',
        link: 'https://twitter.com/216_media'
    },
    {
        icon: CopyRight,
        linkText: '216Media-EverythingMedia&Marketing',
        link: ''
    }
]

const SeparatorBox = styled(Box)(({theme}) => ({
    width: '100%',
    height: '2px',
    backgroundColor: theme.palette.mode === 'light' ? `${Colors.AZTEC}` : `${Colors.White}`,
}))

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

const Title = styled(Typography)(({ theme }) => ({
    color: theme.palette.mode === 'light' ? `${Colors.AZTEC}` : `${Colors.White}`,
    fontWeight: 'bold',
    fontSize: '22px',
    maxWidth: '300px',
    marginBottom: '30px'
}))

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
    [theme.breakpoints.down('md')]: {
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
                     arrowDirection={<EastIcon />}
                     buttonText={"LET'S CONNECT"}
                     animationDirection={ArrowRightAnimation} 
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
                            <a href={social.link}
                            target="_blank"
                            rel='noopener noreferrer'
                            >
                                <SocialImg src={social.icon}/>
                            </a>
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