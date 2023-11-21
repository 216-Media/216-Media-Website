import{
    Button,
    styled
} from '@mui/material';

import { 
    Colors 
} from '@/common/constants';

import
    ArrowRightImg
from '@/assets/icons/right-arrow.png';

function CustomButton({buttonText }){
    const CustomButton = styled(Button)(({ theme }) => ({
        backgroundColor: `${Colors.White}`,
        color: `${Colors.AZTEC}`,
        cursor: 'pointer',
        display: 'flex',
        gap: theme.spacing(2),
        borderRadius: '50px',
        padding: theme.spacing(1, 1),
        border: '2px solid ' + `${Colors.AZTEC}`,
        width: '170px'
    }))

    const ArrowRight = styled('img')(({ theme }) => ({
        width: '18px'
    }));

    return (
        <CustomButton>
            {buttonText}
            <ArrowRight src={ArrowRightImg}/>
        </CustomButton>
    )
}
export default CustomButton;
