import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HiOutlineHeart, HiOutlineShoppingBag } from "react-icons/hi";
const NoticeArr = [
  {
    Notice: "멤버데이즈 (5/1~5/7) 안내",
  },
  { Notice: "반품 및 환불 지연 안내" },
];
const HeaderWrap = styled.div`
  & > div {
    padding: 0 2%;
  }
`;
const Search = styled.input`
  &:hover {
    background: #e5e5e5;
  }
  &::before {
  }
  background: #f5f5f5;
  width: 180px;
  height: 40px;
  padding: 8px 48px;
  box-sizing: border-box;
  border: none;
  border-radius: 100px;
`;
const Header1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 36px;
  background: #f5f5f5;
  .Left1 {
    display: flex;
    li {
      width: 48px;
    }
    svg {
      width: auto;
      height: 24px;
    }
  }
  .Right1 {
    display: flex;
    align-items: center;
    li {
      text-align: center;
      font-size: 12px;
      &::after {
        content: " |";
        margin: 0 8px;
      }
    }

    li:last-child {
      &::after {
        content: "";
      }
    }
  }
`;
const Logo = styled.div``;
const Header2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  overflow: hidden;
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  padding-top: 4px;
  height: 60px;
  background: #fff;
  .pre-logo-svg {
    transform: scale(1.33);
    height: 60px;
    width: 80px;
  }
  .Center2 {
    width: auto;
    padding-top: 4px;
    align-items: center;
    margin: 0 auto;
    white-space: nowrap;
    li {
      float: left;
      box-sizing: border-box;
      padding: 12px;
      padding-bottom: 18px;
      height: 100%;
      font-weight: 500;
      font-size: 16px;
    }
  }
  .Right2 {
    display: flex;
    height: 60px;
    align-items: center;
    justify-content: flex-end;
    .Icon {
      width: 20px;
      height: 20px;
    }
  }
`;
const Header3 = styled.div`
  box-sizing: border-box;
  height: 58px;
  background: #f5f5f5;
`;
const Btn = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: inherit;
  &:hover {
    background: #e5e5e5;
  }
`;
const ViewingNotice = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const NoticeWrap = styled.div<INoticeWrap>`
  width: 200%;
  height: 100%;
  display: flex;
  transform: translateX(${(prop) => `${prop.page}%`});
  /* ${(props) => `-${props.page * window.innerWidth * 0.96}px`}; */
  transition: all 1s;
`;
const Notice = styled.div`
  box-sizing: border-box;
  padding: 10px 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 16px;
    font-weight: 400;
  }
  a {
    font-size: 12px;
    text-decoration: underline;
  }
`;
interface INoticeWrap {
  page: number;
}
const Header = () => {
  const [Noticepage, setNoticepage] = useState(0);
  const pageChanger = () => {
    if (Noticepage === 0) {
      setNoticepage(-50);
    } else {
      setNoticepage(0);
    }
  };
  useEffect(() => {
    let interval = setInterval(pageChanger, 5000);
    return () => clearInterval(interval);
  }, [Noticepage]);
  return (
    <HeaderWrap>
      <Header1>
        <ul className="Left1">
          <li>
            <Link to="">
              <svg height="24px" width="24px" fill="#111" viewBox="0 0 26 32">
                <path d="M14.4 5.52v-.08q0-.56.36-1t.92-.44 1 .36.48.96-.36 1-.96.4l-.24.08.08.12-.08.44-.16 1.28q.08.08.08.16l-.16.8q-.08.16-.16.24l-.08.32q-.16.64-.28 1.04t-.2.64V12q-.08.4-.12.64t-.28.8q-.16.32 0 1.04l.08.08q0 .24.2.56t.2.56q.08 1.6-.24 2.72l.16.48q.96.48.56 1.04l.4.16q.96.48 1.36.84t.8.76q.32.08.48.24l.24.08q1.68 1.12 3.36 2.72l.32.24v.08l-.08.16.24.16h.08q.24.16.32.16h.08q.08 0 .16-.08l.16-.08q.16-.16.32-.24h.32q.08 0 0 .08l-.32.16-.4.48h.56l.56.08q.24-.08.4-.16l.4-.24q.24-.08.48.16h.08q.08.08-.08.24l-.96.88q-.4.32-.72.4l-1.04.72q-.08.08-.16 0l-.24-.32-.16-.32-.2-.28-.24-.32-.2-.24-.16-.2-.32-.24q-.16 0-.32-.08l-1.04-.8q-.24 0-.56-.24-1.2-1.04-1.6-1.28l-.48-.32-.96-.16q-.48-.08-1.28-.48l-.64-.32q-.64-.32-.88-.32l-.32-.16q-.32-.08-.48-.16l-.16-.16q-.16 0-.32.08l-1.6.8-2 .88q-.8.64-1.52 1.04l-.88.4-1.36.96q-.16.16-.32 0l-.16.16q-.24.08-.32.08l-.32.16v.16h-.16l-.16.24q-.16.32-.32.36t-.2.12-.08.12l-.16.16-.24.16-.36-.04-.48.08-.32.08q-.4.08-.64-.12t-.4-.6q-.16-.24.16-.4l.08-.08q.08-.08.24-.08h.48L1.6 26l.32-.08q0-.16.08-.24.08-.08.24-.08v-.08q-.08-.16-.08-.32-.08-.16-.04-.24t.08-.08h.04l.08.24q.08.4.24.24l.08-.16q.08-.16.24-.16l.16.16.16-.16-.08-.08q0-.08.08-.08l.32-.32q.4-.48.96-.88 1.12-.88 2.4-1.36.4-.4.88-.4.32-.56.96-1.2.56-.4.8-.56.16-.32.4-.32H10l.16-.16q.16-.08.24-.16v-.4q0-.4.08-.64t.4-.24l.32-.32q-.16-.32-.16-.72h-.08q-.16-.24-.16-.48-.24-.4-.32-.64h-.24q-.08.24-.4.32l-.08.16q-.32.56-.56.84t-.88.68q-.4.4-.56.88-.08.24 0 .48l-.08.16h.08q0 .16.08.16h.08q.16.08.16.2t-.24.08-.36-.16-.2-.12l-.24.24q-.16.24-.32.2t-.08-.12l.08-.08q.08-.16 0-.16l-.64.16q-.08.08-.2 0t.04-.16l.4-.16q0-.08-.08-.08-.32.16-.64.08l-.4-.08-.08-.08q0-.08.08-.08.32.08.8-.08l.56-.24.64-.72.08-.16q.32-.64.68-1.16t.76-.84l.08-.32q.16-.32.32-.56t.4-.64l.24-.32q.32-.48.72-.48l.24-.24q.08-.08.08-.24l.16-.16-.08-.08q-.48-.4-.48-.72-.08-.56.36-.96t.88-.36.68.28l.16.16q.08 0 .08.08l.32.16v.24q.16.16.16.24.16-.24.48-.56l.4-1.28q0-.32.16-.64l.16-.24v-.16l.24-.96h.16l.24-.96q.08-.24 0-.56l-.32-.8z"></path>
              </svg>
            </Link>
          </li>
          <li>
            <Link to="">
              <svg height="24px" width="24px" fill="#111" viewBox="0 0 39 33">
                <path d="M10.94 25.626l-4.236-5.501L.201 22.28l3.734-5.756L.11 10.777l6.59 2.031 4.026-5.474.14 6.785 6.64 2.175-6.594 2.446.028 6.886zm.824 7.239l13.952-16.393L11.806.107h11.697l14.871 16.389-14.8 16.369h-11.81z"></path>
              </svg>
            </Link>
          </li>
        </ul>
        <ul className="Right1">
          <li>
            <Link to={""}>고객센터</Link>
          </li>
          <li>
            <Link to={"signup"}>가입하기</Link>
          </li>
          <li>
            <Link to={""}>로그인</Link>
          </li>
        </ul>
      </Header1>
      <Header2>
        <Logo>
          <Link to={"/"}>
            <svg
              aria-hidden="true"
              className="pre-logo-svg"
              focusable="false"
              viewBox="0 0 24 24"
              role="img"
              width="24px"
              height="24px"
              fill="none"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>
        </Logo>
        <ul className="Center2">
          <li>
            <Link to={""}>자유 게시판</Link>
          </li>
          <li>
            <Link to={""}>유머/정보</Link>
          </li>
          <li>
            <Link to={""}>스포츠</Link>
          </li>
          <li>
            <Link to={"sale"}>스포츠 용품</Link>
          </li>
        </ul>
        <div className="Right2">
          <Search placeholder="검색"></Search>
          <Btn>
            <HiOutlineHeart className="Icon" />
          </Btn>
          <Btn>
            <HiOutlineShoppingBag className="Icon" />
          </Btn>
        </div>
      </Header2>
      <Header3>
        <ViewingNotice>
          <NoticeWrap page={Noticepage} onClick={pageChanger}>
            {NoticeArr.map((notice) => (
              <Notice>
                <h2>{notice.Notice}</h2>
                <a href="#">자세히 보기</a>
              </Notice>
            ))}
          </NoticeWrap>
        </ViewingNotice>
      </Header3>
    </HeaderWrap>
  );
};

export default Header;
