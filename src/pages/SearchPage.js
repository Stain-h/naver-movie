import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { MovieItem } from '../components';

const Search = () => {

  const [movies, setMovies] = useState([]);
  const [keyword, setKeyword] = useState('');
  
  const getMovie = async (keyword) => {
    const ID_KEY = 'sA6DKWhkyY6B1sPt9ykg';
    const SECRET_KEY = 'jIeE2IpabY';
    const search = keyword;

    const data = {
      params: {
        query: search,
        display: 20
      },
      headers: {
        'X-Naver-Client-Id': ID_KEY,
        'X-Naver-Client-Secret': SECRET_KEY
      }
    }
    
    try{
      const response = await axios.get('/v1/search/movie.json', data)
      setMovies(response.data.items);
    }catch(e){
      alert(e)
    }
  }
    
  const onHandleChange = (e) => {
    setKeyword(e.target.value);
  }
  
  const onHandleSubmit = (e) => {
    e.preventDefault();
    getMovie(keyword);
    console.log(keyword);
  }

  return (
    <article className="content-article">
        <form onSubmit={onHandleSubmit}>
          <input type="text" placeholder="영화 제목을 검색하세요" onChange={onHandleChange}></input>
        </form>
        <div className="cont_movie">
          {movies.map((movie,idx) => 
              <MovieItem 
                  key={idx} 
                  title={movie.title} subtitle={movie.subtitle} userRating={movie.userRating} 
                  link={movie.link} pubDate={movie.pubDate} director={movie.director}
                  image={movie.image}
              />
            )}
        </div>
    </article>
  )
}

export default Search
