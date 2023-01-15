import { api } from "../common/api.base";
import { general } from "../common/general.service";
import axios from "axios";

const api_key= "2c6cd383602f9dd84e2c543271f39c40";
const endpoint= `movie/?api_key=${api_key}&language=en-US/`;


    axios.get(endpoint)
        .then((response)=> {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });

