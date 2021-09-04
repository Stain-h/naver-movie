import React from 'react'
import styled from 'styled-components'

const MusicTable = ({ music, keyword }) => {
  let row = [];
  console.log(music);
  music.forEach((m,idx) => {
    // 검색어에 해당되지 않는 값 표현 X
    if(m.title.indexOf(keyword) == -1){
      return;
    }
    // 배열에 추가
    row.push(
        <tr key={idx}>
            <td>{m.rank}</td>
            <td><img src={m.poster} width={"30"} height={"30"}/></td>
            <td>{m.title}</td>
            <td>{m.singer}</td>
        </tr>
    )
  });

  return (
    <div className="music_table">
      <h2>Music Top50</h2>
      <table>
        <caption className="screen_out">음원 순위 TOP 50</caption>
        <colgroup>
          <col></col>
          <col></col>
          <col></col>
        </colgroup>
        <thead>
          <tr>
            <th>순위</th>
            <th></th>
            <th>노래명</th>
            <th>가수명</th>
          </tr>
        </thead>
        <tbody>
          {row}
        </tbody>
      </table>

    </div>
  )
}

export default MusicTable
