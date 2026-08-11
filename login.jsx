import { useContext } from "react";
import UserContext from "./context/userContext";

function Login() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h1>Login Page</h1>

      <button
        onClick={() => {
          setUser({ name: "John Doe" });
        }}
      >
        Press to Login
      </button>

      <h2>{user?.name}</h2>
    </div>
  );
}

export default Login;