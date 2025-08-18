import axios from "axios";
import {config} from './../config';

export async function updateAvailability(availabilityData){
    try{
        let url = `${config.serverURL}/doctorHome/availability`

        const response = await axios.put(url,availabilityData);
        if(response.status >=200 && response.status < 300){
            return response;
        }
        else{
            throw new Error(response.data?.message || 'Update failed');
        }
    }catch(error){
        console.error('error: ',error);

        throw error.response?.data || error.message || 'Unknown error';
    }
}
