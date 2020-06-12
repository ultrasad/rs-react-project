//import React, { useState } from "react"
import React, { useContext } from "react";
import { ArticleContext } from "../context/AricleContext";
import Article from "../components/Article/Article"

const Articles = () => {
  /* const [articles, setArticles] = useState([
    { id: 1, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
    { id: 2, title: "post 2", body: "Quisque cursus, metus vitae pharetra" },
  ]); */

const { articles } = useContext(ArticleContext);

return (
    <div>
      {articles.map(article => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  )
}

export default Articles