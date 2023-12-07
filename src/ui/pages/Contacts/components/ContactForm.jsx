import {
    useState
} from 'react';

import{
    useForm,
    ValidationError
} from '@formspree/react'

import{
    styled,
    Box,
    Select,
    TextField,
    MenuItem,
    InputLabel,
    FormControl,
    Alert,
    Typography
} from '@mui/material';

import { 
    Colors 
} from '@/common/constants';

import 
    CustomButton 
from '@/common/components/CustomButton';
import CustomLoader from '@/common/components/CustomLoader';

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

    const [state, handleSubmit] = useForm('mpzgvqzw');
    const [loading, setLoading] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const submitForm = async (e) => {
        e.preventDefault();
        setLoading(true)
        await handleSubmit(e)
        setLoading(false);

        if (state.succeeded) {
            setFormSubmitted(true);
        }
    }

    return(
        <ContactFormContainer>
            {
                formSubmitted ? 
                    <Alert severity='success'>
                        Thank you for contacting us we will reach out to you soon.
                    </Alert> 
                 
                : 
                <form
                    onSubmit={submitForm}
                >
                    <Box>
                        <ContactFormField
                            id='name'
                            name='name'
                            type='text'
                            label='Name'
                            variant='standard'
                        />
                        <ValidationError 
                        prefix='Name' 
                        field='name' 
                        errors={state.errors} 
                        />
                        <ContactFormField
                            id='email'
                            name='email'
                            variant='standard'
                            label='Email'
                            type='email'
                        />
                        <ValidationError 
                        prefix='Email' 
                        field='email' 
                        errors={state.errors} 
                        />
                    </Box>
                    <FormControlField variant='standard'>
                        <InputLabel>Area of Interest</InputLabel>
                        <ContactFormSelect
                            id='Area of Interest'
                            name='Area of Interest'
                            value={areaOfInterest}
                            label='Area of Interest'
                            onChange={(e) => setAreaOfInterest(e.target.value)}
                        >
                            <MenuItem value={'Digital Marketing'}>Digital Marketing</MenuItem>
                            <MenuItem value={'Branding'}>Branding</MenuItem>
                            <MenuItem value={'Design'}>Design</MenuItem>
                            <MenuItem value={'Interior Design'}>Interior Design</MenuItem>
                            <MenuItem value={'Web Development'}>Web Development</MenuItem>
                            <MenuItem value={'Trend Insight Strategy'}>Trend Insight Strategy</MenuItem>
                        </ContactFormSelect>
                    
                    </FormControlField>

                    <ContactFormMessage
                        id='message'
                        name='message'
                        label='Message'
                        variant='standard'
                        multiline
                        rows={4}
                        type='text'
                    />

                    {
                        loading ? <CustomLoader /> :
                        <CustomButton 
                            buttonText={'SEND MESSAGE'}
                            textColor={Colors.AZTEC}
                            borderColor={Colors.AZTEC}
                            type={'submit'}
                            disabled={state.submitting}
                        />
                    }
                </form>
            }
            
        </ContactFormContainer>
    );
}

export default ContactForm;