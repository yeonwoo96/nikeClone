import React from "react";
import styled from "styled-components";
import Circle from "./Circle";
import {
  TfiYoutube,
  TfiTwitterAlt,
  TfiFacebook,
  TfiInstagram,
} from "react-icons/tfi";
const FooterWrap = styled.div`
  position: absolute;
  bottom: 0;
  height: 300px; /* footer의 높이 */
  width: 100%;
  margin-top: 80px;
  background: #111;
  > div {
    margin: 0 auto;
    max-width: 1440px;
    box-sizing: border-box;
    padding: 40px 40px 0;
    color: #7e7e7e;
  }
  > hr {
    max-width: 1360px;
  }
  .top {
    display: flex;
    justify-content: space-between;
    li {
      color: #7e7e7e;
    }
    .ulWrap {
      display: flex;
      justify-content: space-between;
      gap: 6rem;
      .FirstUl {
        li {
          font-size: 14px;
          margin-bottom: 14px;
          color: #fff;
        }
      }
      .SecondUl,
      .ThirdUl {
        li {
          font-size: 12px;
          margin-bottom: 12px;
        }
        li:first-child {
          font-size: 14px;
          color: #fff;
        }
      }
    }
    .snsWrap {
      ul {
        display: flex;
        gap: 1rem;
      }
      .snsicon {
        font-size: 16px;
      }
      .youtube {
        font-size: 18px;
      }
    }
  }
`;
const Footer = () => {
  return (
    <FooterWrap>
      <div className="top">
        <div className="ulWrap">
          <ul className="FirstUl">
            <li>새로운 소식</li>
            <li>멤버가입</li>
            <li>매장안내</li>
            <li>나이키 저널</li>
          </ul>
          <ul className="SecondUl">
            <li>도움말</li>
            <li>로그인 안내</li>
            <li>주문배송조회</li>
            <li>반품 정책</li>
            <li>결제 방법</li>
            <li>공지사항</li>
            <li>문의하기</li>
          </ul>
          <ul className="ThirdUl">
            <li>ABOUT NIKE</li>
            <li>소식</li>
            <li>채용</li>
            <li>투자자</li>
            <li>지속가능성</li>
          </ul>
        </div>
        <div className="snsWrap">
          <ul>
            <li>
              <Circle>
                <TfiTwitterAlt className="snsicon" />
              </Circle>
            </li>
            <li>
              <Circle>
                <TfiFacebook className="snsicon" />
              </Circle>
            </li>
            <li>
              <Circle>
                <TfiYoutube className="snsicon youtube" />
              </Circle>
            </li>
            <li>
              <Circle>
                <TfiInstagram className="snsicon" />
              </Circle>
            </li>
          </ul>
        </div>
      </div>
    </FooterWrap>
  );
};

export default Footer;
