import { Colors } from '@/common/constants';
import { 
    Grid, 
    Paper, 
    Typography,
    styled,
    Container,
    Box
} from '@mui/material';

import 
    Branding 
from '@/assets/icons/branding.png';

import 
    Vector
from '@/assets/icons/vector.png';

import 
    Marketing
from '@/assets/icons/social-media.png';

import
    Interior
from '@/assets/icons/interior-design.png';

import
    Strategy
from '@/assets/icons/strategy.png';

import 
    WebDev
from '@/assets/icons/web-programming.png'


const ServiceCardContainer = styled(Container)(({ theme }) => ({
    paddingBlock: theme.spacing(4)
}))

const ServiceCardTitleContainer = styled('div')({
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  });

const ServiceIcon = styled('img')(({ theme }) => ({
    width: '50px',
    marginBottom: theme.spacing(4),
    '& svg path:nth-child(1)': {
        fill: Colors.HollywoodCerise, 
      },
      '& svg path:nth-child(2)': {
        fill: '#00FF00',
      },
}))

const ServiceTile = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    textAlign: 'center',
    transition: 'transform 0.3s ease-in-out',
    '&:hover':{
        transform: 'scale(1.05)',
        cursor: 'pointer'
    }
}))

const ServiceCardTitle = styled(Typography)(({ theme }) => ({
    fontSize: '16px',
    color: Colors.SmokyGrape,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
}))

const ServiceCardDescription = styled(Typography)(({ theme }) => ({
    fontSize: '14px',
    color: Colors.SmokyGrape,
    marginTop: theme.spacing(2)
}))
function ServiceCards(){
    const services = [
        { id: 1, title: 'Web Development', icon: WebDev, description: 'Building responsive stunning websites' },
        { id: 2, title: 'Design', icon: Vector, description: 'Crafting awesome design layouts' },
        { id: 3, title: 'Trend Insight Strategy', icon: Strategy, description: 'Creating innovative mobile applications' },
        { id: 4, title: 'Branding', icon: Branding, description: 'Driving growth through digital strategies' }, 
        { id: 4, title: 'Marketing', icon: Marketing, description: 'Driving growth through digital strategies' },
        { id: 4, title: 'Interior Design', icon: Interior, description: 'Driving growth through digital strategies' }, 
    ];

    return(
        <ServiceCardContainer>
            <Grid
                container
                spacing={3}
                justifyContent={'center'}
            >
                {services.map((service) => (
                    <Grid item xs={12} sm={6} md={3} key={service.id}>
                        <ServiceTile
                            elevation={1}
                        >
                            <ServiceIcon src={service.icon} />


                            <ServiceCardTitleContainer>
                                <ServiceCardTitle
                                    fontWeight={'bold'}
                                >
                                    {service.title}
                                </ServiceCardTitle>
                                
                            </ServiceCardTitleContainer>
                           

                            <ServiceCardDescription>
                                {service.description}
                            </ServiceCardDescription>
                        </ServiceTile>
                    </Grid>
                ))}
            </Grid>
        </ServiceCardContainer>
    )
}

export default ServiceCards;