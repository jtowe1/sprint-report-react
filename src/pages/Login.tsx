import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface LocationState {
    from: {
      pathname: string;
    };
  }

  const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state as LocationState;
    const { signin, error } = useAuth();

    const from = state?.from?.pathname || "/";

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);
      const username = formData.get("email") as string;
      const password = formData.get("password") as string;

      signin(username, password, () => {
        navigate(from, { replace: true });
      });
    }

    return (
        <div>
          <p>You must log in to view the page at {from}</p>
            <p>error: {error}</p>
          <form onSubmit={handleSubmit}>
            <label>
              Email: <input name="email" type="text" />
            </label>{" "}
            <label>
              Password: <input name="password" type="password" />
            </label>{" "}
            <button type="submit">Login</button>
          </form>
        </div>
    );
}

export default LoginPage;