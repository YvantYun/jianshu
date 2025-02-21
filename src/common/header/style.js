import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`  
  z-index: 1;
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;

`;

export const Logo = styled.div`
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  padding-right: 70px;
  height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
    .iconfont {
      font-size: 24px;
      font-weight: 400;
      text-align: center;
      color: #969696;
    }
  }
  &.active {
    color: #ea6f5a;
  }
`;



export const SerachWrapper = styled.div`
  float: left;
  position: relative;
  .zoom {
    position: absolute;
    bottom: 4px;
    right: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    color:#969696;
    &.focused {
      background-color: #777;
      color: #fff;
    }
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  &.slide-enter {
    transition: all .25s ease-out;
  }
  &.slide-enter-active {
    width: 320px;
  }
  &.slide-exit {
    transition: all .25s ease-out;
  }
  &.slide-exit-active {
    width: 240px;
  }
  width: 240px;
  height: 38px;
  outline: none;
  border: none;
  border-radius: 19px;
  background: #eee;
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 30px 0 20px;
  box-sizing: border-box;
  color: #eee;
  font-size: 14px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 320px;
    
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  left: 20px;
  top: 56px;
  width: 200px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0,0,0,.3);
  border-radius: 4px;
  background-color: #fff;
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border: 8px solid transparent;
    border-bottom-color: #fff;
    left: 24px;
    bottom: 99%;
  }
`;

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all .2s ease-in;
    transform-origin: center center;
  }
  &:hover {
    color:#333;
  }
`;

export const SearchInfoList = styled.div`
  overflow: hidden;
`;

export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  line-height: 20px;
  margin-right: 10px;
  margin-bottom: 15px;
  padding: 0 5px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
  &:hover {
    color:#333;
    border-color: #b4b4b4;
    cursor: pointer;
  }

`;

export const Addtion = styled.div`
  position: absolute;
  right: 0;
  top:0;
  height: 56px;
`;

export const Button = styled.button`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border: 1px solid #ec6149;
  border-radius: 19px;
  font-size: 15px;
  
  &.reg {
    color: #ec6149;
  }
  &.writting {
    background: #ec6149;
    color: #fff;
  }
`;
