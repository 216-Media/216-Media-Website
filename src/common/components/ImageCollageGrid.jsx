

import {
    Grid,
    Box,
    styled
} from '@mui/material';
import { Colors } from '../constants';


const Image = styled('img')(({ theme }) => ({
    width: '100%',
    height: '100%',
    objectFit: 'contain'
}));

const ImageContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    overflow: 'hidden',
    width: '400px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
}))

const CollageContainer = styled('div')(({ theme }) => ({
    border: '1px solid #ccc',
    marginBottom: theme.spacing(1),
}))
function ImageCollageGrid({ images }){
  let gridRows = 'span 1';

  if (images.length === 4) {
    gridRows = 'span 2';
  }

    return (
        <Grid container spacing={2}>
        {images.map((imagesCollage, index) => (
            <Grid key={index} item xs={12} md={6}>
                <CollageContainer>
                    <ImageContainer>
                        <Box style={{ 
                            gridColumn: 'span 1', 
                            gridRow: 'span 2' 
                        }}
                        >
                            <Image src={imagesCollage[0]} alt={`Image 1`} />
                        </Box>
                        <Box>
                            <Image src={imagesCollage[1]} alt={`Image 2`} />
                        </Box>
                        <Box>
                            <Image src={imagesCollage[2]} alt={`Image 3`} />
                        </Box>
                        <Box>
                            <Image src={imagesCollage[3]} alt={`Image 3`} />
                        </Box>
                    </ImageContainer>
                </CollageContainer>
            </Grid>
        ))}
        </Grid>
    )
}

export default ImageCollageGrid;
