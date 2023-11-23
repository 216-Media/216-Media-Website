import
    KeyboardArrowDownIcon
from '@mui/icons-material/KeyboardArrowDown';

import {
    keyframes
} from '@emotion/react';

import{
    styled
} from '@mui/material'

const bounceArrowDown = keyframes`
    from, 20%, 53%, 80%, to {
        transform: translate3d(0,0,0);
    }
    40%, 43% {
        transform: translate3d(0, -4px, 0);
    }

    70% {
        transform: translate3d(0, -5px, 0);
    }

    90% {
        transform: translate3d(0,-2px,0);
    }
`;

const DownArrowAnime = styled(KeyboardArrowDownIcon)({
    width: '35px',
    height: '35px',
    animation: `${bounceArrowDown} 1.8s ease infinite`
});

function DownArrowAnimation(){
    return <DownArrowAnime />
}
export default DownArrowAnimation;