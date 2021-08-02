import React from "react";
import Card from "react-bootstrap/Card";

export default function MealCard({ name, picture }) {
  return (
    <Card className="card">
      <Card.Img variant="top" src={picture} className="card-img" />
      <Card.Body>
        <Card.Title className="card-title">{name}</Card.Title>
      </Card.Body>
    </Card>
  );
}
