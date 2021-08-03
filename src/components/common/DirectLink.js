import React from 'react'



const DirectLink = () => {
  const divStyle = {
    backgroundColor: "black",
    width: "100px",
    height: "100px",
  };
  return (
    <div class="direct-link" style={divStyle}>
      <a href="#mainContent" class="link_g">본문 바로가기</a>
      <a href="#gnbContent" class="link_g">메뉴 바로가기</a>
    </div>
  )
}

export default DirectLink



// const directLinkStyle = {
//   position: absolute;
//   top: -999px;
//   padding: 5px 10px;
//   font-weight: bold;
//   color: #fff;
//   background: #333;
//   text-decoration: none;
//   white-space: nowrap;
// }