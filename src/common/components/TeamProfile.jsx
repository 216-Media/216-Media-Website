import {
    styled,
    Box
} from '@mui/material';

import{
    Colors
} from '@/common/constants';

const CardContainer = styled(Box)(({ theme }) => ({
    padding: theme.spacing(3, 3),
    borderRadius: '5px',
    backgroundColor: Colors.AZTEC
}))

const TeamMemberImg = styled('img')(({ theme }) => ({
    position: 'relative',

}));

const PatternLayout = styled('img')(({theme}) => ({
    position: 'absolute',
}))

function TeamCard({memberImg, patternImg, name, title, description}){
    return(
        <CardContainer>

        </CardContainer>
    )
}