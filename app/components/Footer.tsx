import React from 'react';
import Image from 'next/image';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="newsletter">
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from appscrip.</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className="contact-info">
          <h4>CONTACT US</h4>
          <p>+91 99020 19342</p>
          <p>customercare@appscrip.com</p>
          <h4>CURRENCY</h4>
          <p>Us IND</p>
          <p>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-column">
          <h4>appscrip</h4>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>FOLLOW US</h4>
          <div className="social-icons">
          <Image src="/Images/LinkedIn.png" alt="LinkedIn" width={60} height={50} />
          <Image src="/Images/Instagram.png" alt="Instagram" width={60} height={50} />
          </div>
         <h4>Appscrip</h4>
          <div className="payment-icons">
          <Image src="/Images/google-pay.png" alt="Google Pay" width={60} height={50} />
          <Image src="/Images/master-card.png" alt="MasterCard" width={60} height={50} />
          <Image src="/Images/phone-pay.png" alt="Phonepay" width={60} height={50} />
          <Image src="/Images/apple-pay.png" alt="Apple Pay" width={60} height={50} />
          <Image src="/Images/paypal.png" alt="PayPal" width={60} height={50} />

          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © 2023 appscrip. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
