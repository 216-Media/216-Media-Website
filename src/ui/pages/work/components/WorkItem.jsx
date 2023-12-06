import{
    ROA_flags,
    RMA_brand_car
} from '@/assets/images';

import 
    CustomButton 
from '@/common/components/CustomButton';

import { 
    Colors 
} from '@/common/constants';

import{
    styled,
    Container,
    Typography,
    Box,
    useMediaQuery
} from '@mui/material';

import{
    Link
} from 'react-router-dom'

import { 
    Fragment 
} from 'react';

import 
    ArrowOutwardIcon 
from '@mui/icons-material/ArrowOutward';

const WorkItemContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    gap: theme.spacing(4),
    alignItems: 'center',
    paddingBlock: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column'
    }
}))

const WorkItemDetailsContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),

}))

const WorkItemProfile = styled('img')({
    width: '400px'
})

const WorkTitleText = styled(Typography)(({ theme }) => ({
    fontSize: '17px',
    color: Colors.AZTEC,
    letterSpacing: '2px',
    
}))

const WorkItemClient = styled(Typography)(({ theme }) => ({
    fontSize: '33px',
    color: Colors.AZTEC,
    width: '90%',
}))

const WorkItemDescription = styled(Typography)(({theme}) => ({
    fontSize: '17px',
    color: Colors.ScaleGrey,
    textAlign: 'left',
    maxWidth: '450px',
    paddingBottom: theme.spacing(2)
}))

const ButtonNavigator = styled(Link)({
    textDecoration: 'none'
})

function WorkItem(){

    const isSmallerScreen = useMediaQuery((theme) => theme.breakpoints.down('md')); 

    const workItems = [
        {
            id: 1, 
            workTitle: 'Brand Refresh', 
            workImage: ROA_flags, 
            client: 'Racehorse Owners Association (ROA)', 
            description: 'Our team  aimed to better engage racehorse owners and enthusiasts, aligning ROA with current industry trends while preserving its esteemed heritage.',
            link: 'https://racingassociation.co.za/'
        },
        {
            id: 2,
            workTitle: 'Brand Refresh',
            workImage: ROA_flags,
            client: 'Blank Page Production (BPP)',
            description: "Our team dedicated extensive efforts towards revitalizing and modernizing BPP's visual identity and messaging elements",
            link: ''
        },
        {
            id: 3,
            workTitle: 'Interior Design',
            workImage: ROA_flags,
            client: 'FNB Stadium',
            description: "216 Media collaborated with FNB Stadium to reimagine and revamp the interior spaces within their premises.",
            link: ''
        },
        {
            id: 4,
            workTitle: 'Vehicle Brand',
            workImage: RMA_brand_car,
            client: 'Rand Mutual Assurance (RMA)',
            description: "We spearheaded impactful vehicle branding initiatives, ensuring RMA's and their partners message reached diverse audiences.",
            link: 'https://www.randmutual.co.za/'
        }
    ];

    return(
        <Fragment>
            {workItems.map((work, index) => (
                <WorkItemContainer
                    key={index}
                    style={{ 
                        flexDirection: isSmallerScreen ? 'column' : index % 2 !== 0 ? 'row-reverse' : 'row',
                    }}
                >
                    <WorkItemProfile 
                        src={work.workImage}
                        alt='profile-img'
                    />
                    <WorkItemDetailsContainer>
                        <WorkTitleText>
                            {work.workTitle}
                        </WorkTitleText>
                        <WorkItemClient>
                            {work.client}
                        </WorkItemClient>
                        <WorkItemDescription
                            variant='p'
                        >
                            {work.description}
                        </WorkItemDescription>

                        <ButtonNavigator
                         target="_blank" 
                         rel="noopener noreferrer"
                         to={work.link}
                        >
                            <CustomButton 
                                buttonText={'View Portfolio'}
                                textColor={Colors.AZTEC}
                                borderColor={Colors.AZTEC}
                                arrowDirection={<ArrowOutwardIcon />}
                            />
                        </ButtonNavigator>
                        
                    </WorkItemDetailsContainer>
                </WorkItemContainer>
            ))}
        </Fragment>
    )
}

export default WorkItem;