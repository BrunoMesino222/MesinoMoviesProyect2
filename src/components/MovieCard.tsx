import { Button, Card, CardActions, CardContent, CardMedia, Divider, Typography} from "@mui/material";
import { CardComponentT } from "./MovieCard.types";
import {RatingCustom} from '../components/Rating'
import { useNavigate } from "react-router-dom";
export const CardComponent = ({data}:CardComponentT) => {
    const {title, poster_path,overview, vote_average, genre_ids, id} = data;
    const navigate = useNavigate()
    return(
        <Card sx={{ maxWidth: 130, maxHeight: 350 ,mx: 0.1, cursor: 'pointer'}} onClick={()=>navigate(`./detail/${id}`)} >
            <CardMedia
                sx={{objectFit: "cover"}}
                component="img"
                height="55%"
                width="100%"
                image={ `https://image.tmdb.org/t/p/w500/${poster_path}`}/>
            <CardContent sx={{width:130}}>
                <Typography variant="subtitle2" sx={{mt:0.1}}>{title}</Typography>
                <Divider/>
                {genre_ids && <Typography variant="subtitle2" sx={{mt:0.1}}>{genre_ids[0]}</Typography>}
                
            </CardContent>
            <RatingCustom movie_id={id || 0} />
        </Card>
    )
} 