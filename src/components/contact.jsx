import React from "react";

import prof from "./contact.module.css";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div className={prof.contact}>
      <div>
        <NavLink to="/Video" className={prof.contact}>
          Video{" "}
        </NavLink>

        <NavLink to="/Contact" className={prof.contact}>
          {" "}
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Contact;
