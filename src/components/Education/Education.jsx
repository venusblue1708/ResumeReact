import React from "react";
import Card from "react-bootstrap/Card";

const Education = () => {
  return (
    <Card>
      <Card.Header className="text-success">Education : </Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <h5 className="text-success"> 2010-2021 </h5>
          <p className="text-secondary">Kyrgyz-Turk lyceum </p>
          <h5 className="text-success"> 2021-2025 </h5>
          <p className="text-secondary">OshGU Law university </p>
          <h5 className="text-success"> 2022-2023 </h5>
          <p className="text-secondary"> Makers bootcamp course (4 mounths)</p>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default Education;
