import "../assets/css/Forms.css";
import React, { useState, useEffect } from "react";
import PageTitle from "../components/PageTitle";
import { Button, Form } from "react-bootstrap";
import { registerUser } from "../state/thunks/registerUser";
import { useDispatch, useSelector } from "react-redux";

function Register() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  const [errorMessage, setErrorMessage] = useState(null);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  async function dispatchRegisterUser(e) {
    e.preventDefault();
    dispatch(registerUser(userInfo));
  }

  function updateUserInfo(e) {
    const type = e.target.type;
    const value = e.target.value;
    if (type === "email") {
      setUserInfo({
        ...userInfo,
        email: value,
      });
    } else if (type === "password") {
      setUserInfo({
        ...userInfo,
        password: value,
      });
    }
  }

  useEffect(() => {
    setErrorMessage(null);
    if (userData && userData.errorMsg) {
      if (userData.errorMsg.code === "auth/invalid-email") {
        setErrorMessage("Error: Invalid email");
      } else if (userData.errorMsg.code === "auth/weak-password") {
        setErrorMessage("Error: Password too weak");
      } else if (userData.errorMsg.code) {
        setErrorMessage("Error: Check Email and Password and try again");
      }
    }
  }, [userData]);

  return (
    <>
      <div className="form-page">
        <PageTitle titleText={"Register"} />
        <Form
          className="form"
          onSubmit={dispatchRegisterUser}
        >
          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={updateUserInfo}
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="formBasicPassword"
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={updateUserInfo}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>
          {errorMessage ? <div className="error">{errorMessage}</div> : <></>}
        </Form>
      </div>
    </>
  );
}

export default Register;
