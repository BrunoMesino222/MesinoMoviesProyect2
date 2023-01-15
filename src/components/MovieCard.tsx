import { Button, Card, CardActions, CardContent, CardMedia, Divider, Typography} from "@mui/material";
import { CardComponentT } from "./MovieCard.types";
import {RatingCustom} from '../components/Rating'
export const CardComponent = ({data}:CardComponentT) => {
    const {title, poster_path,overview, vote_average, genre_ids, id} = data;
    return(
        <Card sx={{ maxWidth: 220 }}>
            <CardMedia
                component="img"
                height="200"
                image={ `https://image.tmdb.org/t/p/w500/${poster_path}`}/>
            <CardContent>
                <Typography variant="h6" sx={{mt:1}}>{title}</Typography>
                <Divider/>
                {genre_ids && <Typography sx={{mt:0.5}}>{genre_ids[0]}</Typography>}
                <Typography sx={{mt:0.5}}>Description:</Typography> 
            </CardContent>
            <CardActions>
                <Button fullWidth variant="contained" size="small"></Button>
            </CardActions>
            <RatingCustom movie_id={id || 0}/>
        </Card>
    )
} 