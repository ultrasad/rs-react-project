import React, { createContext, useState } from "react";

export const ArticleContext = createContext();

const ArticleProvider = ({ children }) => {
  const [articles, setArticles] = useState([
    { id: 1, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
    { id: 2, title: "post 2", body: "Quisque cursus, metus vitae pharetra" }
  ]);
  const saveArticle = article => {
    const newArticle = {
      id: Math.random(), // not really unique but it's just an example
      title: article.title,
      body: article.body
    };
    setArticles([...articles, newArticle ]);
  };
  return (
    <ArticleContext.Provider value={{ articles, saveArticle }}>
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticleProvider;