import axios from "axios"
import { config } from './../config';

export async function login(email, password) {
  try {
    // create url
    const url = `${config.serverURL}/user/login`

    // create a body
    const body = {
      email,
      password,
    }

    // call Post API
    const response = await axios.post(url, body)

    // check if response is OK
    if (response.status == 200) {
      // send the response body
      return response.data
    } else {
      // send null result
      return null
    }
  } catch (ex) {
    console.log(`exception: `, ex)
  }
}

export async function register(
  firstName,
  lastName,
  email,
  mobile,
  password,
  dob,
  gender,
  role
) {
  try {
    // create the required url
    const url = `${config.serverURL}/user/register`

    // create the request body
    const body = {
      firstName,
      lastName,
      email,
      mobile,
      password,
      dob,
      gender,
      role,
    }

    // send the request and get the response from the server
    const response = await axios.post(url, body ,{
        headers:{
            'Content-Type':'application/json',
        },
    })

    if (response.status >= 200 && response.status < 300) {
      // read the json body from response
      return response
    } else {
      // response is not success
     throw new Error(response.data?.message || 'Registration failed');
    }
  } catch (error) {
   console.error('Registration error:', error);
    
    // Re-throw the error or return a structured error object
    throw error.response?.data || error.message || 'Unknown registration error';
  }
}