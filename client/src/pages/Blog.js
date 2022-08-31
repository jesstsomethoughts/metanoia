import React, { useState, useEffect } from 'react';
import { Route, useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { reqBlogPosts } from '../state/thunks/reqBlogPosts';

// React components
import '../assets/css/blog.css';
import { Card, Button, Row, Col } from 'react-bootstrap';
import PageTitle from "../components/PageTitle";

import { deleteBlogPost } from '../state/thunks/deleteBlogPost';

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

const EditButton = ({id}) => {
  const userData = useSelector((state) => state.userData);
  const redirect = process?.env?.REACT_APP_REDIRECTS?.split(',');

  if (redirect && userData && userData.user && userData.user.email && redirect.includes(userData.user.email)) {
    return (
      <Button>
        <Link to={`/blogedit/${id}`} style={{"color": "white"}}>Edit Post</Link>
      </Button>
    )
  }

  return (
    <></>
  )
}

const DeleteButton = ({id}) => {
  const userData = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  const redirect = process?.env?.REACT_APP_REDIRECTS?.split(',');

  if (redirect && userData && userData.user && userData.user.email && redirect.includes(userData.user.email)) {
    return (
      <Button onClick={() => dispatch(deleteBlogPost(id))} style={{"backgroundColor": "red"}}>Delete Post</Button>
    )
  }

  return (
    <></>
  )
}

const Article = ({ author, date, img, title, body, id }) => {
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
        <EditButton id={id} />
        <DeleteButton id={id} />
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
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogData);

  useEffect(() => {
    (async () => {
      dispatch(reqBlogPosts());
    })();
  }, []);

  return (
    <>
      {blogs && blogs.posts ?
        <>
        <Route
        path="/blog"
        component={() => <Blog blogs={blogs.posts} />}
        exact
        />
      <Articles blogs={blogs.posts} />
        </>
      :
        <></>
      }
    </>
  )
};

export default Blog_Article_Merge;
