import {
    useState
} from 'react';

import{
    styled,
    Box,
    Select,
    TextField,
    MenuItem,
    InputLabel,
    FormControl
} from '@mui/material';

import { 
    Colors 
} from '@/common/constants';

import 
    CustomButton 
from '@/common/components/CustomButton';

const ContactFormContainer = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2, 6),
    backgroundColor: Colors.Concrete,
    borderRadius: '9px',
    marginTop: theme.spacing(4)
}))

const ContactFormField = styled(TextField)(({ theme }) => ({
    paddingRight: theme.spacing(2)
}))

const ContactFormSelect = styled(Select)(({ theme }) => ({

}))

const FormControlField = styled(FormControl)(({ theme }) => ({
    marginBlock: theme.spacing(4),
    width: '100%'
}))

const ContactFormMessage = styled(TextField)(({ theme }) => ({
    width: '100%',
    marginBottom: theme.spacing(7)
}))
function ContactForm(){

    const [
        areaOfInterest,
        setAreaOfInterest
    ] = useState('');

    return(
        <ContactFormContainer>
            <form>
                <Box>
                    <ContactFormField 
                        name='name'
                        label='Name'
                        variant='standard'
                    />
                    <ContactFormField
                        name='email'
                        variant='standard'
                        label='email'
                    />
                </Box>
                <FormControlField variant='standard'>
                    <InputLabel>Area of Interest</InputLabel>
                    <ContactFormSelect
                        name='Area of Interest'
                        value={areaOfInterest}
                        label='Area of Interest'
                        onChange={(e) => setAreaOfInterest(e.target.value)}
                    >
                        <MenuItem value={10}>Digital Marketing</MenuItem>
                        <MenuItem value={20}>Branding</MenuItem>
                        <MenuItem value={30}>Design</MenuItem>
                        <MenuItem value={30}>Trend Insight Strategy</MenuItem>
                    </ContactFormSelect>
                
                </FormControlField>

                <ContactFormMessage
                    name='message'
                    label='message'
                    variant='standard'
                />

                <CustomButton 
                    buttonText={'SEND MESSAGE'}
                />
            </form>
        </ContactFormContainer>
    );
}

export default ContactForm;