import "../assets/css/Forms.css";
import React, { useState } from "react";
import PageTitle from "../components/PageTitle";
import { Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";

import ReactMde from "react-mde";
import ReactMarkdown from "react-markdown";
import "react-mde/lib/styles/css/react-mde-all.css";

function BlogCreate() {
  const userData = useSelector((state) => state.userData);
  const [postTitle, setPostTitle] = useState("");
  const [value, setValue] = React.useState("");
  const [selectedTab, setSelectedTab] = React.useState("write");

  // async function submitPost(e) {
  //   e.preventDefault();
  //   try {
  //     // TODO use redux thunk to send to store and firebase.
  //   } catch (error) {
  //     console.log("Error: ", error);
  //   }
  // }

  // function updatePostInfo(e) {
  //   const name = e.target.name;
  //   let value = e.target.value;
  //   setPostInfo({
  //     ...postInfo,
  //     [name]: value,
  //   });
  // }

  return (
    <>
      <div className="form-page">
        <PageTitle titleText={"Create New Blog Post"} />
        {userData && userData.user && userData.user.uid ?
          <Form className="form-blog">
            <Form.Group>
              <Form.Label>Post Title</Form.Label>
              <Form.Control
                name="title"
                type="text"
                placeholder="Enter title"
                onChange={setPostTitle}
              />
            </Form.Group>
            <div className="markdown-container" style={{ "maxWidth": "800px", "margin": "0px auto" }}>
              <ReactMde
                value={value}
                onChange={setValue}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={markdown =>
                  Promise.resolve(<ReactMarkdown children={markdown} />)
                }
              />
            </div>
            <Button>Submit Post</Button>
          </Form>
          :
          <div className="need-login-message">Please log in or register to create a blog post.</div>
        }
      </div>
    </>
  );
}

export default BlogCreate;
