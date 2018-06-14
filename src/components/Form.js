import React, { Component } from "react";
import ThankYouAlert from "./ThankYouAlert";
import { Button, Input, InputGroup, Form, FormGroup, Label } from "reactstrap";

export default class EmailForm extends React.Component {
  render() {
    return (
      <div>
        <Form method="POST" netlify="true">
        <h1>Free Video Consultation </h1>
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
              name="text"
              id="exampleText"
              placeholder="tell us a little about your idea without giving much away"
            />
          </FormGroup>
          <div data-netlify-recaptcha />
          <Button color="success" onclick={ThankYouAlert} type="submit">Send</Button>
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
