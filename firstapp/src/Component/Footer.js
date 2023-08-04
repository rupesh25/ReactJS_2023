import React from "react";

const Footer = (props) =>{
    return(
        <div>
            <hr/>
            <center>
                &coppy; Developer Funnel {props.month} {props.year}
            </center>
        </div>
    )
}

export default Footer;