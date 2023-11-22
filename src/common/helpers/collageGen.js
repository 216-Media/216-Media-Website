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
import { Saja_brand_bagpack } from '@/assets/images/index';

const breakpoints = [
    1080, 
    640,
    384,
    256,
    128,
    96,
    64,
    48
];

const photos = [
    { url: Saja_logo, width: 400, height: 400},
    { url: RMA_brand_van, width: 700, height: 600},
    { url: Coida, width: 1000, height: 600},
    { url: Saja_bagpack, width: 750, height: 600},
]

const photoGridGenerator = photos.map((photo) => ({
    src: photo.url,
    width: photo.width,
    height: photo.height,
    srcSet: breakpoints.map((breakpoint) => {
        const height = Math.round((photo.height / photo.width) * breakpoint);

        return {
            src: photo.url,
            width: breakpoint,
            height
        }
    })
}))

export default photoGridGenerator;
