import React, { useState } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { ShoesAtom } from "../Store/Atom";
const Section1 = styled.article`
  padding: 0 2%;
  display: flex;
  justify-content: space-between;
  align-items: end;
  h3 {
    font-size: 24px;
  }
  .buttonWrap {
    display: flex;
  }
  .button {
    display: flex;
    padding: 0px 25px 0px 0px;
    background: transparent;
    -webkit-box-align: center;
    align-items: center;
    font-weight: 400;
    cursor: pointer;
  }
`;
const Section2 = styled.article`
  display: flex;
  .FilterZone {
    overflow-y: scroll;
  }
  .ItemZone {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    .item {
      width: 100%;
      box-sizing: border-box;
      padding: 20px;
      .img {
        img {
          width: 100%;
        }
      }
      .text {
      }
    }
  }
`;
const Sale = () => {
  const ItemList = useRecoilValue(ShoesAtom);
  const [Filter, setFilter] = useState(true);
  const Category = [
    "신발",
    "스포츠 브라",
    "바디수트",
    "탑 & 티셔츠",
    "후디 & 크루",
    "재킷 & 베스트",
    "팬츠 & 타이츠",
    "쇼츠",
    "트랙수트",
    "점프수트 & 롬퍼스",
    "스커트 & 드레스",
    "양말",
    "용품",
  ];
  const Gender = ["남성", "여성", "유니섹스"];
  const Kids = ["남아", "여아"];
  const Color = [
    { color: "#8d429f", text: "퍼플" },
    { color: "#000000", text: "블랙" },
    { color: "#f36b26", text: "레드" },
    { color: "#1790c8", text: "오렌지" },
    { color: "#fff", text: "블루" },
    ,
    { color: "#825d41", text: "화이트" },
    { color: "#7bba3c", text: "브라운" },
    { color: "#fed533", text: "그린" },
    { color: "#000000", text: "옐로우" },
    { color: "#808080", text: "멀티컬러" },
    ,
    { color: "#f0728f", text: "그레이" },
  ];
  return (
    <>
      <Section1>
        <div className="SaleMentWrap">
          <h3>
            멤버 특별 할인 - 나이키 앱에서 프로모션 코드 (APP20) 입력 시 추가
            20% 할인 적용(1227)
          </h3>
        </div>
        <div className="buttonWrap">
          <div className="filterOnOff button">
            {Filter ? <p>필터 숨기기</p> : <p>필터 표시</p>}
          </div>
          <div className="Sort button">
            <p>정렬 기준: 추천순</p>
          </div>
        </div>
      </Section1>
      <Section2>
        <div className="FilterZone">
          <div className="Category">
            <ul>
              {Category.map((cat) => (
                <li>{cat}</li>
              ))}
            </ul>
          </div>
          <hr />
          <div className="GenderZone">
            <h4>성별</h4>
            <ul>
              {Gender.map((cat) => (
                <li>{cat}</li>
              ))}
            </ul>
          </div>
          <hr />
          <div className="KidZone">
            <h4>키즈</h4>
            <ul>
              {Kids.map((cat) => (
                <li>{cat}</li>
              ))}
            </ul>
          </div>
          <hr />
        </div>
        <div className="ItemZone">
          {ItemList.map((item) => (
            <div className="item">
              <div className="img">
                <img src={item.url} alt={item.name} />
              </div>
              <div className="text">
                <p>{item.member ? "For Member" : ""}</p>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section2>
    </>
  );
};

export default Sale;
