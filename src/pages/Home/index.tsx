import React from "react";
import { Box} from "@mui/material";
import { MuiTabs } from "../../components/TabComponent";

export const HomePage: React.FC<{}> = () =>{
    return(
           
            <Box sx={{backgroundColor:"black" , mt:9}}>
                <MuiTabs/>
            </Box>
    );
};