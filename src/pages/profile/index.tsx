import { useLocation } from "react-router-dom";
interface User {
  name: string;
  age: number;
  email: string;
  newsletter: "daily" | "weekly" | "monthly";
}
const Profile = () => {
  const {
    state: { name, age, email, newsletter },
  } = useLocation<User>();
  return (
    <div>
      <h1>Welcome {name}</h1>
      <div>age: {age}</div>
      <div>email: {email}</div>
      <div>newsletter: {newsletter}</div>
    </div>
  );
};
export { Profile };
