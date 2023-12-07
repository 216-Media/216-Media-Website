import { 
    Colors 
} from '@/common/constants';

import {
    styled,
    Box,
    Grid,
    Typography
} from '@mui/material';

import TeamCollab from '@/assets/icons/team-collbab.png';

import Great from '@/assets/icons/great.png';

import Handshake from '@/assets/icons/handshake.png';

function Values(){

    const values = [
        { 
            id: 1, 
            title: 'We provide great product designs', 
            icon: Great, 
            description: 'We are committed to providing flexible, reliable, and elegant products tou our clients ' 
        },
        { 
            id: 2, 
            title:'We are friendly, resourceful professionals' , 
            icon:  TeamCollab, 
            description: 'We’re a high-caliber team of friendly and resourceful professionals committed to work together to produce the best'
        },
        { 
            id: 3, 
            title: 'We go above and beyond for our clients', 
            icon: Handshake, 
            description: 'We are committed to going above and beyond for our clients' 
        }
    ];

    const ValueCardContainer = styled(Box)(({ theme }) => ({
        paddingBlock: theme.spacing(4)
    }))

    const ValueCard = styled(Box)(({ theme }) => ({
        padding: theme.spacing(4, 2),
    }))

    const ValueIcon = styled('img')(({ theme }) => ({
        width: '50px',
        marginBottom: theme.spacing(4)
    }))

    const ValueTitle = styled(Typography)({
        fontSize: '20px',
        color: Colors.AZTEC,
    })

    const ValueDescription = styled(Typography)(({ theme }) => ({
        fontSize: '17px',
        color: Colors.ScaleGrey,
        marginTop: theme.spacing(2)
    }))

    return(
        <ValueCardContainer>
            <Grid
             container
             spacing={3}
             justifyContent={'center'}
            >
                {values.map((value) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        key={value.id}
                    >
                        <ValueCard>
                            <ValueIcon src={value.icon}/>
                            <ValueTitle
                                fontWeight={'bold'}
                            >{value.title}</ValueTitle>
                            <ValueDescription>{value.description}</ValueDescription>
                        </ValueCard>
                    </Grid>
                ))}
            </Grid>
        </ValueCardContainer>
    )
}

export default Values;