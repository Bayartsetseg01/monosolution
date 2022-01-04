// import React from "react"; 
import { UncontrolledCarousel, Row, Col } from "reactstrap";

const items = [
  {
    src: url("https://source.unsplash.com/1000x750"),
    altText: "Slide 1",
    caption: "",
    header: "",
    key: "1",
  },
  {
    src: require("../public/mono-solution-horizontal.png"),
    altText: "Slide 2",
    caption: "",
    header: "",
    key: "2",
  },
  {
    src: require("../public/ezgif.com-gif-maker.gif"),
    altText: "Slide 3",
    caption: "",
    header: "",
    key: "3",
  },
];

const Example = () => (
  <Row>
    <Col md="8" className="mx-auto">
      <UncontrolledCarousel items={items} />
    </Col>
  </Row>
);

export default Example;