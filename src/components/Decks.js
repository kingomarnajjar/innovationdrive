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
      <a href="http://bokardo.com/principles-of-product-design/" style={{ textDecoration: 'none' }} class="card">

        <CardImg
          top
          width="100%"
          src="https://i.pinimg.com/736x/9b/94/33/9b94336802fcc7d8c4ca92f7a8d49814.jpg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Product Design</CardTitle>
          {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
          <CardText>
          At its most basic, product design (also known as industrial design) is all the work that comes between the initial idea for a new product, through to the point where the design is ready to be handed off to a manufacturer
          </CardText>

        </CardBody>
        </a>
      </Card>
      <Card>
      <a href="https://www.w3schools.com/html/" style={{ textDecoration: 'none' }} class="card">
        <CardImg
          top
          width="100%"
          src="https://i.pinimg.com/736x/72/47/b6/7247b66abf6ef7ae84eb6fd7b9bf2273--d-prints-d-models.jpg"
          alt="Card image cap"
        />
        <CardBody  >
          <CardTitle>Rapid Prototyping</CardTitle>
          <CardText>
          Rapid prototyping is a group of techniques used to quickly fabricate a scale model of a physical part or assembly using three-dimensional computer aided design (CAD) data.
            {/* Link to page with video explaining what it is and how it works */}
          </CardText>
          <CardText
          width="100%">
          <iframe src="https://www.youtube.com/embed/oDdOqLblmVQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
   </CardText>

        </CardBody>
        </a>
      </Card>
      <Card>
      <a href="https://www.w3schools.com/html/" style={{ textDecoration: 'none' }} class="card">

        <CardImg
          top
          width="100%"
          src="https://i.pinimg.com/736x/02/d7/48/02d748ba33a49896a43341e69f788d17--process-engineering-manufacturing-engineering.jpg"
          alt="Card image cap"

        />
        <CardBody>
          <CardTitle>Manufacturing</CardTitle>

          <CardText>
          Manufacturing is the processing of raw materials into finished goods using tools and processes.
          </CardText>

        </CardBody>
        </a>
      </Card>

    </CardDeck>
  );
};

export default InventionProcessDeck;
