import {
    styled,
    Box,
    Typography,
    Container
} from '@mui/material';

import { 
    Colors, industries 
} from '@/common/constants';

import 
    CustomButton 
from '@/common/components/CustomButton';

import { 
    Fragment 
} from 'react';

import {
    Link
} from 'react-router-dom';

import 
    ArrowOutwardIcon 
from '@mui/icons-material/ArrowOutward';

import 
    DownArrowAnimation 
from '@/common/components/DownArrowAnimation';

import 
    CardValues 
from '@/common/components/CardValue';

import {
    HelpImg
} from '@/assets/images'



const ServiceContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    textAlign: 'left',
    alignItems: 'left',
    position: 'relative',
    paddingTop: theme.spacing(6),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
        alignItems: 'center'
    }
}))

const ServiceTitleContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    
}))
const ServiceTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.mode === 'light' ? `${Colors.AZTEC}` : `${Colors.White}`,
    fontSize: '26px',
    fontWeight: 'bold',
    marginBlock: theme.spacing(3)
}))


const ServiceDescription = styled(Typography)(({ theme }) => ({
    color: Colors.AZTEC,
    fontWeight: '400',
    fontSize: '17px',
    maxWidth: '620px',
    margin: theme.spacing(4, 0)
}))

const ServiceBackgroundBox = styled(Box)(({ theme }) => ({
    backgroundColor: Colors.SkyBlue,
    padding: theme.spacing(3)
}))

const AssistImg = styled('img')({
    width: '25%',
    position: 'absolute',
    right: 0
})
function Services(){
    return(
        <Fragment>
            <ServiceBackgroundBox>
                <ServiceContainer>
                    <Box>
                        <ServiceTitleContainer>
                            <ServiceTitle>
                                Who we help.
                            </ServiceTitle>
                            <DownArrowAnimation />
                        </ServiceTitleContainer>
                        <ServiceDescription>
                            Our commitment extends beyond our products or services it's about making a meaningful
                            impact on the lives of those we serve. We dedicate ourselves to supporting 
                            a diverse range of individuals and organizations
                        </ServiceDescription>


                        <Link
                            style={{
                                textDecoration: 'none' 
                            }}
                            to='/services'
                        >
                            <CustomButton 
                                arrowDirection={<ArrowOutwardIcon />} 
                                buttonText={'VIEW SERVICES'}
                                textColor={Colors.AZTEC}
                                borderColor={Colors.AZTEC}
                                backgroundColor={Colors.White}
                            />
                        </Link>
                    </Box>
                    
                </ServiceContainer>
            </ServiceBackgroundBox>
            
        </Fragment>
    )
};

export default Services;