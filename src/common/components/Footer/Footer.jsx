import { 
  styled, 
  Box, 
  Container, 
  Typography, 
  TextField 
} from "@mui/material";


import { 
  Colors, 
  linkObjAbout, 
  linkObjCompany, 
  linkObjTeam 
} from "@/common/constants";

import { 
  Fragment 
} from "react";

import 
  Facebook 
from "@/assets/icons/facebook.png";

import 
  Instagram 
from "@/assets/icons/Instagram.png";

import 
  Twitter 
from "@/assets/icons/twitter.png";

import 
  FooterLogo
from '@/assets/icons/216-logo-white.png';

import 
  QuickLink 
from "./component/QuickLink";

import 
  CompanyInfo 
from "./component/CompanyInfo";

const iconList = [
 
  {
    icon: Facebook,
    link: "https://www.facebook.com/people/216-Media/61552352197950/",
  },
  {
    icon: Instagram,
  
    link: "https://www.instagram.com/twoonesix_media/",
  },
  {
    icon: Twitter,
    link: "https://twitter.com/216_media",
  },
];


const SocialBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 5),
  backgroundColor: Colors.AZTEC,
  width: "100%",
  display: 'flex',
  flexDirection: 'column'
}));

const SocialMedia = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginTop: theme.spacing(2),
  gap: theme.spacing(4),
}));


const SocialImg = styled("img")({
  color: Colors.White,
  width: "22px",
});

const FooterSocialContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column'
    }
}))

const FooterImg = styled('img')(({ theme }) => ({
    cursor: 'pointer',
    marginBottom:  theme.spacing(4)
}))

const FooterSocialTitle = styled(Typography)({
    fontSize: '14px',
    color: Colors.White,
    width: '160px'
})

const FooterQuickLink = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  width: '75%',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    marginTop: theme.spacing(4)
  }
}))

const CopyRight = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  color: Colors.White,
  fontSize: '14px',
  marginTop: theme.spacing(2)
}))

function Footer() {
  return (
    <Fragment>

      <SocialBox>

        <FooterSocialContainer>
          <Box>
            <FooterImg 
              width={60} 
              src={FooterLogo} 
              alt='footer-logo'
            />
            <FooterSocialTitle>
                216 Media Everything Media & Marketing
            </FooterSocialTitle>

            <SocialMedia>
              {iconList.map((social, index) => (
                <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
                  <SocialImg src={social.icon} />
                </a>
              ))}
            </SocialMedia>
          </Box>

          <FooterQuickLink>
              <QuickLink 
                linkObj={linkObjTeam} 
                title={'Community'}
              />

              <QuickLink 
                linkObj={linkObjAbout} 
                title={'About Us'}
              />

              <QuickLink 
                linkObj={linkObjCompany} 
                title={'Our Company'}
              />

              <CompanyInfo />
          </FooterQuickLink>
        </FooterSocialContainer>

        <CopyRight>
          CopyRight © 2023. All rights reserved
        </CopyRight>
      </SocialBox>
    </Fragment>
  );
}

export default Footer;
