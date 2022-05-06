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
    const auth = useAuth();

    const from = state?.from?.pathname || "/";

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);
      const username = formData.get("email") as string;
      const password = formData.get("password") as string;

      auth.signin(username, password, () => {
        // Send them back to the page they tried to visit when they were
        // redirected to the login page. Use { replace: true } so we don't create
        // another entry in the history stack for the login page.  This means that
        // when they get to the protected page and click the back button, they
        // won't end up back on the login page, which is also really nice for the
        // user experience.
        navigate(from, { replace: true });
      });
    }

    return (
        <div>
          <p>You must log in to view the page at {from}</p>

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