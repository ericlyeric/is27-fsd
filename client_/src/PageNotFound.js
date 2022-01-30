import React from "react";
import { Container, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function PageNotFound() {
  let history = useHistory();

  return (
    <Container className="text-center pt-5 pb-5">
      <h1>404 page not found</h1>
      <p>The page you are trying to visit could not be found</p>
      <Button onClick={() => history.push("/")}>Go to homepage</Button>
    </Container>
  );
}
