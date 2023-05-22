import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem("user-email");
    if (email !== null) {
      navigate("/");
    }
  }, [navigate]);

  const submitLoginForm = (event) => {
    event.preventDefault();

    const loginAPI = "http://localhost:8002/api/login";
    const formElement = document.querySelector("#loginForm");
    const formData = new FormData(formElement);
    const formDataJSON = Object.fromEntries(formData);
    const btnPointer = document.querySelector("#login-btn");

    btnPointer.innerHTML = "Please wait..";
    btnPointer.setAttribute("disabled", true);

    axios
      .post(loginAPI, formDataJSON)
      .then((response) => {
        btnPointer.innerHTML = "Login";
        btnPointer.removeAttribute("disabled");

        const data = response.data.data;

        if (!data.token) {
          alert("Unable to login. Please try after some time.");
          return;
        }

        localStorage.clear();
        localStorage.setItem("user-token", data.token);
        localStorage.setItem("user-first-name", data.first_name);
        localStorage.setItem("user-last-name", data.last_name);
        localStorage.setItem("user-email", data.email);

        setTimeout(() => {
          navigate("/");
        }, 500);
      })
      .catch((error) => {
        btnPointer.innerHTML = "Login";
        btnPointer.removeAttribute("disabled");

        alert(error.message);
      });
  };

  return (
    <form id="loginForm" onSubmit={submitLoginForm}>
      <h2 className="fw-normal mb-5">Sign In</h2>
      <div className="mb-3">
        <label htmlFor="login-email">Email</label>
        <input
          type="email"
          className="form-control"
          id="login-email"
          name="email"
          required
          placeholder="example@mail.co"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="login-password">Password</label>
        <input
          type="password"
          className="form-control"
          id="login-password"
          name="password"
          required
          placeholder="Password"
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary mt-2" id="login-btn">
          Login
        </button>
      </div>

      <p className="auth-link text-center">
        Don't have account? <a href="register">Join us now</a>
      </p>
    </form>
  );
}
