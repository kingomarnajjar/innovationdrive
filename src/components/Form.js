import React, { Component } from "react";
import ThankYouAlert from "./ThankYouAlert";
import { Button, Input, InputGroup, Form, FormGroup, Label } from "reactstrap";

export default class EmailForm extends Component {
  render() {
    return (
      <div className="Form">
        <Form action="https://formspree.io/contact@innovationdrive.com.au" method="POST">
          <h1>Free video consultation</h1>
          <FormGroup>
            <Input
              type="fullname"
              name="fullname"
              id="exampleName"
              placeholder="Full name"
            />
            </FormGroup>
          <FormGroup>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Email"
            />
          </FormGroup>

          <FormGroup>
            <Input
              type="textarea"
              name="idea"
              id="exampleText"
              placeholder="tell us a little about your idea without giving much away"
            />
          </FormGroup>
          <Button color="success" type="submit" value="Send">
            Send
          </Button>
        </Form>
      </div>
    );
  }
}

// onclick={ThankYouAlert}onclick={ThankYouAlert}
// the logic is sign up to recieve free video consultation and invention workbook
// First name, last name
// then email text area with validation
// tell us a little about your idea...
// Once it goes through trigger thank you alert or just change CTA text/colour

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// import MailchimpSubscribe from "react-mailchimp-subscribe"

// const url = "https://innovationdrive.us18.list-manage.com/subscribe/post";

// // simplest form (only email)
// const SimpleForm = () => <MailchimpSubscribe url={url}/>

// // use the render prop and your custom form
// const CustomForm = () => (
//   <MailchimpSubscribe
//     url={url}
//     render={({ subscribe, status, message }) => (
//       <div>
//         <EmailForm onSubmitted={formData => subscribe(formData)} />
//         {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
//         {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
//         {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
//       </div>
//     )}
//   />
// )