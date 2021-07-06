import React from "react";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import { Jumbotron, Button, Col, Row } from "react-bootstrap";
const useStyles = createUseStyles({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  jumborton: {
    height: 300,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "& h1": {
      textAlign: "center",
    },
    "& a:hover": {
      textDecoration: "none",
    },
  },
});

export const HomePage = () => {
  const styles = useStyles();
  return (
    <>
      <h1>welcome</h1>
      <Link to="sign-up-first">
        <Button variant="info" size="lg" block>
          Sign Up
        </Button>
      </Link>
    </>
  );
};
