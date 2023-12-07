import { 
    Colors 
} from '@/common/constants';

import {
    styled,
    Box,
    Grid,
    Typography
} from '@mui/material';



function CardValues({values}){

    const ValueCardContainer = styled(Box)(({ theme }) => ({
        paddingBlock: theme.spacing(4)
    }))

    const ValueCard = styled(Box)(({ theme }) => ({
        padding: theme.spacing(4, 2),
    }))

    const ValueIcon = styled('img')(({ theme }) => ({
        width: '50px',
        marginBottom: theme.spacing(4)
    }))

    const ValueTitle = styled(Typography)({
        fontSize: '20px',
        color: Colors.AZTEC,
    })

    const ValueDescription = styled(Typography)(({ theme }) => ({
        fontSize: '17px',
        color: Colors.ScaleGrey,
        marginTop: theme.spacing(2)
    }))

    return(
        <ValueCardContainer>
            <Grid
             container
             spacing={3}
             justifyContent={'center'}
            >
                {values.map((value) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        key={value.id}
                    >
                        <ValueCard>
                            <ValueIcon src={value.icon}/>
                            <ValueTitle
                                fontWeight={'bold'}
                            >{value.title}</ValueTitle>
                            <ValueDescription>
                                {value.description}
                            </ValueDescription>
                        </ValueCard>
                    </Grid>
                ))}
            </Grid>
        </ValueCardContainer>
    )
}

export default CardValues;