import 
    ImageCollageGrid 
from '@/common/components/ImageCollageGrid';

import {
    styled,
    Box,
    Grid
} from '@mui/material';

import {
    RMA_brand_van,
    Coida,
    Saja_logo,
    Saja_bagpack,
    Sena_bottle,
    Sena_brand_bottle,
    Sena_work_items,
    ROA_brand_pen,
    ROA_business_card,
    ROA_flags,
    SRS_logo,
    Website_mockup,
    Notepads
} from '@/assets/images';



const Saja = [
    Coida,
    Saja_logo,
    RMA_brand_van,
    Saja_bagpack
];

const Sena = [
    Sena_brand_bottle,
    Sena_bottle,
    Sena_work_items,
];

const ROA = [
    ROA_flags,
    ROA_brand_pen,
    ROA_business_card,
    
];

const SRS = [
    Website_mockup,
    Notepads,
    SRS_logo
]

const imagesCollages = [
    [
      ...Saja
    ],
    [
     ...Sena
    ],
    [
      ...ROA
    ],
    [
      ...SRS
    ],
  ];
  

const WorkBanner = styled(Box)(({ theme }) => ({

}))

const WorkCollageContainer = styled(Grid)(({ theme }) => ({
    
}))
function Work(){
    return (
       
            <ImageCollageGrid images={imagesCollages}/>
        
    )
}

export default Work;