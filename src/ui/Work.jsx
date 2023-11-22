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

import
    PhotoAlbum
from 'react-photo-album';

import
    photoGridGenerator
from '@/common/helpers/collageGen'

const Saja = [
    
    Saja_bagpack,
    RMA_brand_van,
    Saja_logo,
    Coida,
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
  
const ImageContainer = styled(Box)(({ theme }) => ({

}))


function Work(){
    return (
        <ImageContainer>
            <PhotoAlbum 
                layout="rows"
                spacing={2}
                photos={photoGridGenerator}
            />
        </ImageContainer>
       

        // <ImageCollageGrid images={imagesCollages}/>
    )
}

export default Work;