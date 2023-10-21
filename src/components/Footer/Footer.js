import React from "react";
import styles from "./footer.module.css";

const footer = () => {
  return <footer className={styles.footer}>
    
        <div className="footer-block">
            <h3 className="footer-heading">EDYODA</h3>
            <ul className="footer-ul">
                <li className="footer-list"><a href="">About Us</a></li>
                <li className="footer-list"><a href="">Contact Us</a></li>
                <li className="footer-list"><a href="">Terms of Use</a></li>
                <li className="footer-list"><a href="">Privacy Policy</a></li>
            </ul>
        </div>

        <div className="footer-block">
            <h3 className="footer-heading">RESOURCES</h3>
            <ul className="footer-ul">
                <li className="footer-list"><a href="">Learning Paths</a></li>
                <li className="footer-list"><a href="">Courses</a></li>
                <li className="footer-list"><a href="">Learning Videos</a></li>
                <li className="footer-list"><a href="">Educators</a></li>
                <li className="footer-list"><a href="">EDyoda Stories</a></li>
                <li className="footer-list"><a href="">University</a></li>
                <li className="footer-list"><a href="">AITEST</a></li>
            </ul>
        </div>

        <div className="footer-block">
            <h3 className="footer-heading">FOR ENTERPRISES</h3>
            <ul className="footer-ul">
                <li className="footer-list">Train Your Employees</li>
            </ul>
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-ul">
                <li className="footer-list"><a href="">Learning and Earn</a></li>
                <li className="footer-list"><a href="">Become a Learning-Enabler</a></li>
                <li className="footer-list"><a href="">Tips for Learning Enabler</a></li>
                <li className="footer-list"><a href="">Request New Topic</a></li>
                <li className="footer-list"><a href="">Certification</a></li>
                <li className="footer-list"><a href="">Affiliate Program</a></li>
            </ul>
        </div>

        <div className="footer-block">
            <h3 className="footer-heading">CONNECT</h3>
            <ul className="footer-ul">
                <li className="footer-list">2nd Floor #188, Survey No. - 123/1,<br/>
                    Incubes Building Next to McDonalds,<br/>
                    ITPL Main Rd, Brookefield,<br/>
                    Bengaluru, Karnataka-560037,<br/>
                    India</li>
                <li className="footer-list"><i className="fa-solid fa-envelope"></i>Hello@edyoda.com</li>
                <li className="footer-list">
                    <i className="fa-solid fa-location-dot"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-linkedin-in"></i>
                </li>
                <li className="footer-list">© 2021<br/>
                    zekeLabs Technologies Private Limited
                </li>
            </ul>
        </div>
 
  </footer>;
};

export default footer;