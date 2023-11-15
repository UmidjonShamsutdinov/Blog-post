import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import instance from '../../services/api'
import "./Article.scss"

const Article = () => {
  
  const {id} = useParams()
  const [singleData, setSingleData] = useState({})
  console.log(singleData);
  useEffect(()=>{
    instance(`/api/posts/${id}`)
      .then(response => {
        setSingleData(response.data)
      })
  },[])
  return (
    <div className='article__wrapper'>
      <img src={singleData.image} alt="" width={1000}/>
      <h2>{singleData.title}</h2>
      <p>{singleData.description}</p>
    </div>
  )
}

export default Article