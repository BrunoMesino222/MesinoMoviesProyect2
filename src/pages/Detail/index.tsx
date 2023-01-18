import React, { useState } from 'react'
import { Grid, Box, Typography, CardMedia } from '@mui/material'
import { useParams } from 'react-router-dom'
import { general, logged } from '../../api/common/general.service'
import { DetailT } from './detail.types'
import FavoriteIcon from '@mui/icons-material/Favorite';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import PaidIcon from '@mui/icons-material/Paid';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { useStore } from '../../store'
import imbdLogo from './imbdlogo.svg'
import Card from '@mui/material/Card'
import LanguageIcon from '@mui/icons-material/Language';
import { Stack } from '@mui/system'

export const Detail = () => {
    const { movieId, target } = useParams()
    const { sessionId } = useStore()
    const [data, setData] = useState<DetailT>()
    const [isFavorite, setIsFavorite] = useState<boolean>(false)
    const [isWatchlist, setIsWatchlist] = useState<boolean>(false)
    React.useEffect(()=>{
        if ( movieId ){
            general.getById(target ,movieId).then((r:any)=>{
                console.log(r.data)
                setData(r.data)
                setIsFavorite(false)
            }).catch((e:any)=>{
                console.error(e)
            })
        }
    },[])
    const saveToFavorites = () => {
        setIsFavorite(!isFavorite)
        logged.saveToFavorite(sessionId?.guest_session_id).then((r:any)=>{
            console.log(r.data)
        }).catch((e:any)=>{
            console.error(e)
        })
    }
    const saveToWatchlist = () => {
        setIsWatchlist(!isWatchlist)
        logged.addToWatchlist(sessionId?.guest_session_id).then((r:any)=>{
            console.log(r.data)
        }).catch((e:any)=>{
            console.error(e)
        })
    }


        if ( data )
        return  <Box style={{width: '100%',   marginTop: 110, display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center'}}>
            <Grid container >
            <Grid item xs={5} style={{position:'relative',  display:'flex', flexDirection:'column', alignItems:'center'}}>
            <Typography color='black' fontWeight='bold' variant='h4'>
                {data?.original_title}{data?.original_name}
            </Typography>
            
                <Grid item xs={9} style={{marginTop: 36, marginBottom:12}} >
                    
                <Box style={{backgroundColor: 'rgba(0.25,0.25,0.25,0.3)', marginTop: 16, padding: 12, boxShadow:'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset'}}>
                    <Typography color='white' fontWeight='bold' variant='h6'>
                    <PlayCircleIcon fontSize='large'/>  {data?.tagline}
                    </Typography>
                    <Typography  style={{marginTop:12}}color='white' fontWeight='semibold' variant='body1'>
                            {data?.overview}
                    </Typography>
                    </Box>
                    <Box style={{backgroundColor: 'rgba(0.25,0.25,0.25,0.3)', marginTop: 16, padding: 12, boxShadow:'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset'}}>
                        <MovieFilterIcon  fontSize='large'color={data?.status === 'Released' ? 'success' : 'primary'}/>
                        <Typography color='white' fontWeight='bold' variant='body1'>
                            Date: {data?.release_date} 
                        </Typography> 
                        <Box style={{display: 'flex', flexDirection: 'row'}}>
                        <Typography color='white' fontWeight='bold' variant='body1'>
                            Status: {data?.status} -
                        </Typography> 
                        <Typography color='white' fontWeight='bold' variant='body1'>
                        - Duration {data?.runtime} minutes
                        </Typography> 
                        </Box>
                        <a href={`https://www.imdb.com/title/${data.imdb_id}/?ref_=nv_sr_srsg_0`} target='_blank' style={{textDecoration:'none'}}>
                        <Typography color='white' fontWeight='bold' variant='body1' style={{alignItems:'center',  display: 'flex', cursor: 'pointer'}}>
                                Watch on <img src={imbdLogo} style={{marginLeft: 12}}/>
                        </Typography> 
                        </a>
                        
                        <a href={data?.homepage} target='_blank' style={{textDecoration:'none'}}>
                        <Typography color='white' fontWeight='bold' variant='body2' style={{alignItems:'center',  display: 'flex', cursor: 'pointer', marginTop: 10}}>
                        <LanguageIcon color='info' style={{fontWeight: 600}}/> {data?.homepage}
                        </Typography> 
                        </a>
                        
                    </Box>
                    {data?.budget && data?.revenue &&
                    <Box style={{backgroundColor: 'rgba(0.25,0.25,0.25,0.3)', marginTop: 16,  padding: 12, boxShadow:'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset'}}>
                        <PaidIcon fontSize='large' color={data?.revenue>data?.budget ? 'warning' : 'error'}/>
                        <Box style={{display: 'flex', flexDirection: 'row'}}>
                        <Typography color='white' fontWeight='bold' variant='body1'>
                        Budget: ${data?.budget} -
                        </Typography> 
                        <Typography color='white' fontWeight='bold' variant='body1'>
                        - Revenew: ${data?.revenue}
                        </Typography> 
                        </Box>
                        <Typography color='white' fontWeight='bold' variant='body1'>
                        Estimate {data?.revenue>data?.budget ? 'earning' : 'loss'}: 
                        </Typography>
                        <Typography color={data?.revenue>data?.budget ? 'green' : 'error'} fontWeight='bold' variant='body1'>{data?.revenue>data?.budget ? '$' : '-$'}{Math.abs(data?.revenue - data?.budget)}</Typography>
                    </Box>}
                </Grid>
                
            </Grid>
            
                <Card style={{height: '40rem', boxShadow:'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px'}}>
                    <CardMedia
                        style={{objectFit: "cover"}}
                        component="img"
                        height="100%"
                        width="100%"
                        image={ `https://image.tmdb.org/t/p/w500/${data?.poster_path}`}/>
                </Card>
                    <Stack>
                        <FavoriteIcon fontSize='large' color={isFavorite ? 'disabled' : 'primary'} onClick={()=>saveToFavorites()}/>
                        <WatchLaterIcon fontSize='large' color={isWatchlist ? 'disabled' : 'primary'} onClick={()=>saveToWatchlist()}/>
                    </Stack>
            </Grid>
        </Box>

        return <>cargando...</>
}