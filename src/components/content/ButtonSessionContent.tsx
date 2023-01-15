import { ButtonSessionContentT } from "./ButtonSessionContent.types"
import { LoadingButton } from "@mui/lab"
import { ReactNode, useEffect, useState } from "react"
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
export const ButtonSessionContent = ({isLoading, status, onClick}:ButtonSessionContentT) => {
    const [ statusIcon, setStatusIcon ] = useState<ReactNode>()

    useEffect(()=>{
        if ( status === 'success' || status === 'failure' ){
            setTimeout(() => {
                setStatusIcon(undefined)
            }, 1200);
        }
    },[status])
    useEffect(()=>{
        if ( status === 'success'){
            setStatusIcon(<CheckCircleOutlineIcon/>)
        }
        if ( status === 'failure'){
            setStatusIcon(<ErrorOutlineIcon/>)
        }
        if (status === null){
            setStatusIcon(null)
        }
    },[status])


    function generateString():string{
        if ( status === 'success'){
            return 'Profile'
        }
        if ( status === 'failure'){
            return 'Retry'
        }
        if (isLoading){
            return 'Loading'
        }
        return 'Create session'
    }

    return <LoadingButton loading={isLoading} startIcon={statusIcon} onClick={onClick }>{generateString()}</LoadingButton>
}