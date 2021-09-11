import React, { useState, useEffect } from 'react'
import { Box, SearchBar } from '../components'
import axios from 'axios'
import './pages.scss'

const Home = () => {

  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState([]);


      const fetchMovie = async () => {
        // client 키
        const ID_KEY = 'sA6DKWhkyY6B1sPt9ykg';
        const SECRET_KEY = 'jIeE2IpabY';
        // query
        const search = keyword;
        const data = {
          params: {
            // query: search,
            query: '아이언맨',
            display: 20
          },
          headers: {
            'X-Naver-Client-Id': ID_KEY,
            'X-Naver-Client-Secret': SECRET_KEY
          }
        }

        try {
          setLoading(true);
          const response = await axios.get('/v1/search/news.json', data)
          setMovie(response.data);
          
          console.log('통과');
        } catch(e) {
          console.error(e)
        }
        setLoading(false);
      }
    
    console.log(movie);

  const onUserHandle = (ee) => {
    setKeyword(ee.target.value)
  }

  const onSubmit = () => {
    fetchMovie();
  }

  return (
    <article className="content-article">
      {/* <h1 className="br-title"><span className="ico_comm tit_bridge">LOGO</span></h1> */}
      <div className="wrap_search">
          {/* <SearchBar placeHolder="검색어를 입력하세요" keyword={keyword} onUserInput={onUserHandle} onUserSubmit={onHandleSubmit}></SearchBar> */}
          <div className="box_inp">
            <form className="form_sch" onSubmit={onSubmit}>
              <label htmlFor="inpSearch" className="screen_out">검색어 입력</label>
              <input type="text" id="inpSearch" placeholder="검색어를 입력하세요" value={keyword} onChange={onUserHandle}></input>
            </form>
          </div>
      </div>
      {/* <Box width="200px" height="100px" title="Hello!!"></Box> */}
      
    </article>
  )
}

export default Home
