import { Link, useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
interface User {
  name: string;
  age: number;
  email: string;
  newsletter: "daily" | "weekly" | "monthly";
}
export const SignUpFirst = () => {
  const history = useHistory();
  const [name, setName] = useState<User["name"]>("");
  const [age, setAge] = useState<User["age"]>(0);
  const goNext = () => {
    history.push("./sign-up-secound", { name, age });
  };

  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Please enter your name"
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="number"
          placeholder="Please enter your age"
          onChange={(e) => setAge(Number(e.target.value))}
        />
      </Form.Group>
      <Link to="sign-up-secound">
        <Link
          to={{
            pathname: "sign-up-secound",
            state: { name, age },
          }}
        >
          <Button variant="info" onClick={goNext}>
            Next
          </Button>
        </Link>
      </Link>
    </Form>
  );
};
