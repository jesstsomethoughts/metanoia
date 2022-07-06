import "../assets/css/SignInRegister.css";
import React, { useState } from "react";
import PageTitle from "../components/PageTitle";
import { Button, Form } from "react-bootstrap";

function Settings() {
  const [userSettings, setUserSettings] = useState({
    name: "",
    birthdate: "",
    grade: "",
    school: "",
    teacher: "",
    isTeacher: false,
  });
  const [isTeacher, setIsTeacher] = useState(false);

  async function submitUserSettings(e) {
    e.preventDefault();
    console.log("Updating user settings:", userSettings);
    try {
      // TODO send settings to Firebase.
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  function updateUserInfo(e) {
    const name = e.target.name;
    let value = e.target.value;
    const checked = e.target.checked;
    if (name === "isTeacher" && checked) {
      value = true;
      setIsTeacher(true);
      // Teachers don't have 'teacher' entry in db.
      setUserSettings({
        ...userSettings,
        teacher: "",
      });
    } else if (name === "isTeacher" && !checked) {
      value = false;
      setIsTeacher(false);
    }
    setUserSettings({
      ...userSettings,
      [name]: value,
    });
  }

  return (
    <>
      <div className="sign-in-page">
        <PageTitle titleText={"Settings"} />
        <Form
          className="sign-in-form"
          onSubmit={submitUserSettings}
        >
          <Form.Group
            className="mb-3"
          >
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Enter name"
              onChange={updateUserInfo}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
          >
            <Form.Label>Birthdate</Form.Label>
            <Form.Control
              name="birthdate"
              type="date"
              placeholder="Enter birthdate"
              onChange={updateUserInfo}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
          >
            <Form.Label>Grade</Form.Label>
            <Form.Control
              name="grade"
              type="number"
              placeholder="Enter grade number"
              onChange={updateUserInfo}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
          >
            <Form.Label>School</Form.Label>
            <Form.Control
              name="school"
              type="text"
              placeholder="Enter school name"
              onChange={updateUserInfo}
            />
          </Form.Group>
            {isTeacher ?
              <></>
              :
              <>
          <Form.Group
            className="mb-3"
          >
          <Form.Label>Teacher</Form.Label>
          <Form.Control
            name="teacher"
            type="text"
            placeholder="Enter teacher's name"
            onChange={updateUserInfo}
            />
          </Form.Group>
            </>
          }
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check name="isTeacher" type="checkbox" label="I am a teacher." onChange={updateUserInfo} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Update Settings
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Settings;
