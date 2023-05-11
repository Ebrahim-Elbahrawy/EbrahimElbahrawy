import React from "react";
import { Col, Row } from "react-bootstrap";

function ExperienceData({ itemData }) {
  // {
  //   const year = (itemData) => {
  //     return itemData.filter((item) => item.years === "2020");
  //   };

  // }

  return (
    <Row className="exp-item d-flex justify-content-end my-4">
      {itemData.length >= 1 ? (
        itemData.map((item) => (
          <Col
            key={item.id}
            className=" div-item d-flex flex-column align-items-center"
          >
            <div className="w-100">{item.title}</div>
            <img
              src={item.image}
              alt="notFOUND"
              className="image-skills h-75 "
            />
          </Col>
        ))
      ) : (
        <h1> لا يوجد خبرات </h1>
      )}
    </Row>
  );
}

export default ExperienceData;
