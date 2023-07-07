import React from "react";
import styled from "styled-components";
import SlideItem from "../Components/SlideItem";
import { Btn } from "../Components/Btn";
import { useRecoilValue } from "recoil";
import { ShoesAtom } from "../Store/Atom";
const Wrapper = styled.div`
  width: 100%;
  & > article {
    padding: 0 2%;
  }
`;
const Article = styled.article`
  margin-top: 84px;
  .MainImage {
    width: 100%;
  }
  video {
    width: 100%;
  }
`;
const TextSection = styled.section`
  margin-top: 48px;
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 960px) {
    align-items: flex-start;
    text-align: start;
  }
  .subTitle {
    font-weight: 500;
  }
  h3 {
    margin-bottom: 24px;
    font-weight: 800;
  }
  .description {
    margin-bottom: 24px;
  }
  .QRment {
    font-size: 20px;
    margin-top: 6px;
  }
`;
const BtnsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 6px;
  margin: 20px 0;
`;

const QRwrapper = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column;
  align-items: center;
  img {
    width: 100%;
  }
`;
// 투아이템
const TwoItemSection = styled.article`
  margin-top: 80px;
  h3 {
    font-size: 24px;
    margin-bottom: 16px;
  }
  .Btn {
    background: #fff;
    color: #111;
    &:hover {
      background: #757575;
    }
  }
  .Items {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }
`;
const Item = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: end;
  position: relative;
  h4 {
    font-size: 20px;
    color: #fff;
    margin-bottom: 16px;
  }
`;
const Text = styled.div`
  position: absolute;
  display: flex;
  flex-flow: column;
  left: 20px;
  bottom: 40px;
`;
const Image = styled.div`
  z-index: -1;
  width: 100%;
  top: 0;
  left: 0;
  img {
    width: 100%;
  }
`;
const Community = styled.article`
  margin-top: 80px;
  h3 {
    font-size: 24px;
    margin-bottom: 16px;
  }
  .items {
    display: flex;
    gap: 12px;
  }
  .item {
  }
  .imageWrap {
    img {
      width: 100%;
    }
  }
  .TextWrap {
    h4 {
      margin-top: 20px;
      font-size: 20px;
    }
    p {
      margin-top: 14px;
    }
    .button {
      margin-top: 32px;
    }
  }
`;
// 쓰리아이템
const ThreeItemSection = styled(TwoItemSection)``;
const Home = () => {
  const ItemList = useRecoilValue(ShoesAtom);
  console.log(ItemList);
  return (
    <Wrapper>
      <Article style={{ margin: 0 }}>
        <img className={"MainImage"} src="image/main1.jpg" alt="main1"></img>
        <TextSection>
          <p className="subTitle">05.01(월) - 05.07(일)</p>
          <h3>MEMBER DAYS</h3>
          <p className="description">
            나이키닷컴, 나이키 앱 그리고 매장에서 7일간 진행되는 멤버데이즈에
            여러분을 초대합니다.
            <br /> 오직 나이키 멤버만을 위한 다양한 혜택으로 온 가족이 함께
            스포츠를 즐겨보세요.
            <br />
            <br />
            멤버데이즈 혜택 및 이벤트 정보는 마케팅 수신에 동의한 멤버를
            대상으로 제공됩니다. <br /> 나이키 앱을 다운로드하고 앱에서만 만날
            수 있는 전용 혜택도 놓치지 마세요.
          </p>
          <BtnsWrapper>
            <Btn>자세히 보기</Btn>
            <Btn>멤버 가입 & 마케팅 수신동의</Btn>
          </BtnsWrapper>
        </TextSection>
      </Article>
      <Article>
        <img className={"MainImage"} src="image/main2.jpg" alt="main2"></img>
        <TextSection>
          <p className="subTitle">나이키 페가수스 40</p>
          <h3>페가수스와 함께 온 세상을 달리다</h3>
          <p className="description">
            레트로한 컬러웨이와 스우시 디자인으로 페가수스의 오랜 역사를
            기념합니다.
            <br />
            페가수스 40 프리미엄의 뛰어난 반응성과 편안함을 지금 바로
            경험하세요.
          </p>
          <Btn>구매하기</Btn>
        </TextSection>
      </Article>
      <Article>
        <video autoPlay muted loop src="video/nike1.mp4"></video>
        <TextSection>
          <h3>시작을 만들다. 영원을 이루다.</h3>
          <p className="description">
            새로운 드라이 핏 ADV 기술을 적용한 2023 나이키 축구 국가대표팀
            저지를 가장 먼저 만나 보세요.
            <br /> 나이키 앱을 다운로드하고 축구를 관심사로 설정해 보세요.
          </p>
        </TextSection>
      </Article>
      <Article>
        <img className={"MainImage"} src="image/main4.webp" alt="main4"></img>
        <TextSection>
          <p className="subTitle">신제품: 머큐리얼 XXV</p>
          <h3>25년간의 경이로운 스피드</h3>
          <p className="description">
            축구 역사상 가장 빠른 스피드를 위해 설계된 머큐리얼 XXV를
            만나보세요.
          </p>
          <Btn>구매하기</Btn>
        </TextSection>
      </Article>
      {/*  */}
      <Article>
        <video
          autoPlay
          muted
          loop
          src="video/Nike. Just Do It. 나이키 코리아-2 (2).mp4"
        ></video>
        <TextSection>
          <p className="subTitle">나이키 스포츠 브라</p>
          <h3>가장 나다운 순간을 위한 디자인</h3>
          <p className="description">
            편안한 움직임을 통해 가장 나다워지는 순간을 만나 보세요.
          </p>
          <BtnsWrapper>
            <Btn>자세히 보기</Btn>
            <Btn>멤버 가입 & 마케팅 수신동의</Btn>
          </BtnsWrapper>
        </TextSection>
      </Article>
      <Article>
        <img className={"MainImage"} src="image/main5.webp" alt="임산부"></img>
        <TextSection>
          <p className="subTitle">나이키 (M) 에센셜</p>
          <h3>임산부를 위한 디자인</h3>
          <p className="description">
            임신 기간 동안 변화하는 체형에 맞춰 부드러운 안정감을 선사하는
            아이템으로 편안한 움직임을 경험해 보세요.
          </p>
          <Btn>구매하기</Btn>
        </TextSection>
      </Article>
      <Article>
        <video autoPlay muted loop src="video/nike3.mp4"></video>
        <TextSection>
          <p className="subTitle">'St.Louis'</p>
          <h3>테이텀 1</h3>
          <p className="description">
            제이슨의 모든 여정이 시작된 곳을 기념하는 스페셜 에디션 컬러웨이를
            통해 그의 고향에 대한 사랑을 느껴보세요.
            <br />
            레드와 화이트의 조합에 플뢰르 드 리스 디테일이 더해져 모든 이들을
            사로잡을 디자인이 탄생했습니다.
          </p>
          <Btn>구매하기</Btn>
        </TextSection>
      </Article>
      {/*  */}
      {/*  */}
      <Article>
        <video autoPlay muted loop src="video/nike4.mp4"></video>
        <TextSection>
          <h3>나이키 러닝화 가이드</h3>
          <p className="description">
            나에게 맞는 러닝화를 찾고, 발걸음마다 느껴지는 최적의 착화감을
            경험해보세요.
          </p>
          <Btn>자세히 보기</Btn>
        </TextSection>
      </Article>
      {/*  */}
      <TwoItemSection>
        <h3>Trending Now</h3>
        <div className="Items">
          <Item>
            <Image>
              <img src="image/나이키덩크.jpg" alt="나이키 덩크" />
            </Image>
            <Text>
              <h4>나이키 덩크</h4>
              <Btn>구매하기</Btn>
            </Text>
          </Item>
          <Item>
            <Image>
              <img src="image/에어포스1.webp" alt="나이키 덩크" />
            </Image>
            <Text>
              <h4>에어포스 1</h4>
              <Btn>구매하기</Btn>
            </Text>
          </Item>
        </div>
      </TwoItemSection>
      <SlideItem ItemList={ItemList}></SlideItem>
      <ThreeItemSection>
        <h3>Apparel Essentials</h3>
        <div className="Items">
          <Item>
            <Image>
              <img src="image/재킷&베스트.webp" alt="재킷&베스트" />
            </Image>
            <Text>
              <h4>재킷 & 베스트</h4>
            </Text>
          </Item>
          <Item>
            <Image>
              <img src="image/팬츠&타이츠.webp" alt="팬츠&타이츠" />
            </Image>
            <Text>
              <h4>팬츠 & 타이츠</h4>
            </Text>
          </Item>
          <Item>
            <Image>
              <img src="image/후디&크루.webp" alt="후디&크루" />
            </Image>
            <Text>
              <h4>후디 & 크루</h4>
            </Text>
          </Item>
        </div>
      </ThreeItemSection>
      <Community>
        <h3>나이키 커뮤니티와 함께 하기</h3>
        <div className="items">
          <div className="item">
            <div className="imageWrap">
              <img
                src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_668,c_limit/e22a3c9d-5f93-4b89-90d4-e912e7149ba0/nike-just-do-it.jpg"
                alt="나이키앱"
              />
            </div>
            <div className="TextWrap">
              <h4>나이키 앱</h4>
              <p>
                원하는 것을 누구보다 빠르게, 새로운 영감으로 매일을 새롭게,
                상상만 했던 경험을 현실로. 여러분의 매일을 나이키 앱에서 바꿔
                보세요.
              </p>
              <Btn className="button">자세히 보기</Btn>
            </div>
          </div>
          <div className="item">
            <div className="imageWrap">
              <img
                src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_668,c_limit/7c590e5c-56a4-41f6-b53f-cd6fddfefe8d/nike-just-do-it.jpg"
                alt="나이키 트레이닝 클럽"
              />
            </div>
            <div className="TextWrap">
              <h4>나이키 트레이닝 클럽(NTC)</h4>
              <p>
                NCT 앱으로 개인 맞춤형 트레이닝 가이드를 만나 보세요 운동,
                마음가짐, 영양, 수면 등 몸과 마음을 위한 전문가 팁도 함께
                제공됩니다.
              </p>
              <Btn className="button">자세히 보기</Btn>
            </div>
          </div>
          <div className="item">
            <div className="imageWrap">
              <img
                src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_668,c_limit/2d206354-2b4c-46f1-9b10-a9e02529b180/nike-just-do-it.jpg"
                alt="나이키 런 클럽(NRC)"
              />
            </div>
            <div className="TextWrap">
              <h4>나이키 런 클럽(NRC)</h4>
              <p>
                NRC 앱과 함께 언제 어디서든 러닝을 시작해 보세요. 전문 러닝
                코치들의 오디오 가이드 런으로 올바른 러닝 루틴을 만들 수
                있습니다.
              </p>
              <Btn className="button">자세히 보기</Btn>
            </div>
          </div>
        </div>
      </Community>
    </Wrapper>
  );
};

export default Home;
