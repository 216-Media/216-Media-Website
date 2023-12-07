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

import Marquee from "react-fast-marquee";

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
    width: '130px',
    height: '130px',
    objectFit: 'contain',
    marginInline: '40px'
})

const SponsorContainer = styled(Box)(({ theme }) => ({
    padding: theme.spacing(6, 0),
}))

const MarqueeContainer = styled(Marquee)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}))


function Sponsors(){
    return(
        <SponsorContainer>
            <Title>Trusted by</Title>
            <MarqueeContainer
                pauseOnHover={true}
            >
                <SponsorImg src={AfricanBank}/>
                <SponsorImg src={AutoZone}/>
                <SponsorImg src={Eswatini}/>
                <SponsorImg src={FNB}/>
                <SponsorImg src={Hollard}/>
                <SponsorImg src={Polokwane}/>
                <SponsorImg src={RMA}/>
                <SponsorImg src={Sena}/>
                <SponsorImg src={Vodacom}/>
            </MarqueeContainer>
        </SponsorContainer>
    )
}

export default Sponsors;