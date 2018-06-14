import React, { Component } from "react";
import ThankYouAlert from "./ThankYouAlert";

export default class Form extends React.Component {
render() {
    return (

    <div>
    <form name="contact" method="POST" netlify>
    <p>
        <label>Email: <input type="text" name="name" /></label>
    </p>
    <p>
        <label>Message: <textarea name="message"></textarea></label>
    </p>
    <div data-netlify-recaptcha></div>
    <p>
    <button type="submit" >Send</button>
     </p>
    </form>
    </div>


        );
    }
}

// the logic is sign up to recieve free video consultation and invention workbook
// First name, last name
// then email text area with validation
// tell us a little about your idea...
// Once it goes through trigger thank you alert or just change CTA text/colour