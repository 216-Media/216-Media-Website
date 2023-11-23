import { 
    Colors, TeamItems, TeamMemberDetails 
} from '@/common/constants';

import{
    styled,
    Container,
    Typography,
    Box,    
    Grid
} from '@mui/material';

import
    TeamPatternImg
from '@/assets/icons/team-pattern.png'

import 
    DownArrowAnimation 
from '@/common/components/DownArrowAnimation';

import 
    TeamProfileCard 
from '@/common/components/TeamProfileCard';


const TeamContainer = styled(Container)(({ theme }) => ({
    padding: theme.spacing(6, 0, 0, 0)
}))

const Title = styled(Typography)({
    color: `${Colors.AZTEC}`,
    fontWeight: 'bold',
    fontSize: '26px',
    marginRight: '2px'
})

const TeamPatternContainer = styled(Box)(({ theme }) => ({
    backgroundImage: `url(${TeamPatternImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    margin: '0 auto'
}))


const TitleContainer = styled(Box)({
    display: 'flex',
    alignItems: 'left'
})

const HeaderContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
}))

const TeamLinkBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(5)

    
}));

const TeamLink = styled(Typography)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(3),
    fontSize: '13px',
    fontWeight: 'bold',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}))

const CardGridLayout = styled(Grid)({

})


function Team(){
    return(
        <TeamPatternContainer>
            <TeamContainer>
                <HeaderContainer>
                    <TitleContainer>
                        <Title>Our Team</Title>
                        <DownArrowAnimation />
                    </TitleContainer>

                    <TeamLinkBox>
                        {TeamItems.map((link, index) => (
                            <TeamLink key={index} variant='body2'>{link}</TeamLink>
                        ))}
                    </TeamLinkBox>
                </HeaderContainer>

                <CardGridLayout container spacing={2}>
                    {TeamMemberDetails.map((profile, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <TeamProfileCard
                             name={profile.name}
                             title={profile.title}
                             memberImg={profile.memberImg}
                             patternImg={profile.patternImg}
                             description={profile.description}
                            />
                        </Grid>
                    ))}
                </CardGridLayout>
            </TeamContainer>
        </TeamPatternContainer>
    )
}

export default Team;