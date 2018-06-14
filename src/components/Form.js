import React, { Component } from "react";
import ThankYouAlert from "./ThankYouAlert";
import { Button, Input, InputGroup, Form, FormGroup, Label } from "reactstrap";
import MailchimpSubscribe from "react-mailchimp-subscribe"

const url = "https://innovationdrive.us18.list-manage.com/subscribe/post";

// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe url={url}/>

// use the render prop and your custom form
const CustomForm = () => (
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <div>
        <EmailForm onSubmitted={formData => subscribe(formData)} />
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
        {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
      </div>
    )}
  />
)

export default class EmailForm extends React.Component {
  render() {
    return (
      <div>
        <Form method="POST" netlify="true">
        <h1>Free Video Consultation </h1>
          <FormGroup>
            <Input
              type="email"
              name="MERGE0"
              id="exampleEmail"
              placeholder="Email"
            />
          </FormGroup>

          <FormGroup>
            <Input
              type="textarea"
              name="MERGE8"
              id="exampleText"
              placeholder="tell us a little about your idea without giving much away"
            />
          </FormGroup>
          <div data-netlify-recaptcha />
          <Button color="success" onclick={ThankYouAlert} type="submit" >Send</Button>
        </Form>
      </div>
    );
  }
}

// the logic is sign up to recieve free video consultation and invention workbook
// First name, last name
// then email text area with validation
// tell us a little about your idea...
// Once it goes through trigger thank you alert or just change CTA text/colour
