import React, { useState, useEffect } from 'react';
import { Route, useHistory } from 'react-router-dom';

// React components
import '../assets/css/blog.css';
import { Card, Button, Row, Col } from 'react-bootstrap';
import PageTitle from "../components/PageTitle";

//firebase
import { db } from '../firebase.js';
import { collection, getDocs } from 'firebase/firestore';

import ReactMarkdown from "react-markdown";

const BlogCard = ({ img, title, about, link }) => {
  const history = useHistory();

  const hasImg =
    img !== "" && img !== undefined && img !== null;

  return (
    <Card className="blogCardStyle">
      {hasImg ? (
        <div className="cursorHover">
          <Card.Img
            variant="top"
            src={img}
            onClick={() => history.push("/blog/" + link)}
          />
        </div>
      ) : (
        <></>
      )}
      <Card.Body>
        <Card.Title> {title} </Card.Title>
        <Card.Text>{about}</Card.Text>
        <Button
          size="sm"
          className="w-100 btn-blog-card-custom"
          variant="outline-primary"
          onClick={() => history.push("/blog/" + link)}
        >
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
};

const Blog = ({ blogs }) => {
  const selectPath = (path, articleTitle) => {
    return path === ""
      ? articleTitle.replace(/[^0-9a-zA-Z]/g, "")
      : path;
  };

  return (
    <>
      <PageTitle titleText="Blog" />
      <Row xs={1} md={4} className="g-4 m-4">
        {blogs.map((blog) => (
          <Col key={selectPath(blog.path, blog.title)}>
            <BlogCard
              img={blog.image}
              title={blog.title}
              about={blog.description}
              article={blog.article}
              link={selectPath(blog.path, blog.title)}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

const Article = ({ author, date, img, title, body }) => {
  body = body.replaceAll(`\\`, "\n");

  // Firebase stores dates with seconds, but JS needs milliseconds.
  const dateToMilliseconds = date.seconds * 1000;
  const newDate = new Date(dateToMilliseconds);
  const strDate = new Date(newDate).toLocaleDateString(
    "en-US"
  );
  date = strDate;
  const hasImg =
    img !== "" && img !== undefined && img !== null;
  return (
    <>
      {hasImg ? (
        <img className="article-img" src={img} />
      ) : (
        <></>
      )}
      <h1 className="article-header">{title}</h1>
      <div className="article-body">
        <div className="article-author-date">{author}</div>
        <div className="article-author-date">{date}</div>
        <ReactMarkdown children={body} />
      </div>
    </>
  );
};

const Articles = ({ blogs }) => {
  const selectPath = (path, articleTitle) => {
    return path === ""
      ? articleTitle.replace(/[^0-9a-zA-Z]/g, "")
      : path;
  };

  return (
    <>
      {blogs.map((blog) => (
        <Route
          key={blog.id}
          path={`/blog/${selectPath(
            blog.path,
            blog.title
          )}`}
          component={() => (
            <Article
              id={blog.id}
              author={blog.author}
              date={blog.date}
              img={blog.image}
              title={blog.title}
              body={blog.body}
            />
          )}
        />
      ))}
    </>
  );
};

const Blog_Article_Merge = () => {
  const [blogs, setBlogs] = useState([]);

  const blogCollectionRef = collection(
    db,
    "blogs-markdown"
  );
  useEffect(() => {
    const getBlogs = async () => {
      const data = await getDocs(blogCollectionRef);
      setBlogs(
        data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    };
    getBlogs();
  }, []);

  return (
    <>
      <Route
        path="/blog"
        component={() => <Blog blogs={blogs} />}
        exact
      />
      <Articles blogs={blogs} />
    </>
  );
};

export default Blog_Article_Merge;
