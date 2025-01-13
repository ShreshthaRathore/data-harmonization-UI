import React from "react";
import { Link } from "react-router-dom";

const ContactUs = ({ mailto, label }) => {
    return (
        <Link
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
            
            }}
        >
            {label}
        </Link>
    );
};

export default ContactUs;