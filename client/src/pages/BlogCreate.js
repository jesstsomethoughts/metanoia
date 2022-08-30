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
  const [postInfo, setPostInfo] = React.useState({
    title: "",
    author: "",
    description: "",
    image: ""
  });
  const [selectedTab, setSelectedTab] = React.useState("write");

  async function submitPost(e) {
    e.preventDefault();
    try {
      dispatch(newBlogPost({
        title: postInfo["title"],
        body: postBody,
        author: postInfo["author"] || "Metanoia",
        description: postInfo["description"],
        image: postInfo["image"] || "https://firebasestorage.googleapis.com/v0/b/metanoia-books.appspot.com/o/metanoia_newlogo.png?alt=media&token=1941dac6-40e5-4179-8ba6-900820abfaa4"
      }));
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  function updatePostInfo(e) {
    const field = e.target.name;
    const val = e.target.value;
    setPostInfo({
      ...postInfo,
      [field]: val,
    });
  }

  const SuccessMsg = () => {
    const blogData = useSelector((state) => state.blogData);
    return (
      blogData?.posts?.length ?
        <div className="success-message">Post created!</div>
        :
        <></>
    );
  }

  return (
    <>
      <div className="form-page">
        <PageTitle titleText={"Create New Blog Post"} />
        {userData && userData.user && userData.user.uid ?
          <Form className="form-blog" onSubmit={submitPost}>
            <Form.Group
            className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="title"
                type="text"
                placeholder="Enter title"
                onChange={updatePostInfo}
              />
            </Form.Group>
            <Form.Group
              className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                type="text"
                placeholder="Enter description"
                onChange={updatePostInfo}
                />
            </Form.Group>
            <Form.Group
              className="mb-3">
              <Form.Label>Author</Form.Label>
              <Form.Control
                name="author"
                type="text"
                placeholder="Enter author name or leave blank for 'Metanoia'"
                onChange={updatePostInfo}
                />
            </Form.Group>
            <Form.Group
              className="mb-3">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                name="image"
                type="text"
                placeholder="Enter image URL or leave blank to use default image"
                onChange={updatePostInfo}
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
            <SuccessMsg/>
          </Form>
          :
          <div className="need-login-message">Please <Link to="/signin">sign in</Link> to create a blog post.</div>
        }
      </div>
    </>
  );
}

export default BlogCreate;
