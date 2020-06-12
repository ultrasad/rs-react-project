//import React, { Fragment } from "react";
import React from "react";
import ArticleProvider from "../context/AricleContext";
import Articles from "../containers/Articles";
import AddArticle from "../components/Article/AddArticle";


function Article() {
  return (
    <ArticleProvider>
       <AddArticle />
       <Articles />
    </ArticleProvider>
    )
}

export default Article