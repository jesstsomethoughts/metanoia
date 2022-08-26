import "../assets/css/Forms.css";
import React, { useState } from "react";
import PageTitle from "../components/PageTitle";
import { Button, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { newBlogPost } from "../state/thunks/newBlogPost";

import ReactMde from "react-mde";
import ReactMarkdown from "react-markdown";
import "react-mde/lib/styles/css/react-mde-all.css";

function BlogCreate() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  const [postBody, setPostBody] = useState("");
  const [postTitle, setPostTitle] = React.useState("");
  const [selectedTab, setSelectedTab] = React.useState("write");

  async function submitPost(e) {
    e.preventDefault();
    try {
      dispatch(newBlogPost({
        title: postTitle,
        body: postBody,
        author: userData["user"]["providerData"][0]["displayName"] || "Metanoia",
        description: ""
      }))
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  function updatePostTitle(e) {
    setPostTitle(e.target.value);
  }

  return (
    <>
      <div className="form-page">
        <PageTitle titleText={"Create New Blog Post"} />
        {userData && userData.user && userData.user.uid ?
          <Form className="form-blog" onSubmit={submitPost}>
            <Form.Group>
              <Form.Label>Post Title</Form.Label>
              <Form.Control
                name="title"
                type="text"
                placeholder="Enter title"
                onChange={updatePostTitle}
              />
            </Form.Group>
            <div className="markdown-container">
              <ReactMde
                value={postBody}
                onChange={setPostBody}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={markdown =>
                  Promise.resolve(<ReactMarkdown children={markdown} />)
                }
              />
            </div>
            <Button variant="primary" type="submit">Submit Post</Button>
          </Form>
          :
          <div className="need-login-message">Please <Link to="/signin">sign in</Link> to create a blog post.</div>
        }
      </div>
    </>
  );
}

export default BlogCreate;
