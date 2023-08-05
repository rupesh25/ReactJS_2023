import React from "react";

const Footer = (props) =>{
    return(
        <div>
            <hr/>
            <center>
                &copy; Developer Funnel {props.month} {props.year}
            </center>
        </div>
    )
}

export default Footer;