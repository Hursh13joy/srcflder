import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import 'font-awesome/css/font-awesome.min.css'; // Import FontAwesome styles
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          {/* Company Section */}
          <div className="col-md-3 mb-3">
            <h4>Company</h4>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-white text-decoration-none">Our Services</a></li>
              <li><a href="#" className="text-white text-decoration-none">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Get Help Section */}
          <div className="col-md-3 mb-3">
            <h4>Get Help</h4>
            <ul className="list-unstyled">
              <li><a href="faq.html" className="text-white text-decoration-none">FAQ</a></li>
              <li><a href="#" className="text-white text-decoration-none">Contact Us</a></li>
              <li><a href="tel:+18660528496" className="text-white text-decoration-none">Phone: 866-052-8496</a></li>
              <li><a href="mailto:petplanet@gmail.com" className="text-white text-decoration-none">Email: petplanet@gmail.com</a></li>
            </ul>
          </div>

          {/* Accessories Section */}
          <div className="col-md-3 mb-3">
            <h4>Accessories</h4>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Food Supplement</a></li>
              <li><a href="#" className="text-white text-decoration-none">Medications</a></li>
              <li><a href="#" className="text-white text-decoration-none">Toys</a></li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="col-md-3 mb-3">
            <h4>Follow Us</h4>
            <div className="d-flex">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white me-3"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-white me-3"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white me-3"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="mb-0">© 2024 Pet Planet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
