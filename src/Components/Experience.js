import React from "react";
import ExeperienceData from "./ExperienceData";
import { Row, Col, Container } from "react-bootstrap";
// import SkillsAnimation from "./SkillsAnimation";

function Experience({ filterByCategory, newCat, itemData }) {
  return (
    <Container className="home">
      <Row>
        <Col className="d-flex justify-content-center flex-wrap">
          <button className="butt-cat " onClick={() => filterByCategory("ALL")}>
            ALL
          </button>
          {newCat.map((item) => {
            return (
              <button
                className="butt-cat"
                key={item.id}
                onClick={() => filterByCategory(item)}
              >
                {item}
              </button>
            );
          })}
        </Col>
      </Row>
      <ExeperienceData itemData={itemData} />
      {/* <SkillsAnimation itemData={itemData} /> */}
    </Container>
  );
}

export default Experience;
