import {
    styled
} from '@mui/material'
import { Colors } from '../constants'


const CustomScrollBar = styled('div')({
    height: '300px',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
        width: '12px'
    },
    '&::-webkit-scrollbar-track': {
        background: Colors.Grey
    },
    '&::-webkit-scrollbar-thumb': {
        background: Colors.HollywoodCerise,
        borderRadius: '6px'
    }
})

function ScrollBar(){
    <CustomScrollBar>
    
    </CustomScrollBar>
}

export default ScrollBar;