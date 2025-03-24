import React, { useEffect, useRef, useState } from 'react'
import "./TitleCards.css"
import { Link } from 'react-router-dom';

const TitleCards = ({ title,category }) => {
  const [apiData,setApiData]=useState([])

  const cardsRef = useRef();
  const url = `https://api.themoviedb.org/3/movie/${category?category:'now_playing'}?language=en-US&page=1`;
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0N2Q1MzE1NTExNGJiMjJjNjEyY2EyNTU1NzMwZDg5NCIsIm5iZiI6MTc0MTg1NTA1MC4zODksInN1YiI6IjY3ZDI5OTRhZDRmNzQxMzczMjYwZDAxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5d5Pw_SyknP4XvDKRrQKhCwYYP_2Z7OulLMtdSy-amQ'
    }
  };


  const handlewheel = (event) => {
    event.preventDefault()
    cardsRef.current.scrollLeft += event.deltaY;
  }
  useEffect(() => {
    
    fetch(url, options)
    .then(res => res.json())
    .then(res => {setApiData(res.results);console.log(res.results); }) 
    
    .catch(err => console.error(err));
    cardsRef.current.addEventListener("wheel", handlewheel)
   
  },[])

  

  return (
    <div className='titleCards'>
      <h2>{title ? title : "Popular on Netflix"} </h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return <Link to={`/player/${card.id}`} className='card' key={index} >
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards
