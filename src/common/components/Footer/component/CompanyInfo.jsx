import {
    styled,
    Box,
    Typography
} from '@mui/material';


import 
    ImportContactsIcon 
from '@mui/icons-material/ImportContacts';

import 
    PhoneIcon 
from '@mui/icons-material/Phone';

import 
    EmailIcon 
from '@mui/icons-material/Email';

import { 
    Colors 
} from '@/common/constants';

const CompanyInfoContent = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column'
}))

const AddressContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'flex-start',
    gap: theme.spacing(1.2),
    marginBottom: theme.spacing(1)
}))

const CompanyInfoText = styled(Typography)(({ theme }) => ({
    fontSize: '13px',
    color: Colors.ScaleGrey,
    width: '200px',
    marginBottom: theme.spacing(1)
}))

const CompanyTitle = styled(Typography)(({ theme }) => ({
    fontSize: '18px',
    color: Colors.White,
    marginBottom: theme.spacing(4)
}))

const AddressIcon = styled(ImportContactsIcon)({
    color: Colors.White,
    width: '20px'
})

const PhoneNumberIcon = styled(PhoneIcon)({
    color: Colors.White,
    width: '20px'
})

const EmailAddressIcon = styled(EmailIcon)({
    color: Colors.White,
    width: '20px'
})

function CompanyInfo(){
    return(
        <CompanyInfoContent>
            <CompanyTitle>
                Have a Questions?
            </CompanyTitle>
            
            <AddressContainer>
                <AddressIcon />
                <CompanyInfoText>
                    50 Constantia Boulevard
                    Quadrum Office Park, 
                    Johannesburg, South Africa, 1709
                </CompanyInfoText>
            </AddressContainer>

            <AddressContainer>
                <PhoneNumberIcon />
                <CompanyInfoText>
                   011 534 8409
                </CompanyInfoText>
            </AddressContainer>

            <AddressContainer>
                <EmailAddressIcon />
                <CompanyInfoText>
                   info@216.co.za
                </CompanyInfoText>
            </AddressContainer>
        </CompanyInfoContent>
    )
}

export default CompanyInfo;