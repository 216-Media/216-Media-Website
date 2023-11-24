

import {
    styled,
    Box,
    Grid,
    Typography,
    Container
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
    Notepads,
    Banner
} from '@/assets/images';

import
    PhotoAlbum
from 'react-photo-album';

import { 
    generatePhotoGrid 
}from '@/common/helpers/collageGen'

import { 
    Colors 
} from '@/common/constants';
import { Fragment } from 'react';



  
const ImageContainer = styled(Box)(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
}))

const BannerImg = styled('img')(({ theme }) => ({
    width: '100%',
    height: '40px',
    objectFit: 'cover',
    marginBottom: '-7px'
}))

const sajaClient = [
    { url: Saja_logo, width: 200, height: 200},
    { url: Coida, width: 1200, height: 700},
    { url: RMA_brand_van, width: 600, height: 400},
    
    { url: Saja_bagpack, width: 400, height: 400},
];

const senaClient = [
    { url: Sena_brand_bottle, width:600, height:800 },
    { url: Sena_bottle, width:700, height: 700 },
    { url: Sena_work_items, width:300, height: 300 }
];

const roaClient = [
    { url: ROA_flags, width: 600, height:1200 },
    { url: ROA_business_card, width:250, height:250 },
    { url: ROA_brand_pen, width:250, height:250 }
]

const SRSClient = [
   
    { url: SRS_logo, width:250, height:250 },
    { url: Website_mockup, width:600, height:1200 },
    { url: Notepads, width: 250, height:250 },
    
]

const ClientContainer = styled(Box)({
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    '&:hover .overlay': {
        opacity: 1
    }
})

const Overlay = styled(Box)({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: Colors.BlackOpac,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: Colors.White,
    opacity: 0,
    transition: 'opacity 0.3s ease',
})

const OverlayText = styled(Typography)({
    textAlign: 'center',
    padding: '10px',
});

function Work(){
    return (
        <Fragment>
            <BannerImg src={Banner}/>
            <ImageContainer>
                <ClientContainer>
                    <PhotoAlbum 
                        layout="columns"
                        columns={2}
                        spacing={2}
                        photos={generatePhotoGrid(sajaClient)}
                    />
                    <Overlay className="overlay">
                        <OverlayText
                            variant="h6"
                        >
                            Saja Client
                        </OverlayText>
                    </Overlay>
                </ClientContainer>
                
                <ClientContainer>
                    <PhotoAlbum 
                        layout="columns"
                        spacing={2}
                        columns={2}
                        photos={generatePhotoGrid(senaClient)}
                    />
                    <Overlay className="overlay">
                        <OverlayText
                            variant="h6"
                        >
                            Sena Client
                        </OverlayText>
                    </Overlay>
                </ClientContainer>
            
                <ClientContainer>
                    <PhotoAlbum 
                        layout="masonry"
                        columns={2}
                        spacing={2}
                        photos={generatePhotoGrid(roaClient)}
                    />
                    <Overlay className="overlay">
                        <OverlayText
                            variant="h6"
                        >
                            ROA Client
                        </OverlayText>
                    </Overlay>
                </ClientContainer>
                
                <ClientContainer>
                    <PhotoAlbum 
                        layout="masonry"
                        spacing={2}
                        columns={2}
                        photos={generatePhotoGrid(SRSClient)}
                    />
                    <Overlay className="overlay">
                        <OverlayText
                            variant="h6"
                        >
                            Structured Risk Solutions
                        </OverlayText>
                    </Overlay>
                </ClientContainer>
                
            </ImageContainer>
        </Fragment>
        
    )
}

export default Work;