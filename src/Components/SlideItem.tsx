import { useState } from "react";
import styled from "styled-components";
import { AiFillLock } from "react-icons/ai";

const Article = styled.article`
  margin-top: 80px;
  display: flex;
  flex-flow: column;
  overflow: hidden;
  h3 {
    font-size: 24px;
    margin-bottom: 16px;
  }
`;
const CategoryAndBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  .buttonWrap {
    gap: 1rem;
    display: flex;
  }
`;
const SlideWrap = styled.ul<ISlideWrap>`
  display: float;
  width: 100%;
  gap: 2%;
  translate: ${(props) => -(props.page * 34) + `%`};
  transition: all 1s;

  li {
    width: 32%;
    display: flex;
    flex-flow: column;
    .ImageWrap {
      position: relative;
      img {
        width: 100%;
      }
      .Ismember {
        position: absolute;
        width: 50%;
        top: 20px;
        left: 20px;
        button {
          background: #fff;
          path {
            color: #aa8375;
          }
        }
      }
    }
    .MemberMent {
      visibility: hidden;
      margin-top: 20px;
      color: #aa8375;
      font-size: 24px;
      font-weight: 400;
    }
    &:hover {
      .MemberMent {
        visibility: visible;
      }
    }
  }
  .Textzone {
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
  }
  h4 {
    margin-bottom: 4px;
  }
  .member {
    color: #aa8375;
    font-size: 16px;
    margin-bottom: 4px;
  }
`;
interface ISlideWrap {
  page: number;
}
interface IItemList {
  ItemList: Props[];
}
interface Props {
  name: string;
  description: string;
  member: boolean;
  url: string;
  price: string;
}

const Button = styled.button<IBtn>`
  cursor: pointer;
  height: 48px;
  width: 48px;
  /* 여기 손 보기 */
  background: ${(props) => (props.page === 0 ? "#f5f5f5" : "#e5e5e5")};
  color: ${(props) => (props.page === 0 ? "#ccc" : "#111")};
  /*  */
  border: none;
  border-radius: 50%;
  font-size: 24px;
  &:hover {
    background-color: #f5f5f5;
    color: #ccc;
  }
`;
interface IBtn {
  page?: number;
}
const SlideItem = ({ ItemList }: IItemList) => {
  const [page, setPage] = useState(0);
  console.log(page);
  const ItemLength = ItemList.length;
  const LeftButton = styled(Button)``;
  const RightButton = styled(Button)`
    background: ${(props) =>
      props.page === ItemLength - 3 ? "#f5f5f5" : "#e5e5e5"};
    color: ${(props) => (props.page === ItemLength - 3 ? "#ccc" : "#111")};
  `;
  const leftClick = () => {
    if (page === 0) {
      return;
    } else {
      setPage((cur) => cur - 1);
    }
  };
  const rightClick = () => {
    if (page >= ItemLength - 3) {
      return;
    } else {
      setPage((cur) => cur + 1);
    }
  };

  return (
    <Article>
      <CategoryAndBtn>
        <h3 className="category">Featured Shoes</h3>
        <div className="buttonWrap">
          <LeftButton className="left button" page={page} onClick={leftClick}>
            &#60;
          </LeftButton>
          <RightButton
            className="right button"
            page={page}
            onClick={rightClick}
          >
            &#62;
          </RightButton>
        </div>
      </CategoryAndBtn>
      <SlideWrap page={page}>
        {ItemList.map((item: any) => (
          <li key={item.name}>
            <div className="ImageWrap">
              <img className="Image" src={item.url} alt={item.name} />
              {item.member ? (
                <div className="Ismember">
                  <Button>
                    <AiFillLock className="lock" />
                  </Button>
                  <h4 className="MemberMent">
                    무료 나이키 멤버십 프로필로 이 상품을 구매해보세요.
                  </h4>
                </div>
              ) : null}
            </div>
            <div className="Textzone">
              <div className="left">
                {item.member === true ? (
                  <p className="member">For Members</p>
                ) : null}
                <h4>{item.name}</h4>
                <p>{item.description}</p>
              </div>
              <div className="right">
                <p>{item.price}</p>
              </div>
            </div>
          </li>
        ))}
      </SlideWrap>
    </Article>
  );
};

export default SlideItem;
