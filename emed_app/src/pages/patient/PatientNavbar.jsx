import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

function PatientNavbar({ doctors, setFilteredDoctors }) {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filterOptions = {
    'Specialization': ['Cardiologist', 'Neurologist', 'Pediatrician', 'Orthopedic Surgeon'],
    'Experience': ['5-10 years', '10-15 years', '15+ years'],
    'Rating': ['4.5+', '4.7+', '4.9+']
  };

  const onLogout = () => {
    // write logout logic 
    navigate('/');
  };

  const handleFilterClick = (category, value) => {
    let filtered = [...doctors];
    
    if (category === 'Specialization') {
      filtered = filtered.filter(doctor => doctor.specialization === value);
    }
    else if (category === 'Experience') {
      const [min, max] = value.includes('+') 
        ? [parseInt(value.split('+')[0]), Infinity]
        : value.split('-').map(num => parseInt(num));
      filtered = filtered.filter(doctor => {
        const exp = parseInt(doctor.experience);
        return exp >= min && (isFinite(max) ? exp <= max : true);
      });
    }
    else if (category === 'Rating') {
      const minRating = parseFloat(value.split('+')[0]);
      filtered = filtered.filter(doctor => {
        const rating = parseFloat(doctor.rating.split(' ')[1]);
        return rating >= minRating;
      });
    }
    
    setFilteredDoctors(filtered);
    setShowDropdown(false);
  };

  return (
    <nav className='navbar navbar-expand-lg bg-success' data-bs-theme='dark'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/patientHome/doctorsList'>
          Home
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav gap-4 fs-5'>
            <li className='nav-item'>
              <Link
                className='nav-link'
                aria-current='page'
                to='/patientHome/patientProfile'
              >
                Profile
              </Link>
            </li>
            <li className='nav-item dropdown'>
              <div 
                className='nav-link dropdown-toggle'
                onClick={() => setShowDropdown(!showDropdown)}
                style={{ cursor: 'pointer' }}
              >
                Filter
              </div>
              {showDropdown && (
                <div 
                  className='dropdown-menu show'
                  style={{
                    display: 'flex',
                    padding: '0',
                    width: '400px',
                    left: '50%',
                    transform: 'translateX(-50%)'
                  }}
                >
                  {/* Categories Column */}
                  <div style={{
                    width: '40%',
                    padding: '10px',
                    borderRight: '1px solid #eee',
                    backgroundColor: '#f8f8f8'
                  }}>
                    <h4 style={{ margin: '0 0 10px 0', color: '#555' }}>Filter By:</h4>
                    {Object.keys(filterOptions).map(category => (
                      <div
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        style={{
                          padding: '10px',
                          cursor: 'pointer',
                          backgroundColor: selectedCategory === category ? '#e8f5e9' : 'transparent',
                          borderRadius: '4px',
                          marginBottom: '5px',
                          fontWeight: selectedCategory === category ? 'bold' : 'normal',
                          color: selectedCategory === category ? '#2e7d32' : '#333'
                        }}
                      >
                        {category}
                      </div>
                    ))}
                  </div>

                  {/* Sub-Categories Column */}
                  <div style={{
                    width: '60%',
                    padding: '10px'
                  }}>
                    {selectedCategory ? (
                      <>
                        <h4 style={{ margin: '0 0 10px 0', color: '#555' }}>{selectedCategory}:</h4>
                        {filterOptions[selectedCategory].map(option => (
                          <div
                            key={option}
                            onClick={() => handleFilterClick(selectedCategory, option)}
                            style={{
                              padding: '10px',
                              cursor: 'pointer',
                              borderRadius: '4px',
                              marginBottom: '5px',
                              ':hover': {
                                backgroundColor: '#e8f5e9',
                                color: '#2e7d32'
                              }
                            }}
                          >
                            {option}
                          </div>
                        ))}
                      </>
                    ) : (
                      <div style={{ color: '#777', padding: '20px 10px', textAlign: 'center' }}>
                        Select a category to see options
                      </div>
                    )}
                  </div>
                </div>
              )}
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link'
                aria-current='page'
                to='/patientHome/upcomingAppointmentList'
              >
                My Appointment
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                aria-current="page" 
                to="/patientHome/aboutUs"
              >
                About-Us
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                aria-current="page" 
                to="/patientHome/contectUs"
              >
                Contect-Us
              </Link>
            </li>
        </ul>
            <ul className="navbar-nav ms-auto fs-5">
            <li className='nav-item '>
              <button
                className='btn'
                onClick={onLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default PatientNavbar;