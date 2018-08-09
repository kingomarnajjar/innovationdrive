import React from "react";
import { Jumbotron, Button } from "reactstrap";
import ModalExample from "../components/PopUpSignUp";

const MainJumbotron = props => {
  return (
    <div>
      <Jumbotron className="JumbotronStyle">
        <h1 className="display-3">Invention Pad</h1>
        <p className="lead">
          We partner with you to create your physical product idea into a
          reality and commercialise it, all with you keeping your Intellectual Property.
          We have experts in product design, prototyping and manufacturing.
        </p>
        <hr className="my-2" />
        <p>
          Don't live a life of regret seeing your idea go to
          market whilst you sat on your laurels.
        </p>
        <p className="lead">
          <ModalExample />
        </p>
      </Jumbotron>
    </div>
  );
};




export default MainJumbotron;
