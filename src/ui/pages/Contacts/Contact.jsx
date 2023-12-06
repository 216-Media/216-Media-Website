import { Fragment } from "react";

import { 
  styled, 
  Box, 
  Typography 
} from "@mui/material";

import { ArrowDownAnimation, Colors } from "@/common/constants";

import NavigationBar from "@/common/components/NavigationBar";

import { 
  ContactUsImg 
} from "@/assets/images";

import 
  ScrollTrigger 
from "@/common/components/ScrollTrigger";

import 
  ContactForm 
from "@/ui/pages/Contacts/components/ContactForm";

import 
  Footer 
from "@/common/components/Footer/Footer";

const Overlay = styled("div")({
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundColor: Colors.BlackOpac,
  zIndex: 1,
});

const ContactContainer = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${ContactUsImg})`,
  position: "relative",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "100% 80%",
  height: '100vh',
  width: "100%",
  margin: "0 auto",
  padding: theme.spacing(30, 0, 10, 0),
}));

const ContactTitle = styled(Typography)(({ theme }) => ({
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

const ContactContainerDetails = styled(Box)(({ theme }) => ({
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

const ContactBoxForm = styled(Box)(({ theme }) => ({
  paddingBlock: theme.spacing(12),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const ContactFormTitle = styled(Typography)({
  textAlign: "center",
  fontSize: "32px",
});

const ContactFormDescription = styled(Typography)({
  textAlign: "center",
  fontSize: "16px",
  paddingTop: "33px",
  width: "490px",
  color: Colors.ScaleGrey,
});

function Contact() {
  return (
    <Fragment>
      <NavigationBar />

      <ContactContainer>
        <Overlay />
        <ContactContainerDetails>
          <Box position="relative" zIndex="1">
            <ContactTitle variant="h1" fontWeight={"bold"}>
              Chat to Us
            </ContactTitle>

            <ScrollTrigger />
          </Box>
        </ContactContainerDetails>
      </ContactContainer>

      <ContactBoxForm>
        <ContactFormTitle variant="h2" fontWeight={"bold"}>
          HAVE A PROJECT?
        </ContactFormTitle>
        <ContactFormDescription>
          Please complete the below form to contact us and we’ll make sure the
          right team member gets back to you
        </ContactFormDescription>

        <ContactForm />
      </ContactBoxForm>

      <Footer />
    </Fragment>
  );
}

export default Contact;
