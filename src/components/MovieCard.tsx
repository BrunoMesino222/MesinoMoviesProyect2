import { Box, Card, CardActions, CardContent, CardMedia, Divider, Typography} from "@mui/material";
import { CardComponentT } from "./MovieCard.types";
import {RatingCustom} from '../components/Rating'
export const CardComponent = ({data}:CardComponentT) => {
    const {title, poster_path,overview, vote_average, genre_ids, id} = data;

    return(
        <Card sx={{ Width: 130, Height: 350 ,mx: 0.5, borderRadius:1.5, borderColor:"error.main", border:0.2}}>
            <CardMedia
                sx={{objectFit: "cover"}}
                component="img"
                height="55%"
                width="100%"
                image={ `https://image.tmdb.org/t/p/w500/${poster_path}`}/>
            <CardContent sx={{width:130, display:"flex" ,flexDirection:"column"}}>
            <Box sx={{height:80}}>
                <Typography variant="subtitle2" sx={{fontSize:13}}>{title}</Typography>
            </Box>
            <Box sx={{display:"flex", flexDirection:"column"}}>
                {genre_ids && <Typography  variant="subtitle2" sx={{fontSize:12, mb:0.5}}>{genre_ids[0]}</Typography>}
                    <Box sx={{display:"flex", justifyContent:"center" }}>
                        <RatingCustom movie_id={id || 0} />
                    </Box>
            </Box>
            </CardContent>
            

        </Card>
    )
} 