import {
    styled,
    Box,
    Typography,
    Divider,
    Container
} from '@mui/material';

import
    ServicePatternImg
from '@/assets/icons/service-patterns.png';

import { 
    Colors 
} from '@/common/constants';

import 
    HorizontalRuleIcon 
from '@mui/icons-material/HorizontalRule';

import 
    CustomButton 
from '@/common/components/CustomButton';

import { Fragment } from 'react';


const ServiceContainer = styled(Box)(({ theme }) => ({
    backgroundImage: `url(${ServicePatternImg})`,
    backgroundSize: '100% 120%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    padding: theme.spacing(30, 0, 20, 0),
}))

const TitleContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    
}))
const Title = styled(Typography)(({ theme }) => ({
    color: `${Colors.AZTEC}`,
    fontSize: '26px',
    fontWeight: 'bold',
    marginTop: theme.spacing(13)
}))

const HorizontalLine = styled(HorizontalRuleIcon)(({ theme }) => ({
    marginBlock: theme.spacing(2),
    width: '90px'
}))

function Services(){

    return(
        <Fragment>
            <ServiceContainer>
                <TitleContainer>
                    <Title>
                        The great services we offer are
                    </Title>
                <HorizontalLine />
                <CustomButton buttonText={'LEARN MORE'}/>
                </TitleContainer>
            </ServiceContainer>
        </Fragment>
    )
};

export default Services;