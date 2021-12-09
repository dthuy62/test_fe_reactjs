import React from 'react';
import Logo from '../../images/logo/logo.png';
import Logo2x from '../../images/logo/logo@2x.png';
import Logo3x from '../../images/logo/logo@3x.png';
import { Link } from 'react-router-dom';
const Header = () => {
  const navLinks = [
    { label: 'Introduction' },
    { label: 'solution' },
    { label: 'Rate plan' },
    { label: '|' },
    { label: 'login' },
    { label: 'Apply for free use' }
  ]
  return (
    <div className="header">
      <nav className="container navbar navbar-expand-lg navbar-light">
        <Link to="/" className="navbar-brand logo" >
          <img src={Logo} alt="Logo" srcSet={Logo2x,Logo3x} />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            {
              navLinks.map((link, index) => (
                <li key={index} className="nav-item text-uppercase">
                  <span style={{color: "white"}}>{link.label}</span>
                </li>
              ))
            }
          </ul>
        </div>
      </nav>
     
      
    </div>


  )
}

export default Header;
