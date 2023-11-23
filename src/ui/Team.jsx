import { 
    Colors, TeamItems 
} from '@/common/constants';

import{
    styled,
    Container,
    Typography,
    Box
} from '@mui/material';

import
    TeamPatternImg
from '@/assets/icons/team-pattern.png'

import 
    DownArrowAnimation 
from '@/common/components/DownArrowAnimation';

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
            </TeamContainer>
        </TeamPatternContainer>
    )
}

export default Team;