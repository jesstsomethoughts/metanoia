import React from "react";

import "./blog.css";

// React components
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import blogList from "../data/blogList.json";
import { useHistory } from "react-router-dom";

const blogListReversed = blogList.reverse();

const BlogCard = ({ img, title, about, link }) => {
  const history = useHistory();

  return (
    <Card className="blogCardStyle">
      <div class="cursorHover">
        <Card.Img
          variant="top"
          src={img}
          onClick={() => history.push("/blog/" + link)}
        />
      </div>
      <Card.Body>
        <Card.Title> {title} </Card.Title>
        <Card.Text>{about}</Card.Text>
        <Button
          size="sm"
          className="w-100"
          variant="outline-primary"
          onClick={() => history.push("/blog/" + link)}
        >
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
};

const Blog = () => {
  const selectPath = (path, articleTitle) => {
    return path === "" ? articleTitle.replace(/[^0-9a-zA-Z]/g, "") : path;
  };

  return (
    <>
      <h1 class="header">Blog</h1>
      <Row xs={1} md={4} className="g-4 m-4">
        {blogListReversed.map((value) => (
          <Col>
            <BlogCard
              img={value.img}
              title={value.title}
              about={value.about}
              article={value.article}
              link={selectPath(value.path, value.title)}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Blog;
