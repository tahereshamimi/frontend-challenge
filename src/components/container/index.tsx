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
    marginTop: "10vh",
  },
  jumborton: {
    height: 350,
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
interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  const styles = useStyles();
  return (
    <Row>
      <Col md={{ span: 6, offset: 3 }}>
        <div className={styles.container}>
          <Jumbotron className={styles.jumborton}>{children}</Jumbotron>
        </div>
      </Col>
    </Row>
  );
};
export { Container };
