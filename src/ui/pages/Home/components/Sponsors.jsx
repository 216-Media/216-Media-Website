import { 
    CarouselResponsive,
    Colors 
} from '@/common/constants';

import {
    Container,
    Box,
    styled,
    Typography
} from '@mui/material';

import 
    Carousel 
from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";

import {
    AfricanBank,
    AutoZone,
    Eswatini,
    FNB,
    Hollard,
    Polokwane,
    RMA,
    Sena,
    Vodacom
} from '@/assets/icons/brands';


const sponsors = [
    AfricanBank,
    AutoZone,
    Eswatini,
    FNB,
    Hollard,
    Polokwane,
    RMA,
    Sena,
    Vodacom
]
const Title = styled(Typography)(({ theme }) => ({
    color: theme.palette.mode === 'light' ? `${Colors.AZTEC}` : `${Colors.White}`,
    fontWeight: 'bold',
    fontSize: '26px',
    textAlign: 'center'
}))

const SponsorImg = styled('img')({
    width: '100px',
    height: '100px',
    objectFit: 'contain'
})

const SponsorContainer = styled(Box)(({ theme }) => ({
    padding: theme.spacing(6, 0),
}))


function Sponsors(){
    return(
        <SponsorContainer>
            <Title>Trusted by</Title>
            <Carousel
                responsive={
                    CarouselResponsive
                }
            >
                {sponsors.map((sponsor, index) => (
                    <SponsorImg key={index} src={sponsor}/>
                ))}
                
            </Carousel>
        </SponsorContainer>
    )
}

export default Sponsors;