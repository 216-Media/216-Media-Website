
import {
    Fragment,
    useState,
    useEffect
} from 'react';

import {
    IconButton,
    styled,
    Box
} from '@mui/material';

import 
    KeyboardArrowUpIcon 
from '@mui/icons-material/KeyboardArrowUp';
import { Colors } from '@/common/constants';

const ScrollToTopBtn = styled(IconButton)(({ theme }) => ({
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 100
}))

const ScrollToTopBtnContainer = styled(Box)(({ theme }) => ({
    backgroundColor: Colors.HollywoodCerise,
    borderRadius: '50%',
    padding: theme.spacing(2)
}))

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            }else{
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <Fragment>
            { isVisible && (
                <ScrollToTopBtn 
                    onClick={scrollToTop}
                    color='secondary'
                    variant='contained'
                    aria-label='Scroll to top'
                >
                    <KeyboardArrowUpIcon />
                </ScrollToTopBtn>
            )}
        </Fragment>
        
    )
}

export default ScrollToTopButton;