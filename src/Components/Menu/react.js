function LoginForm() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  function emailEnteredHandler(event) {
    setUserData({
      email: event.target.value,
      password: userData.password,
    });
  }
  function passwordEnteredHandler(event) {
    setUserData({
      email: userData.email,
      password: event.target.value,
    });
  }
  // ... code omitted, because the returned JSX code is the same as before
}
import { useState } from "react";
const stateData = useState("");

const errorMessage = stateData[0];

const setErrorMessage = stateData[1];

  return (

    <form>

      <input

        type="email"

        placeholder="Your email"

        onBlur={emailEnteredHandler} />

      <input

        type="password"

        placeholder="Your password"

        onBlur={passwordEnteredHandler} />

    </form>

  );
