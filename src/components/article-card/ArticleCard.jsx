import React from 'react'
import "./ArticleCard.scss";
import { truncate } from "../../helpers/truncate";
import { Link } from 'react-router-dom';

const ArticleCard = ({ image, title, description, author, createdAt, category, id}) => {
  return (
    <Link to={`/article/${id}`} className="product-link">
      <div className='article-card'>
        <div className='article__card-image'>
          <img src={image} alt="" />
        </div>
        <h3>{truncate(title, 35, "...")}</h3>
        <p>{truncate(description, 50, "...")}</p>
        <div>
          <p>{author}</p>
          <p>{createdAt}</p>
          <p>{category}</p>
        </div>
      </div>
    </Link>
  )
}

export default ArticleCard