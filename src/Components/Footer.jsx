import React from "react";
import { Link } from "react-router-dom";

import "../Styles/footer.css";

function Footer() {
  return (
    <div className="footer__">
      <p>
        © {new Date().getFullYear()} Netflix clone. No rights reserved - cloned
        by
        <Link to="/"> Thamsanqa J</Link>
      </p>
      <p>Privacy · Terms · Sitemap · Company Details</p>
    </div>
  );
}

export default Footer;
