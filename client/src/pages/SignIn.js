import "../assets/css/Forms.css";
import React, { useState, useEffect } from "react";
import PageTitle from "../components/PageTitle";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../state/thunks/loginUser";
import { useHistory } from "react-router-dom";

function SignIn() {
  let history = useHistory();
  const userData = useSelector((state) => state.userData);
  const [errorMessage, setErrorMessage] = useState(null);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  async function dispatchLoginUser(e) {
    e.preventDefault();
    dispatch(loginUser(userInfo));
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
      if (userData.errorMsg.code === "auth/wrong-password") {
        setErrorMessage("Error: Incorrect Password");
      } else if (userData.errorMsg.code === "auth/user-not-found") {
        setErrorMessage("Error: User not found");
      } else if (userData.errorMsg.code) {
        setErrorMessage("Error: Check Email and Password and try again");
      }
    }

    if (userData && userData.user && userData.user.uid) {
      // Successful sign in.
      const redirect = process?.env?.REACT_APP_REDIRECTS?.split(',');
      if (redirect && redirect.includes(userData.user.email)) {
        history.push("/blogcreate");
      } else {
        history.push("/");
      }
    }
  }, [userData]);

  return (
    <>
      <div className="form-page">
        <PageTitle titleText={"Sign In"} />
        <Form className="form" onSubmit={dispatchLoginUser}>
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
          {errorMessage ? <div className="error">{errorMessage}</div> : <></>}
        </Form>
      </div>
    </>
  );
}

export default SignIn;
