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
    fontSize: '20px',
    color: Colors.White,
    marginBottom: theme.spacing(4)
}))

const QuickLinkContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column'
})

const ActualLink = styled(Link)(({ theme }) => ({
    color: Colors.Grey,
    textDecoration: 'none',
    marginBottom: theme.spacing(1)
}))

function QuickLink({ title, linkObj }){
    return(
        <QuickLinkContainer>
            <QuickLinkTitle>{title}</QuickLinkTitle>
            {linkObj.map((link, index) => (
                <ActualLink key={index}>
                    {link}
                </ActualLink>
            ))}
        </QuickLinkContainer>
    );
}

export default QuickLink;