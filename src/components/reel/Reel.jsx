import React, { useEffect, useState } from 'react';
import "./Reel.scss";
import instance from "../../services/api";
import { Container } from '../../utils';
import ArticleCard from '../article-card/ArticleCard';

const Reel = () => {
    const [data, setData] = useState([]);
    

    useEffect(() => {
        instance("/api/posts")
            .then(response => {
                setData(response.data.data)
            })
            .catch(error => console.log(error))
    }, [])

  return (
    <div className='home__reel'>
        <Container>
            <h2>Today's trending articles</h2>
            <div className="reel__wrapper">
                {
                    data.map(article => 
                        <ArticleCard 
                            image={article.image}
                            title={article.title}
                            description={article.description}
                            author={article.author}
                            createdAt={article.createdAt}
                            category={article.category}
                            id={article._id}
                        />
                    )
                }
            </div>
        </Container>
    </div>
  )
}

export default Reel