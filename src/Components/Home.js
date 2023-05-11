import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faHome,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function Home(props) {
  return (
    <Container className=" ">
      <Row className="home justify-content-center align-items-center">
        <Col className="d-flex justify-content-center ">
          <figure className="d-flex justify-content-center">
            <img src={props.info.imgSrc} alt="" className="img" />
          </figure>
        </Col>
        <Col>
          <h3 className="welcome">Welcome</h3>
          <h2>
            <span> I am /</span>
            {props.info.name}
          </h2>
          <p>
            <FontAwesomeIcon icon={faGraduationCap} /> {props.info.profession}
          </p>
          <p>
            <FontAwesomeIcon icon={faHome} /> {props.info.address}
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} />
            {props.info.phone}
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> {props.info.email}
          </p>
          <hr />
          <p>{props.info.about}</p>
          <hr />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
