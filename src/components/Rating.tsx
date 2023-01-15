import * as React from 'react';
import { styled } from '@mui/material/styles';
import Rating, { IconContainerProps } from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { logged } from '../api/common/general.service';
import { useStore } from '../store';

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

const customIcons: {
  [index: string]: {
    icon: React.ReactElement;
    label: string;
  };
} = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props: IconContainerProps) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}


export const RatingCustom = ({movie_id}:{movie_id:number}) => {
  const { sessionId} = useStore()
  const [rating, setRating] = React.useState<number>(4)
  const [loading, setLoading] = React.useState<boolean>(false)
  function rateMovie(value:number){
    setLoading(true)
    logged.rateMovie(sessionId?.guest_session_id, value, movie_id).then((r:any)=>{
    setRating(r.data.results)
    }).catch((e:any)=>{
        console.error(e)
    }).finally(
      ()=>setLoading(false)
    )
  }
return (
    <StyledRating
      name="highlight-selected-only"
      disabled={loading}
      defaultValue={rating || 4}
      onChange={(e:any)=>rateMovie(e.target.value)}
      IconContainerComponent={IconContainer}
      getLabelText={(value: number) => customIcons[value].label}
      highlightSelectedOnly
    />
  );
}
export const Hearth = ({movie_id}:{movie_id:number}) => {
  return null
}