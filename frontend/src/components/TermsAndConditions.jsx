import React, { useState } from "react";
import "./Styles/TermsAndConditions.css";

const TermsAndConditions = ({ onAccept }) => {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="terms-container">
      <h2>Terms and Conditions</h2>

      <div className="terms-box">
        <h3>1. Introduction</h3>
        <p>
          Welcome to our platform. By using our website and services, you agree to comply with and be bound by these Terms and Conditions.
        </p>

        <h3>2. User Responsibilities</h3>
        <ul>
          <li>You must provide accurate and complete information.</li>
          <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
          <li>Do not use the platform for any illegal or unauthorized purpose.</li>
        </ul>

        <h3>3. Intellectual Property</h3>
        <ul>
          <li>All content on this website (logos, text, graphics) is owned by us and protected by copyright laws.</li>
          <li>You may not copy, distribute, or use any content without permission.</li>
        </ul>

        <h3>4. Privacy Policy</h3>
        <ul>
          <li>We respect your privacy and handle your data according to our <a href="/privacy-policy">Privacy Policy</a>.</li>
          <li>We do not sell or share your personal information without consent.</li>
        </ul>

        <h3>5. Payments & Refunds</h3>
        <ul>
          <li>All payments are processed securely. We do not store your payment details.</li>
          <li>Refunds are issued according to our <a href="/refund-policy">Refund Policy</a>.</li>
        </ul>

        <h3>6. Account Termination</h3>
        <ul>
          <li>We may suspend or terminate your account if you violate our terms.</li>
          <li>You may request account deletion at any time.</li>
        </ul>

        <h3>7. Liability & Disclaimers</h3>
        <ul>
          <li>We are not responsible for any damages caused by misuse of the platform.</li>
          <li>The services are provided "as is" without warranties of any kind.</li>
        </ul>

        <h3>8. Modifications to Terms</h3>
        <ul>
          <li>We reserve the right to update these Terms at any time.</li>
          <li>Users will be notified of significant changes.</li>
        </ul>

        <h3>9. Governing Law</h3>
        <p>
          These Terms are governed by the laws of [Your Country]. Any disputes shall be resolved in the courts of [Your Country].
        </p>
      </div>

      <div className="terms-actions">
        <input
          type="checkbox"
          id="agree"
          checked={agreed}
          onChange={() => setAgreed(!agreed)}
        />
        <label htmlFor="agree"> I agree to the Terms and Conditions</label>
        <button disabled={!agreed} onClick={onAccept}>Accept</button>
      </div>
    </div>
  );
};

export default TermsAndConditions;
