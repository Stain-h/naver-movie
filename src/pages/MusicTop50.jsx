import React, { useState, useEffect } from 'react'
import Box from '../components/box/Box'
import SearchBar from '../components/SearchBar'
import MusicTable from '../components/MusicTable'
import axios from 'axios'

const MusicTop50 = () => {

  const [music, setMusic] = useState([])
  const [keyword, setKeyword] = useState("");
  
  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://localhost:3000/music.json'
    }).then((res) => {
      setMusic(res.data)
    })
  },[])

  const onUserHandle = (ee) => {
    setKeyword(ee)
  }

  return (
    <article className="content-article">
      {/* <h1 className="br-title"><span className="ico_comm tit_bridge">LOGO</span></h1> */}
      <div className="wrap_search">
        <SearchBar placeHolder="검색어를 입력하세요" keyword={keyword} onUserInput={onUserHandle}></SearchBar>
      </div>
      {/* <Box width="200px" height="100px" title="Hello!!"></Box> */}
      <MusicTable music={music} keyword={keyword}></MusicTable>
      
    </article>
  )
}

export default MusicTop50
