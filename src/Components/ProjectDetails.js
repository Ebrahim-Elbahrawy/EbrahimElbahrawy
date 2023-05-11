import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

function ProjectDetails({ projectInfo }) {
  const { id } = useParams();

  // Find the project that matches the specified id
  const project = projectInfo.find((item) => item.id === Number(id));

  // If the project is not found, return null
  if (!project) {
    return null;
  }

  return (
    <Container>
      <Row className="slider_image_details d-flex justify-content-center align-items-center">
        <Col sm="8">
          <Carousel
            className="d-flex align-items-center w-100 h-100 slider_item"
            prevIcon={<span className="carousel-control-prev-icon" />}
            nextIcon={<span className="carousel-control-next-icon" />}
          >
            {project.image.map((item) => (
              <Carousel.Item key={Math.random()}>
                <img
                  className="w-100 project_details_image"
                  src={item}
                  alt="not found"
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col sm="4 d-flex justify-content-center align-items-center flex-column">
          <h2 className="title_project">{project.title}</h2>
          <h3 className="title_project">Description</h3>
          <p dir="rtl" className="title_project">
            {project.describtion}
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default ProjectDetails;
