import React, { useState, useEffect } from 'react';
import { Route, useHistory } from 'react-router-dom';

// React components
import '../assets/css/blog.css';
import { Card, Button, Row, Col } from 'react-bootstrap';

//react dom

//firebase
import { db } from '../firebase.js';
import { collection, getDocs } from 'firebase/firestore';

const BlogCard = ({ img, title, about, link }) => {
  const history = useHistory();

  return (
    <Card className="blogCardStyle">
      <div class="cursorHover">
        <Card.Img
          variant="top"
          src={img}
          onClick={() => history.push('/blog/' + link)}
        />
      </div>
      <Card.Body>
        <Card.Title> {title} </Card.Title>
        <Card.Text>{about}</Card.Text>
        <Button
          size="sm"
          className="w-100"
          variant="outline-primary"
          onClick={() => history.push('/blog/' + link)}
        >
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
};

const Blog = ({ blogs }) => {
  const selectPath = (path, articleTitle) => {
    return path === '' ? articleTitle.replace(/[^0-9a-zA-Z]/g, '') : path;
  };

  return (
    <>
      <div className = "blog_background">
        <h2 class="header">Blog</h2>
      </div>
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

const Article = ({ img, title, body }) => {
  return (
    <>
      <h1 class="header">{title}</h1>
      <div class="article-body">
        <img class="article-img" src={img} />
        <p>{body}</p>
      </div>
    </>
  );
};

const Articles = ({ blogs }) => {
  const selectPath = (path, articleTitle) => {
    return path === '' ? articleTitle.replace(/[^0-9a-zA-Z]/g, '') : path;
  };

  return (
    <>
      {blogs.map((blog) => (
        <Route
          path={`/blog/${selectPath(blog.path, blog.title)}`}
          component={() => (
            <Article img={blog.image} title={blog.title} body={blog.body} />
          )}
        />
      ))}
    </>
  );
};

const Blog_Article_Merge = () => {
  const [blogs, setBlogs] = useState([]);

  const blogCollectionRef = collection(db, 'blogs');
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
      <Route path="/blog" component={() => <Blog blogs={blogs} />} exact />
      <Articles blogs={blogs} />
    </>
  );
};

export default Blog_Article_Merge;
