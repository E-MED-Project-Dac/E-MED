import React from 'react'
import { useNavigate } from 'react-router-dom'

function AboutUs() {
  const navigate = useNavigate()
  const onBack = () => {
    navigate(-1)
  }
  return (
    <>
    <div className="card-header"
    style={{textAlign:'center',height:40, paddingTop:4}}>
         <h3><b> Welcome to EMED </b></h3>
     </div>
    <div className="container mt-5">
      <h2 className="mb-4 text-primary" style={{textAlign:'center'}}>About Us – EMED Healthcare</h2>
       <hr />
      <p>
        <strong>EMED : </strong> is a user-friendly online healthcare platform designed to simplify how patients connect with medical professionals. 
        Our mission is to make it easier for people to find the right doctor based on their specialization, availability, and clinic location — 
        all from the comfort of their home.
      </p>
       <hr />
      <h4 className="mt-4">🩺 What is eMed?</h4>
      <ul>
        <li><strong>Search</strong> for nearby doctors based on their medical specialization</li>
        <li><strong>Book appointments</strong> according to doctor schedules and availability</li>
        <li><strong>View doctor profiles</strong> including background, specialization, clinic details, timings, fees, and contact numbers</li>
      </ul>

      <h4 className="mt-4">👥 Patient Features</h4>
      <p>To use eMed, patients simply need to create a personal account. Once registered, they can:</p>
      <ul>
        <li>Manage their <strong>user profile</strong></li>
        <li>Track <strong>past and upcoming appointments</strong></li>
        <li>Easily contact doctors</li>
        <li>Access medical service information anytime, anywhere</li>
      </ul>

      <h4 className="mt-4">🌐 Why Choose eMed?</h4>
      <ul>
        <li>✔️ Easy doctor discovery by specialization</li>
        <li>✔️ Real-time appointment booking</li>
        <li>✔️ Transparent doctor information</li>
        <li>✔️ Simple and secure patient profiles</li>
        <li>✔️ Fast access to clinic schedules</li>
      </ul>

      <p className="mt-4">
        At <strong>eMed</strong>, we believe in transforming the healthcare experience through digital innovation, 
        convenience, and trust. Whether you're looking for a general physician, dermatologist, pediatrician, or any specialist — 
        eMed connects you with the right care in just a few clicks.
      </p>
      <hr />
      <div>
        <button className='btn btn-secondary' onClick={onBack}>Back</button>
      </div>
       <footer className="footer"> copyright CDAC@2025 EMED-Project <a href="/aboutUs" style={{marginRight:30,marginLeft:20}}>About-Us</a> <a href="/contectUs">Contact-Us</a></footer>
    </div>
  </>  
  )
}

export default AboutUs
