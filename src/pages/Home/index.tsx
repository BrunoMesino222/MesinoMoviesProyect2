import React, {useState} from "react";
import { MovieCarousel } from "../../components/MovieCarousel";
import { Box, Typography} from "@mui/material";
export const HomePage: React.FC<{}> = () =>{
    return(
            <Box sx={{backgroundColor:"black" ,display: 'grid', gridTemplateRows: 'repeat(3, 1fr)', rowGap: 3, mt:8}}>
                <Box>
                    <Typography variant="h3" sx={{mb:1.5, ml:2.5}}>Upcoming</Typography>
                    <MovieCarousel target='upcoming'/>
                </Box>

                <Box>
                    <Typography variant="h3" sx={{mb:1.5, ml:2.5}}>Popular</Typography>
                    <MovieCarousel target='popular'/>
                </Box>

                <Box>
                    <Typography variant="h3" sx={{mb:1.5, ml:2.5}}>Top rated</Typography>
                    <MovieCarousel target='top_rated'/>
                </Box>
            
            </Box>
    );
};