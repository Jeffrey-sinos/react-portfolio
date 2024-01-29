import React from "react";
import './footer.css'

const Footer = () =>{
    return(
        <footer className="footer">
        <div className="footer-content text-center">
        <h4>© 2024 Jeffrey Ongicho. All rights reserved.</h4>
        <div className="social-links">
        <div className="footer-menu">
        <ul className="footer-menu-list">
          <li className="footer-list-items">
            <a className="footer-links" href="#">
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li className="footer-list-items">
            <a className="footer-links" href="#">
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li className="footer-list-items">
            <a className="footer-links" href="#">
              <i className="fab fa-instagram" />
            </a>
          </li>
          <li className="footer-list-items">
            <a className="footer-links" href="#">
              <i className="fab fa-linkedin-in" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    </div>
    </footer>

    );
}
export default Footer;