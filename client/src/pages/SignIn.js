import "../assets/css/Forms.css";
import React, { useState, useEffect } from "react";
import PageTitle from "../components/PageTitle";
import { Button, Form } from "react-bootstrap";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

function SignIn() {
  const [user, setUser] = useState();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  async function loginUser(e) {
    e.preventDefault();
    console.log("Attempting signin");
    try {
      const auth = getAuth();

      const userCredential =
        await signInWithEmailAndPassword(
          auth,
          userInfo.email,
          userInfo.password
        );
      // Signed in
      setUser(userCredential.user);
    } catch (error) {
      console.log("SignIn error: ", error);
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
      <div className="form-page">
        <PageTitle titleText={"Sign In"} />
        {user ? <div>Hello {user.email}</div> : <></>}
        <Form className="form" onSubmit={loginUser}>
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
            Sign In
          </Button>
        </Form>
      </div>
    </>
  );
}

export default SignIn;
