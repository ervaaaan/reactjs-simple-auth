import axios from "axios";

export default function Register() {
  const submitRegisterForm = (event) => {
    event.preventDefault();

    const registerAPI = "http://localhost:8002/api/register";
    const formElement = document.querySelector("#registerForm");
    const formData = new FormData(formElement);
    const formDataJSON = Object.fromEntries(formData);
    const btnPointer = document.querySelector("#register-btn");

    btnPointer.innerHTML = "Please wait..";
    btnPointer.setAttribute("disabled", true);

    axios
      .post(registerAPI, formDataJSON)
      .then((response) => {
        btnPointer.innerHTML = "Register";
        btnPointer.removeAttribute("disabled");

        const token = response.data.data.token;

        if (!token) {
          alert(Object.values(response.data.data)[0]);
          return;
        }

        alert(response.data.message);
      })
      .catch((error) => {
        btnPointer.innerHTML = "Register";
        btnPointer.removeAttribute("disabled");
        ````;

        alert(error.message);
      });
  };

  return (
    <form id="registerForm" onSubmit={submitRegisterForm}>
      <h2 className="fw-normal mb-5">Sign Up</h2>
      <div className="mb-3">
        <label htmlFor="register-fname">First name</label>
        <input
          type="text"
          className="form-control"
          id="register-fname"
          name="first_name"
          required
          placeholder="First name"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="register-lname">Last name</label>
        <input
          type="text"
          className="form-control"
          id="register-lname"
          name="last_name"
          required
          placeholder="Last name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="register-email">Email</label>
        <input
          type="email"
          className="form-control"
          id="register-email"
          name="email"
          required
          placeholder="example@mail.co"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="register-password">Password</label>
        <input
          type="password"
          className="form-control"
          id="register-password"
          name="password"
          required
          placeholder="Password"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="register-cpassword">Confirm Password</label>
        <input
          type="password"
          className="form-control"
          id="register-cpassword"
          name="confirm_password"
          required
          placeholder="Confirm password"
        />
      </div>

      <div className="d-grid">
        <button
          type="submit"
          className="btn btn-primary mt-2"
          id="register-btn"
        >
          Register
        </button>
      </div>

      <p className="auth-link text-center">
        Already have an account? <a href="login">Login here</a>
      </p>
    </form>
  );
}
