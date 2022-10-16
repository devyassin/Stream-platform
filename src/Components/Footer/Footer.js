import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <span className="footer">
        Copyright © 2036 Cyborg Gaming Company.Code implimented by{" "}
        <a
          className="link-footer"
          href="https://www.linkedin.com/in/yassine-lamouadden-192509124/"
          target={"_blank"}
        >
          Yassine Lamouadden
        </a>
        <span>All rights reserved.</span>
      </span>
    </div>
  );
};

export default Footer;
