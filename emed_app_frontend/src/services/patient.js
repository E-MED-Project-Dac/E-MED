import axios from "axios"
import { config } from './../config';

export async function getAvailableDoctors() {
  try {
    let url = `${config.serverURL}/patientHome/doctorsList`
   // const token = sessionStorage.getItem('token')
   // const response = await axios.get(url, {
     // headers: { token },
    //})
    const response = await axios.get(url)
    if (response.status >= 200 && response.status < 300) {
      return response
    }else {
     throw new Error(response.data?.message || 'Logiin failed');
    }
  }  catch (error) {
   console.error(' error:', error);
    
    // Re-throw the error or return a structured error object
    throw error.response?.data || error.message || 'Unknown  error';
  }
}

export async function getDoctor(doctorId){
  try{
   let url = `${config.serverURL}/patientHome/viewDoctorDetails/${doctorId}`
  const response = await axios.get(url)
    if (response.status >= 200 && response.status < 300) {
      return response
    }else {
     throw new Error(response.data?.message || 'failed');
    }
  }  catch (error) {
   console.error(' error:', error);
    
    // Re-throw the error or return a structured error object
    throw error.response?.data || error.message || 'Unknown  error';
  }
}
