import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

const NewsBoard = ({category}) => {
    const [articles,setArticles] = useState([]);

    useEffect(()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=7b9a4b110aa64ed3979cd89ee23d7c91`;
        fetch(url).then(response=>response.json()).then(data=>setArticles(data.articles));    
    },[category])
  return (
    <div>
      <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
      {articles.map((news,index)=>{
        return <NewsItem key={index} news={news}/>
      })}
    </div>
  )
}

export default NewsBoard
