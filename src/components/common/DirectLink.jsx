import React from 'react';
import './DirectLink.scss';

const DirectLink = () => {

  return (
    <div className="direct-link">
      <a href="#mainContent" className="link_g">본문 바로가기</a>
      <a href="#gnbContent" className="link_g">메뉴 바로가기</a>
    </div>
  )
}

export default DirectLink
