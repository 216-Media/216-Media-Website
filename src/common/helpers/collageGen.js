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

const generatePhotoGrid = (photos) => {
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
        };
      }),
    }));
    return photoGridGenerator;
  };


export { 
    generatePhotoGrid 
}
