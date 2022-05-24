import React from 'react';
import './Nav.scss';

const Nav = () => {
  return (
    <div className="Nav">
      <div className="title">
        <div className="bigTitle">To We</div>
        <div className="smallTitle">ㅡㅡㅡㅡㅡㅡ studio ㅡㅡㅡㅡㅡㅡ</div>
      </div>
      <div className="category">
        <span className="teamInfor">팀이름</span>
        <span className="store">스토어</span>
        <span>게시판</span>
        <span>나중에 추가</span>
      </div>
      <div className="navIcons">
        <i className="fa-solid fa-magnifying-glass" />
        <i className="fa-solid fa-user" />
        <i className="fa-solid fa-cart-shopping" />
      </div>
    </div>
  );
};

export default Nav;
