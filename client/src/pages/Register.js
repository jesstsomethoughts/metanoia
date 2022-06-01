import "../assets/css/SignInRegister.css";
import React, { useState, useEffect } from "react";
import PageTitle from "../components/PageTitle";
import { Button, Form } from "react-bootstrap";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";

function Register() {
  const [user, setUser] = useState();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  async function registerUser(e) {
    e.preventDefault();
    console.log("Attempting Register");
    try {
      const auth = getAuth();

      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          userInfo.email,
          userInfo.password
        );
      // Signed in
      setUser(userCredential.user);
    } catch (error) {
      console.log("Register error: ", error);
    }
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

  return (
    <>
      <div className="sign-in-page">
        <PageTitle titleText={"Register"} />
        {user ? <div>Hello {user.email}</div> : <></>}
        <Form
          className="sign-in-form"
          onSubmit={registerUser}
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
          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
          ></Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Register;
