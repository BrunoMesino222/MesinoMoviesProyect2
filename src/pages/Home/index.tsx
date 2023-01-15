import React, {useState} from "react";
import { MovieCarousel } from "../../components/MovieCarousel";
import { Box } from "@mui/material";
export const HomePage: React.FC<{}> = () =>{
    return(
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
            }}>
            <MovieCarousel target='upcoming'/>
            </Box>
    );
};