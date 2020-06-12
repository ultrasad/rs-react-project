//import React, { useState } from "react"
import React, { useState, useContext } from "react";
import { ArticleContext } from "../../context/AricleContext";
import "./AddArticle.css"

const AddArticle = () => {
  const { saveArticle } = useContext(ArticleContext);
  const [article, setArticle] = useState();

  const handleArticleData = e => {
    setArticle({
      ...article,
      [e.target.id]: e.target.value,
    })
  }
  const addNewArticle = e => {
    e.preventDefault()
    saveArticle(article); // The logic will come later
  }

  return (
    <form onSubmit={addNewArticle} className="add-article">
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={handleArticleData}
      />
      <input
        type="text"
        id="body"
        placeholder="Body"
        onChange={handleArticleData}
      />
      <button>Add article</button>
    </form>
  )
}
export default AddArticle