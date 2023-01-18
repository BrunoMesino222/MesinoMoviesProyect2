import {Box, Tab, Typography} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import React, {useState} from "react";
import { MovieCarousel } from "./MovieCarousel";

export const MuiTabs = () => {
    const [value, setValue] = useState("1")
    const handleChange = (event: React.SyntheticEvent, newValue: string) =>{
        setValue(newValue)
    }
    return (
        <Box sx={{width:"100%", height:"100%" }}>
            <TabContext value={value}>
                <Box>
                    <Box sx={{ borderBottom: 1, borderColor: "divider"}}>
                        <TabList aria-label="Tabs example" onChange={handleChange} >
                            <Tab label="Movies" value="1" sx={{width:300}}/>
                            <Tab label="Shows" value="2" sx={{width:300}}/>
                        </TabList>
                    </Box>
                </Box>
                <TabPanel value="1"> 
                <Box>
                    <Typography variant="subtitle2" fontSize={35} sx={{mb:1.5, ml:2.5}}>Upcoming</Typography>
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
                </TabPanel>
                <TabPanel value="2">Shows</TabPanel>
            </TabContext>
        </Box>
    )
}