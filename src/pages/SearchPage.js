import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Search = () => {

  // const [movie, setMovie] = useState([])
  // const [ss, setSs] = useState("")

  function getSearchMovie () {

    const ID_KEY = "sA6DKWhkyY6B1sPt9ykg";
    const SECRET_KEY = "jIeE2IpabY";
    let search = "아이언맨";

    axios({
      method: 'GET',
      url: '',
      params: {
        query: search,
        display: 20
      },
      headers: {
        'X-Naver-Client-Id': ID_KEY,
        'X-Naver-Client-Secret': SECRET_KEY
      }
    }).then(res => console.log(res))
  }

  getSearchMovie();

  return (
    <article className="content-article">
        This is Search page
    </article>
  )
}

export default Search
