import{
    RMA_brand_car,
    FNBInteriorImg,
    ROALetterImg,
    BlankPageCard
} from '@/assets/images';

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

import { 
    Fragment 
} from 'react';



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
    width: '400px', 
    objectFit: 'contain'
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


function WorkItem(){

    const isSmallerScreen = useMediaQuery((theme) => theme.breakpoints.down('md')); 

    const workItems = [
        {
            id: 1, 
            workTitle: 'Brand Refresh', 
            workImage: ROALetterImg, 
            client: 'Racehorse Owners Association (ROA)', 
            description: 'Our team  aimed to better engage racehorse owners and enthusiasts, aligning ROA with current industry trends while preserving its esteemed heritage.'
        },
        {
            id: 2,
            workTitle: 'Brand Refresh',
            workImage: BlankPageCard,
            client: 'Blank Page Production (BPP)',
            description: "Our team dedicated extensive efforts towards revitalizing and modernizing BPP's visual identity and messaging elements."
        },
        {
            id: 3,
            workTitle: 'Interior Design',
            workImage: FNBInteriorImg,
            client: 'FNB Stadium',
            description: "216 Media collaborated with FNB Stadium to reimagine and revamp the interior spaces within their premises."
        },
        {
            id: 4,
            workTitle: 'Vehicle Brand',
            workImage: RMA_brand_car,
            client: 'Rand Mutual Assurance (RMA)',
            description: "We spearheaded impactful vehicle branding initiatives, ensuring RMA's and their partners message reached diverse audiences."
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

                        
                        
                    </WorkItemDetailsContainer>
                </WorkItemContainer>
            ))}
        </Fragment>
    )
}

export default WorkItem;