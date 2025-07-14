import React, { useState } from "react";

const VALID_USERNAME = "user";
const VALID_PASSWORD = "password";

const LoginPage = () => {
  // functions for handling username input
  const [userName, setUserName] = useState("");

  // functions for handling password input
  const [pass, setPass] = useState("");

  // functions for handling validation of username and password
  const [validated, setValidated] = useState(false);

  // functions to check errors
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "username") setUserName(value);
    if (name === "password") setPass(value);
  };

  //   const handleChangeUserName = (event) => {
  //     setUserName(event.target.value);
  //   };

  //   const handleChangePassword = (event) => {
  //     setPass(event.target.value);
  //   };

  // function to handle submission and validation
  const handleSubmit = (event) => {
    event.preventDefault();
    if (userName === VALID_USERNAME && pass === VALID_PASSWORD) {
      setValidated(true);
    } else {
      setError("Invalid username or password");
      setValidated(false);
    }
  };

  return (
    <div>
      <br />
      {validated ? (
        <h2>Welcome, {userName}!</h2>
      ) : (
        <form onSubmit={handleSubmit}>
          {error && <p>{error}</p>}
          <label htmlFor="username">Username: </label>
          <input
            className="input"
            type="text"
            name="username"
            placeholder="username"
            value={userName}
            onChange={handleChange}
            required
          ></input>
          <br />
          <label htmlFor="password">Password: </label>
          <input
            className="input"
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
            required
          ></input>
          <br />
          <button className="submit-btn">Submit</button>
        </form>
      )}
    </div>
  );
};

export default LoginPage;
