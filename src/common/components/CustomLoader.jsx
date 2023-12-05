
import {
    styled
} from '@mui/material';

import { 
    Colors,
    bouncingLoader
} from '@/common/constants';

const BounceLoader = styled('div')({
    display: 'flex',
    justifyContent: 'center'
})

const BouncingCircle = styled('div')({
    width: '16px',
    height: '16px',
    margin: '3px 6px',
    borderRadius: '50%',
    opacity: '1',

    animation: `${bouncingLoader} 0.6s infinite alternate`,
    '&:nth-child(3)': {
        animationDelay: '0.4s'
    },
    '&:nth-child(2)': {
        animationDelay: '0.2s'
    }
})



function CustomLoader(){

    const BouncingCircleColor = [
        Colors.AZTEC,
        Colors.HavelockBlue,
        Colors.Lemon,
        Colors.HollywoodCerise
    ];
    return (
        <BounceLoader>
            {BouncingCircleColor.map((color, index) => (
                <BouncingCircle key={index} style={{ backgroundColor: color }}></BouncingCircle>
            ))}
        </BounceLoader>
    )
}

export default CustomLoader;