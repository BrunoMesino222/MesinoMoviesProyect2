import React, {useState} from "react";
import { MovieCarousel } from "../../components/MovieCarousel";
import { Box, Typography} from "@mui/material";
export const HomePage: React.FC<{}> = () =>{
    return(
            <Box sx={{backgroundColor:"black" ,display: 'grid', gridTemplateRows: 'repeat(3, 1fr)', rowGap: 3, mt:8}}>
                <Box>
                    <Typography variant="subtitle2" fontSize={35} sx={{mb:1.5, ml:2.5, borderTop:5}}>Upcoming</Typography>
                    <MovieCarousel target='upcoming'/>
                </Box>

                <Box>
                    <Typography variant="subtitle2" fontSize={35} sx={{mb:1.5, ml:2.5, borderTop:3, borderColor:"black"}}>Popular</Typography>
                    <MovieCarousel target='popular'/>
                </Box>

                <Box>
                    <Typography variant="subtitle2" fontSize={35} sx={{mb:1.5, ml:2.5, borderTop:3, borderColor:"black"}}>Top rated</Typography>
                    <MovieCarousel target='top_rated'/>
                </Box>
            
            </Box>
    );
};