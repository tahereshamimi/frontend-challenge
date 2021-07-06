import { useHistory, useLocation } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { createUser } from "../../sdk";
interface User {
  name: string;
  age: number;
  email: string;
  newsletter: "daily" | "weekly" | "monthly";
}
interface StateLocation {
  name: string;
  age: number;
}
enum NewsLetter {
  daily,
  weekly,
  monthly,
}

export const SignUpSecound = () => {
  const {
    state: { name, age },
  } = useLocation<StateLocation>();
  const [email, setEmail] = useState<User["email"]>("");
  const [newsletter, setNewsletter] = useState<User["newsletter"]>();
  const history = useHistory();

  const options = [
    {
      value: NewsLetter.daily,
      key: "daily",
    },
    {
      value: NewsLetter.weekly,
      key: "weekly",
    },
    {
      value: NewsLetter.monthly,
      key: "monthly",
    },
  ];
  const handleSignUp = async () => {
    const { user } = await createUser({ name, age, email, newsletter });
    history.push({
      pathname: "/profile",
      state: { name, age, email, newsletter },
    });
  };
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Please enter your name"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="exampleForm.SelectCustomSizeSm">
        <Form.Label>newsLetter</Form.Label>
        <Form.Control
          as="select"
          size="sm"
          custom
          onChange={(e) => {
            if (e.target.value !== "0") {
              setNewsletter(e.target.value as User["newsletter"]);
            }
          }}
        >
          <option value="0">Choose...</option>
          {options.map((_item: any) => (
            <option>{_item.key}</option>
          ))}
        </Form.Control>
      </Form.Group>
      {/* <Link
        to={{
          pathname: "profile",
          state: { name, age, email, newsletter },
        }}
      > */}
      <Button variant="info" onClick={handleSignUp}>
        Next
      </Button>
      {/* </Link> */}
    </Form>
  );
};
