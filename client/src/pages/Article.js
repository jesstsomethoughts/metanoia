import React from "react";
import blogList from "../data/blogList.json";
import { Route } from "react-router-dom";

import "./blog.css";

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

const Articles = () => {
  const selectPath = (path, articleTitle) => {
    return path === "" ? articleTitle.replace(/[^0-9a-zA-Z]/g, "") : path;
  };

  return (
    <>
      {blogList.map((value) => (
        <Route
          path={`/blog/${selectPath(value.path, value.title)}`}
          component={() => (
            <Article img={value.img} title={value.title} body={value.body} />
          )}
        />
      ))}
    </>
  );
};

export default Articles;
