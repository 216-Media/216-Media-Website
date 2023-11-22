

import {
    Grid,
    Box,
    styled
} from '@mui/material';


const Image = styled('img')(({ theme }) => ({
    width: '100%',
    height: '100%',
    objectFit: 'contain'
}));

const ImageContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', 
}))

const CollageContainer = styled('div')(({ theme }) => ({
    border: '1px solid #ccc',
    marginBottom: theme.spacing(1),
}))
function ImageCollageGrid({ images }){
    return (
        <Grid container spacing={2}>
      {images.map((imagesCollage, index) => (
        <Grid key={index} item xs={12} md={6}>
          <CollageContainer>
            <ImageContainer>
              {imagesCollage.slice(0, 4).map((imageUrl, innerIndex) => (
                <Box 
                    key={innerIndex}
                    style={{
                        gridColumn: innerIndex % 2 === 0 && innerIndex < 2 ? 'span 2' : 'span 1',
                        gridRow: innerIndex < 2 ? 'span 2' : 'span 1'
                    }}
                >
                  <Image 
                   src={imageUrl} 
                   alt={`Image ${innerIndex + 1}`}
                     
                   />
                </Box>
              ))}
            </ImageContainer>
          </CollageContainer>
        </Grid>
      ))}
    </Grid>
    )
}

export default ImageCollageGrid;
