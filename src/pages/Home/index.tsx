import React, {useState} from "react";
import { MovieCarousel } from "../../components/MovieCarousel";
import { Box } from "@mui/material";
export const HomePage: React.FC<{}> = () =>{
    return(
            <Box sx={{display: 'grid', gridTemplateRows: 'repeat(3, 1fr)', rowGap: 3, mt:8}}>
                <Box sx={{width:"100%"}}>
                    <MovieCarousel target='upcoming'/>
                </Box>

                <Box>
                    <MovieCarousel target='upcoming'/>
                </Box>
            
            </Box>
    );
};