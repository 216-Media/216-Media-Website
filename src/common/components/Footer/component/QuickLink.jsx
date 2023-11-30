import { 
    Colors 
} from '@/common/constants';

import{
    styled,
    Typography,
    Box
} from '@mui/material';

import{
    Link
} from 'react-router-dom';

const QuickLinkTitle = styled(Typography)(({ theme }) => ({
    fontSize: '14px',
    color: Colors.White,
    paddingBottom: theme.spacing(5)
}))

const QuickLinkContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column'
})

const QuickLink = styled(Link)({
    color: Colors.Concrete,
})

function QuickLink({title, link}){
    return(
        <QuickLinkContainer>
            <QuickLinkTitle>{title}</QuickLinkTitle>
            <QuickLink>{link}</QuickLink>
        </QuickLinkContainer>
    )
}

export default QuickLink;