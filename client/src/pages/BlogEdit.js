import "../assets/css/Forms.css";
import React, { useState, useEffect } from "react";
import PageTitle from "../components/PageTitle";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateBlogPost } from "../state/thunks/updateBlogPost";

import ReactMde from "react-mde";
import ReactMarkdown from "react-markdown";
import "react-mde/lib/styles/css/react-mde-all.css";

function BlogEdit() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  const blogData = useSelector((state) => state.blogData);
  const [postBody, setPostBody] = useState("");
  const [postInfo, setPostInfo] = React.useState({
    title: "",
    author: "",
    description: "",
    image: ""
  });
  const [selectedTab, setSelectedTab] = React.useState("write");

  useEffect(() => {
    if (!blogData?.posts) return

    const postIdToFind = window.location.href.split('blogedit/')[1];
    const postToUpdate = blogData.posts.filter((post) => post.id === postIdToFind)[0];

    if (!postToUpdate) return;

    const postTitle = document.querySelector(".title");
    const postDescription = document.querySelector(".description");
    const postAuthor = document.querySelector(".author");
    const postImg = document.querySelector(".image");

    postTitle.value = postToUpdate.title;
    postDescription.value = postToUpdate.description;
    postAuthor.value = postToUpdate.author;
    postImg.value = postToUpdate.image;
    setPostInfo({
      title: postToUpdate.title,
      description: postToUpdate.description,
      author: postToUpdate.author,
      image: postToUpdate.image
    });
    setPostBody(postToUpdate.body);
  }, [blogData.posts]);

  async function submitPost(e) {
    e.preventDefault();
    const id = window.location.href.split('blogedit/')[1];
    try {
      dispatch(updateBlogPost({
        id,
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
    const name = e.target.name;
    let value = e.target.value;
    setPostInfo({
      ...postInfo,
      [name]: value,
    });
  }

  // TODO
  // const SuccessMsg = () => {
  //   const blogData = useSelector((state) => state.blogData);
  //   return (
  //     blogData?.posts?.length ?
  //       <div className="success-message">Post updated!</div>
  //       :
  //       <></>
  //   );
  // }

  return (
    <>
      <div className="form-page">
        <PageTitle titleText={"Update Blog Post"} />
        {userData && userData.user && userData.user.uid ?
        <Form className="form-blog" onSubmit={submitPost}>
          <Form.Group
          className="mb-3">
            <Form.Label>Title</Form.Label>
              <Form.Control
                className="title"
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
                className="description"
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
                className="author"
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
                className="image"
                name="image"
                type="text"
                placeholder="Enter image URL or leave blank to use default image"
                onChange={updatePostInfo}
              />
          </Form.Group>
          <div className="markdown-container">
              <ReactMde
                className="mde"
                value={postBody}
                onChange={setPostBody}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={markdown =>
                  Promise.resolve(<ReactMarkdown children={markdown} />)
                }
              />
          </div>
          <Button variant="primary" type="submit">Update Post</Button>
          {/* <SuccessMsg/> */}
        </Form>
          :
          <div className="need-login-message">Please <Link to="/signin">sign in</Link> to edit a blog post.</div>
        }
      </div>
    </>
  );
}

export default BlogEdit;
