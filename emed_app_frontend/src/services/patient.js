import axios from "axios"
import { config } from './../config';

export async function getAvailableDoctors(token) {
  try {
    let url = `${config.serverURL}/patientHome/doctorsList`
        const response = await axios.get(url,{
      headers:{
        Authorization: `Bearer ${token}`
      }})
    if (response.status >= 200 && response.status < 300) {
      return response
    }else {
     throw new Error(response.data?.message || 'Login failed');
    }
  }  catch (error) {
    throw error.response?.data || error.message || 'Unknown  error';
  }
}


export async function getDoctor(doctorId,token){
  try{
   let url = `${config.serverURL}/patientHome/viewDoctorDetails/${doctorId}`
  const response = await axios.get(url,{
      headers:{
        Authorization: `Bearer ${token}`
      }})
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


export async function BookAppointment(
  patientId,
  firstName,
  lastName,
  email,
  mobile,
  dob,
  gender,
  dateOfAppointment,
  timeSlot,
  doctorId,
  token,
) {
  try {
    // create the required url
    const url = `${config.serverURL}/patientHome/bookAppointment/${doctorId}`

    // create the request body
    const body = {
      patientId,
      firstName,
      lastName,
      email,
      mobile,
      dob,
      gender,
      dateOfAppointment,
      timeSlot,
    }

    // send the request and get the response from the server
    const response = await axios.post(url, body ,{
        headers:{
            'Content-Type':'application/json',
             Authorization: `Bearer ${token}`
        },
    })

    if (response.status >= 200 && response.status < 300) {
      // read the json body from response
      return response
    } else {
      // response is not success
     throw new Error(response.data?.message || 'Book appointment failed');
    }
  } catch (error) {
   console.error('Booking error:', error);
    
    // Re-throw the error or return a structured error object
    throw error.response?.data || error.message || 'Unknown Booking error';
  }
}


export async function upcomingAppointmentList(patientId , token){
  try{
   let url = `${config.serverURL}/patientHome/upcomingAppointmentList/${patientId}`
  const response = await axios.get(url,{
      headers:{
        Authorization: `Bearer ${token}`
      }})
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


export async function cancelAppointment(appointmentId , token){
  try{
   let url = `${config.serverURL}/patientHome/cancel/${appointmentId}`
  const response = await axios.put(url,null,{
      headers:{
        Authorization: `Bearer ${token}`
      }})
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


export async function getAppointment(appointmentId , token){
  try{
   let url = `${config.serverURL}/appointment/${appointmentId}`
  const response = await axios.get(url,{
      headers:{
        Authorization: `Bearer ${token}`
      }})
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


export async function RescheduleAppointment(appointment , token) {
  try {
    const {appointmentId, firstName,lastName,email,mobile,dob,gender,dateOfAppointment,timeSlot} = appointment;
    // create the required url
    const url = `${config.serverURL}/patientHome/reschedule`

    // create the request body
    const body = {
      appointmentId,
      firstName,
      lastName,
      email,
      mobile,
      dob,
      gender,
      dateOfAppointment,
      timeSlot,
    }

    // send the request and get the response from the server
    const response = await axios.put(url, body ,{
        headers:{
            'Content-Type':'application/json',
            Authorization: `Bearer ${token}`
        },
    })

    if (response.status >= 200 && response.status < 300) {
      // read the json body from response
      return response
    } else {
      // response is not success
     throw new Error(response.data?.message || 'Book appointment failed');
    }
  } catch (error) {
   console.error('Booking error:', error);
    
    // Re-throw the error or return a structured error object
    throw error.response?.data || error.message || 'Unknown Booking error';
  }
}


export async function getAllAppointments(patientId , token){
  try{
   let url = `${config.serverURL}/patientHome/allAppointmentList/${patientId}`
  const response = await axios.get(url,{
      headers:{
        Authorization: `Bearer ${token}`
      }})
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


export async function GetPatient(patientId , token){
  try{
   let url = `${config.serverURL}/patientHome/getPatient/${patientId}`
  const response = await axios.get(url,{
      headers:{
        Authorization: `Bearer ${token}`
      }})
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


export async function UpdatePatient(editPatient , token){
  try{
    
   let url = `${config.serverURL}/patientHome/updatePatient`
   let body =  editPatient
  const response = await axios.put(url,body,{
      headers:{
        Authorization: `Bearer ${token}`
      }})
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


export async function DeletePatient(patientId , token){
  try{
    
   let url = `${config.serverURL}/patientHome/deletePatient/${patientId}`
  const response = await axios.put(url,null,{
      headers:{
        Authorization: `Bearer ${token}`
      }})
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
