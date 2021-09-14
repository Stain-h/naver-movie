import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { SearchBar, MovieItem } from '../components';

const Search = () => {

  const [movies, setMovies] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isResultEmpty, setIsResultEmpty] = useState(false)
  
  const getMovie = async (ss) => {
    const ID_KEY = 'sA6DKWhkyY6B1sPt9ykg';
    const SECRET_KEY = 'jIeE2IpabY';
    const search = ss;

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
      setIsLoading(true);
      const response = await axios.get('/v1/search/movie.json', data)
      const res = response.data.items;
      setIsLoading(false);
      if(res.length === 0){
        setIsResultEmpty(true);
      }else{
        setMovies(res);
        setIsResultEmpty(false);
      }
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


  return (
    <article className="content-article">
      <div className="wrap_search">
        <SearchBar placeHolder="영화 제목을 검색하세요" onUserInput={onHandleChange} onUserSubmit={onHandleSubmit} keyword={keyword} />
      </div>
      <div className="cont_movie">
        {
          isResultEmpty 
          ? <p>검색결과가 없습니다.</p> 
          : <MovieItem movies={movies} isLoading={isLoading} />
        }
      </div>
    </article>
  )
}


export default Search
