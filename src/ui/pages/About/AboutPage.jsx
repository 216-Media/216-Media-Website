import { Fragment } from "react";

import { styled, Typography, Box, Container } from "@mui/material";

import NavigationBar from "@/common/components/NavigationBar";

import ServicePatternImg from "@/assets/icons/service-patterns.png";

import { ArrowDownAnimation, Colors } from "@/common/constants";

import CustomButton from "@/common/components/CustomButton";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import Footer from "@/common/components/Footer/Footer";

import ScrollTrigger from "@/common/components/ScrollTrigger";

import {
  AboutImg
} from '@/assets/images';
import GetStarted from "@/common/components/GetStarted";

const AboutContainer = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${AboutImg})`,
  backgroundSize: 'cover',
  position: 'relative',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  backgroundPosition: '100% 80%',
  margin: '0 auto',
  height: '100vh',
  padding: theme.spacing(30, 0, 10, 0),
}));

const AboutTitle = styled(Typography)(({ theme }) => ({
  color: Colors.White,
  fontSize: "50px",
  marginBlock: theme.spacing(3),
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    fontSize: "44px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "35px",
  },
}));

const AboutContainerDetails = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 2,
}));

const AboutInfoContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: 'column',
  width: "100%",
  paddingBlock: theme.spacing(5)
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

const InfoContainer = styled(Box)(({ theme }) => ({
  backgroundColor: Colors.HavelockBlue,
  color: Colors.White,
  padding: theme.spacing(5, 8),
  width: "100%",
}));

const AboutInfoTitle = styled(Typography)(({ theme }) => ({
  fontSize: '35px',
  color: Colors.AZTEC,
  textAlign: 'center',
  paddingBottom: theme.spacing(3)
}))

const AboutInfoDescription = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  textAlign: 'center',
  color: Colors.ScaleGrey
}))
function AboutPage() {
  return (
    <Fragment>
      <NavigationBar />

      <AboutContainer>
        <Overlay />
        <AboutContainerDetails>
          <Box position='relative' zIndex='1'>
            <AboutTitle 
              variant="h1" 
              fontWeight={"bold"}
            >
              Want to learn more About Us?
            </AboutTitle>

            <ScrollTrigger />
          </Box>
         

        </AboutContainerDetails>
      </AboutContainer>

      <AboutInfoContainer>
        <AboutInfoTitle 
         variant='h1'
         fontWeight={'bold'}
        > 
          Where Are we coming from.
        </AboutInfoTitle>

        <AboutInfoDescription>
          Established in January of 2018, a level 1 BEE accredited organisation, 216 Media
          achieved early success in the field of Brand Communications, Event Management, Marketing Strategy, and Project
          and Programme Management services. Our early go to market strategy was aimed at providing solutions to clients such as Insurances, 
          Bankers and Retailers
        
        </AboutInfoDescription>
      </AboutInfoContainer>

      <GetStarted />

      <Footer />
    </Fragment>
  );
}

export default AboutPage;
