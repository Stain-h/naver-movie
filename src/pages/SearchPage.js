import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { SearchBar, MovieItem } from '../components';
import styled from 'styled-components';

const Search = () => {

  const [movies, setMovies] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false)
  
  const getMovie = async (ss) => {
    const ID_KEY = 'sA6DKWhkyY6B1sPt9ykg';
    const SECRET_KEY = 'jIeE2IpabY';
    const search = ss;
    const content = document.querySelector('.cont_movie');

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
      setLoading(true);
      const response = await axios.get('/v1/search/movie.json', data)
      const res = response.data.items;
      setMovies(res);
      setLoading(false);
    }catch(e){
      alert(e)
    }
  }
    
  const onHandleChange = (ee) => {
    setKeyword(ee);
  }
  
  const onHandleSubmit = (ee) => {
    getMovie(ee);
  }

  console.log(movies.length);

  return (
    <article className="content-article">
      <div className="wrap_search">
        <SearchBar placeHolder="영화 제목을 검색하세요" onUserInput={onHandleChange} onUserSubmit={onHandleSubmit} keyword={keyword} />
      </div>
      <div className="cont_movie">
        {loading 
          ? <Loading>Loading...</Loading>
          : movies.map((movie,idx) => 
            <MovieItem 
                key={idx} 
                title={movie.title} subtitle={movie.subtitle} userRating={movie.userRating} 
                link={movie.link} pubDate={movie.pubDate} director={movie.director}
                image={movie.image}
            /> 
            )
        }
        </div>
    </article>
  )
}

const Loading = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`

export default Search
