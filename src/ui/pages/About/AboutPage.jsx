import { Fragment } from "react";

import { styled, Typography, Box } from "@mui/material";

import NavigationBar from "@/common/components/NavigationBar";

import ServicePatternImg from "@/assets/icons/service-patterns.png";

import { ArrowDownAnimation, Colors } from "@/common/constants";

import CustomButton from "@/common/components/CustomButton";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import Footer from "@/common/components/Footer/Footer";

import EmbraceEnergy from "@/assets/images/embrace.png";

const AboutContainer = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${ServicePatternImg})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  width: "100%",
  margin: "0 auto",
  padding: theme.spacing(30, 0, 10, 0),
}));

const AboutTitle = styled(Typography)(({ theme }) => ({
  color: Colors.AZTEC,
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
}));

const AboutInfoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
}));

const EmbraceEnergyImg = styled("img")(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const InfoContainer = styled(Box)(({ theme }) => ({
  backgroundColor: Colors.HavelockBlue,
  color: Colors.White,
  padding: theme.spacing(5, 8),
  width: "100%",
}));
function AboutPage() {
  return (
    <Fragment>
      <NavigationBar />
      <AboutContainer>
        <AboutContainerDetails>
          <AboutTitle variant="h1" fontWeight={"bold"}>
            Want to learn more About Us?
          </AboutTitle>
          <CustomButton
            buttonText={"SCROLL DOWN"}
            arrowDirection={<ArrowDownwardIcon />}
            animationDirection={ArrowDownAnimation}
          />
        </AboutContainerDetails>
      </AboutContainer>

      <AboutInfoContainer>
        <InfoContainer />
        <EmbraceEnergyImg src={EmbraceEnergy} />
      </AboutInfoContainer>

      <Footer />
    </Fragment>
  );
}

export default AboutPage;
