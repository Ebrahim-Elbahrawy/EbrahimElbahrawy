import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

function Project({ projectInfo, photoshopImage, loading }) {
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        Loading...
      </div>
    );
  }

  return (
    <Container className="project-page">
      {projectInfo &&
        projectInfo.map((item) => (
          <Row key={item.id} className=" p-2">
            <Col className="project">
              <img src={item.thumbnall} alt="" className="project__image p-2" />
              <div className="project__overlay d-flex flex-column  align-items-center justify-content-center">
                <h3>{item.title}</h3>
                <h4>Tools </h4>
                <p>{`(${item.package.join(")-(")})`}</p>
                <div className="d-flex justify-content-arround ">
                  <Link
                    to="/"
                    title="go to vidio demo in youtube"
                    className="button__link"
                  >
                    {" "}
                    demo YouTube
                  </Link>
                  <Link
                    to={`/project/${item.id}`}
                    title="go to vidio demo in youtube"
                    className="button__link"
                  >
                    {" "}
                    more Details
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        ))}
      <h2 className="project__header">PhotoShop Project</h2>

      <Row className="project_slder">
        <Carousel
          className="d-flex align-items-center w-100 h-100 slider_item"
          prevIcon={<span className="carousel-control-prev-icon" />}
          nextIcon={<span className="carousel-control-next-icon" />}
        >
          {photoshopImage.map((item) => (
            <Carousel.Item key={item.id}>
              <img
                className="d-block w-100 img-project"
                src={item.image}
                alt="not found"
              />
              <Carousel.Caption>
                <h3 className="slider_item">PhotoShop Project</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Row>
    </Container>
  );
}

export default Project;
