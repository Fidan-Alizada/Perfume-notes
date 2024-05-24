import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

          <div className="footer-links">
            <ul>
              <li>Email: </li>
              <li><a href="mailto:info@test.com">info@test.com</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">How it works</a></li>
            </ul>
          
        </div>
        <div className="footer-column">
          <div className="footer-links">
            <ul>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">FAQs</a></li> 
              <li><a href="#">Lead generation</a></li>
            </ul>
          </div>
        </div>
    
      </div>
    </footer>
  );
}
export default Footer;