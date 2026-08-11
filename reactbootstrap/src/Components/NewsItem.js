import React from 'react'
import image from "../assets/default.jpg"
const NewsItem = ({news}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
  <img src={news.urlToImage?news.urlToImage:image} style={{height:"200px",width:"360px"}} className="card-img-top" alt={news.title}/>
  <div className="card-body">
    <h5 className="card-title">{news.title.slice(0,50)}</h5>
    <p className="card-text">{news.description?news.description.slice(0,90):"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}</p>
    <a href={news.url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default NewsItem
