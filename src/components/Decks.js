import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody
} from "reactstrap";

const InventionProcessDeck = props => {
  return (
    <CardDeck>
      <Card>
        <CardImg
          top
          width="100%"
          src="https://i.pinimg.com/736x/9b/94/33/9b94336802fcc7d8c4ca92f7a8d49814.jpg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Product Design</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg
          top
          width="100%"
          src="https://i.pinimg.com/736x/72/47/b6/7247b66abf6ef7ae84eb6fd7b9bf2273--d-prints-d-models.jpg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Rapid Prototyping</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            This card has supporting text below as a natural lead-in to
            additional content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg
          top
          width="100%"
          src="https://i.pinimg.com/736x/02/d7/48/02d748ba33a49896a43341e69f788d17--process-engineering-manufacturing-engineering.jpg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Manufacturing</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default InventionProcessDeck;
