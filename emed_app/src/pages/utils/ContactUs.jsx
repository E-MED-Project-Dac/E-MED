import React from 'react'
import { useNavigate } from 'react-router-dom'
function ContactUs() {
  const navigate = useNavigate()
  const onBack = () => {
    navigate(-1)
  }
  return (
    <div className='container mt-5'>
      <h2 className='mb-4' style={{textAlign:'center'}}>Contact Us</h2>
       <hr />
      <div className='row'>
        <div className='col-md-6'>
          <h4>eMed HealthCare</h4>
          <p>
            📍 <strong>Address:</strong><br />
            2nd Floor, Mediplus Tower,<br />
            Health Street, Pune - 411001, Maharashtra, India
          </p>

          <p>
            ☎️ <strong>Phone:</strong><br />
            +91 98765 43210
          </p>

          <p>
            📧 <strong>Email:</strong><br />
            <a href='mailto:support@emed.com'>support@emed.com</a>
          </p>

          <p>
            🕐 <strong>Support Hours:</strong><br />
            Monday to Saturday: 9 AM – 6 PM
          </p>
        </div>

        <div className='col-md-6'>
          <h4>Send us a message</h4>
          <form>
            <div className='mb-3'>
              <label className='form-label'>Name</label>
              <input type='text' className='form-control' placeholder='Your name' />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Email</label>
              <input type='email' className='form-control' placeholder='you@example.com' />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Message</label>
              <textarea className='form-control' rows='4' placeholder='Type your message here...'></textarea>
            </div>
            <button type='submit' className='btn btn-primary'>Send</button>
          </form>
        </div>
      </div>
      <hr />
       <div>
        <button className='btn btn-secondary' onClick={onBack}>Back</button>
      </div>
    </div>
  )
}

export default ContactUs
