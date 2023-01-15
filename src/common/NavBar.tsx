import React, { useState } from "react";
import {Box, AppBar, Toolbar, Grid, Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import { general } from "../api/common/general.service";
import { asyncResponse, deleteSessionIdResponse, sessionIdResponse } from "../api/common/general.types";
import { useStore } from "../store";
import { ButtonSessionContent } from "../components/content/ButtonSessionContent";
import LogoutIcon from '@mui/icons-material/Logout';
import Button from "@mui/material/Button";
export const NavBar: React.FC<{}> = ( ) =>{
    const { sessionId,setSession } = useStore()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [sessionAttemptStatus, setSessionAttemptStatus] = useState<'success' | 'failure'>()



    function initiateSession(){
        if (!sessionId?.guest_session_id){
            setIsLoading(true)
            general.getSessionId().then((r:asyncResponse<sessionIdResponse>)=>{
                if (r?.data?.success){
                    setSessionAttemptStatus('success')
                    const { guest_session_id, expires_at } = r?.data
                    setSession(guest_session_id, expires_at)
                } else{
                    setSessionAttemptStatus('failure')
                    setSession("","")
                }
            }).catch((e:unknown)=>{
                console.error(e)
                setSessionAttemptStatus('failure')
                setSession("","")
            }).finally(
                ()=>setIsLoading(false)
            )
        }

    }

    function deleteSession(){
        setIsLoading(true)
        general.closeSessionId(sessionId.guest_session_id).then((r:asyncResponse<deleteSessionIdResponse>)=>{
            if (r?.data?.success){
                setSession("", "")
            } else{
                setSession("","")
            }
        }).catch((e:unknown)=>{
            console.error(e)
            setSessionAttemptStatus(undefined)
            setSession("","")
        }).finally(
            ()=>setIsLoading(false)
        )
    }
    

    return(
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="fixed">
                <Toolbar>
                    <Container maxWidth="xl">
                        <Grid 
                        container
                        direction="row" 
                        justifyContent="space-between"
                        alignItems="center"
                        >
                            <Grid item>
                                <Typography>asdasd</Typography>
                            </Grid>
                            <Grid item>
                                <Stack direction="row" spacing={2}>
                                    <ButtonSessionContent onClick={initiateSession} isLoading={isLoading} status={sessionAttemptStatus}/>
                                    {sessionId?.guest_session_id && <Button onClick={()=>deleteSession()}><LogoutIcon /></Button>}
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    )
}