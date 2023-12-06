import { 
    Fragment 
} from "react";

import{
    styled,
    Box,
    Typography
} from '@mui/material';

import 
    NavigationBar 
from "@/common/components/NavigationBar";

import{
    HealthImg
} from '@/assets/images'

import { 
    Colors 
} from "@/common/constants";

import 
    CustomButton 
from "@/common/components/CustomButton";

import 
    CustomLoader 
from "@/common/components/CustomLoader";

const Overlay = styled('div')({
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundColor: Colors.BlackOpac,
  zIndex: 1,
})

const HealthContainer = styled(Box)(({ theme }) => ({
    backgroundImage: `url(${HealthImg})`,
    position: "relative",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "100% 80%",
    height: '100vh',
    width: "100%",
    margin: "0 auto",
    padding: theme.spacing(30, 0, 10, 0),
}))

const HealthContainerDetails = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(6),
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 2,
}))

const HealthText = styled(Typography)(({ theme }) => ({
    color: Colors.White,
    fontSize: "50px",
    marginBlock: theme.spacing(4),
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: "44px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "35px",
    },
}))

function Health(){
    return(
        <Fragment>
            <NavigationBar />
            <HealthContainer>
                <Overlay />
                
                    <HealthContainerDetails>
                        <Box position='relative' zIndex='1'>
                            <HealthText
                                variant='h1'
                                fontWeight={'bold'}
                            >
                                Coming Soon.
                            </HealthText>

                            <CustomLoader />
                        </Box>
                    </HealthContainerDetails>
                
            </HealthContainer>
        </Fragment>
    )
}

export default Health;