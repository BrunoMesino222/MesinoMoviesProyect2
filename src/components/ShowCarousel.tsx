import React, { useState, useEffect } from 'react'
import Box from "@mui/material/Box"
import { MovieType } from './MovieCard.types'
import { general } from '../api/common/general.service'
import { MovieCarouselT } from './MovieCarousel.types'
import { CardComponent } from './MovieCard'
import ReactSimplyCarousel from 'react-simply-carousel';

export const ShowCarousel = ({target='upcoming'}:MovieCarouselT) => {
    const [ result, setResult ] = useState<MovieType[]>([])
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(()=>{
        general.getShows({page:1, target}).then((r:any)=>{
            console.log(r.data)
            setResult(r.data.results)
            
        }).catch((e:any)=>{
            console.error(e)
        }).finally(()=>setLoading(false))
    },[])
    if (loading) {
      return(<></>)
    }
    return (
        <Box sx={{backgroundColor:"black"}}>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 10,
            itemsToScroll: 8,
            minWidth: 768,
          },
        ]}
        speed={1000}
        easing="linear"
      >
            {result.map((data:MovieType)=>{
            return <CardComponent data={data}/>})}
      </ReactSimplyCarousel>
        </Box>
    )
}