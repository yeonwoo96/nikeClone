import { atom } from "recoil";

interface Props {
  name: string;
  description: string;
  member: boolean;
  url: string;
  price: string;
}
export const ShoesAtom = atom<Props[]>({
  key: "shoeslist",
  default: [
    {
      name: "나이키 페가수스 트레일 4 GORE-TEX",
      description: "남성 워터프루프 트레일 러닝화",
      member: false,
      url: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_593,c_limit/357cf26a-26a1-4ff0-8cde-d46249051eff/%ED%8E%98%EA%B0%80%EC%88%98%EC%8A%A4-%ED%8A%B8%EB%A0%88%EC%9D%BC-4-gore-tex-%EB%82%A8%EC%84%B1-%EC%9B%8C%ED%84%B0%ED%94%84%EB%A3%A8%ED%94%84-%ED%8A%B8%EB%A0%88%EC%9D%BC-%EB%9F%AC%EB%8B%9D%ED%99%94-LIz4TAPU.png",
      price: "189,000원",
    },
    {
      name: "나이키 에어 포스 1 '07",
      description: "남성 신발",
      member: true,
      url: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_593,c_limit/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-07-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-TttlGpDb.png",
      price: "139,000원",
    },
    {
      name: "나이키 덩크 로우 레트로",
      description: "남성 신발",
      member: true,
      url: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_593,c_limit/a3e7dead-1ad2-4c40-996d-93ebc9df0fca/%EB%8D%A9%ED%81%AC-%EB%A1%9C%EC%9A%B0-%EB%A0%88%ED%8A%B8%EB%A1%9C-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-bDdzzUjf.png",
      price: "129,000원",
    },
    {
      name: "에어 조던 XXXVII 로우 PF",
      description: "남성 농구화",
      member: false,
      url: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_593,c_limit/aec39ee0-aa4f-489d-9528-258385edc026/%EC%97%90%EC%96%B4-%EC%A1%B0%EB%8D%98-xxxvii-%EB%A1%9C%EC%9A%B0-pf-%EB%82%A8%EC%84%B1-%EB%86%8D%EA%B5%AC%ED%99%94-KXN5S0eX.png",
      price: "209,000원",
    },
    {
      name: "나이키 페가수스 트레일 4 GORE-TEX",
      description: "남성 워터프루프 트레일 러닝화",
      member: false,
      url: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_593,c_limit/357cf26a-26a1-4ff0-8cde-d46249051eff/%ED%8E%98%EA%B0%80%EC%88%98%EC%8A%A4-%ED%8A%B8%EB%A0%88%EC%9D%BC-4-gore-tex-%EB%82%A8%EC%84%B1-%EC%9B%8C%ED%84%B0%ED%94%84%EB%A3%A8%ED%94%84-%ED%8A%B8%EB%A0%88%EC%9D%BC-%EB%9F%AC%EB%8B%9D%ED%99%94-LIz4TAPU.png",
      price: "189,000원",
    },
    {
      name: "나이키 에어 포스 1 '07",
      description: "남성 신발",
      member: true,
      url: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_593,c_limit/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-07-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-TttlGpDb.png",
      price: "139,000원",
    },
    {
      name: "나이키 덩크 로우 레트로",
      description: "남성 신발",
      member: true,
      url: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_593,c_limit/a3e7dead-1ad2-4c40-996d-93ebc9df0fca/%EB%8D%A9%ED%81%AC-%EB%A1%9C%EC%9A%B0-%EB%A0%88%ED%8A%B8%EB%A1%9C-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-bDdzzUjf.png",
      price: "129,000원",
    },
    {
      name: "에어 조던 XXXVII 로우 PF",
      description: "남성 농구화",
      member: false,
      url: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_593,c_limit/aec39ee0-aa4f-489d-9528-258385edc026/%EC%97%90%EC%96%B4-%EC%A1%B0%EB%8D%98-xxxvii-%EB%A1%9C%EC%9A%B0-pf-%EB%82%A8%EC%84%B1-%EB%86%8D%EA%B5%AC%ED%99%94-KXN5S0eX.png",
      price: "209,000원",
    },
  ],
});

// [
//     {
//       name: "나이키 페가수스 트레일 4 GORE-TEX",
//       description: "남성 워터프루프 트레일 러닝화",
//       meber: false,
//       url: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_593,c_limit/357cf26a-26a1-4ff0-8cde-d46249051eff/%ED%8E%98%EA%B0%80%EC%88%98%EC%8A%A4-%ED%8A%B8%EB%A0%88%EC%9D%BC-4-gore-tex-%EB%82%A8%EC%84%B1-%EC%9B%8C%ED%84%B0%ED%94%84%EB%A3%A8%ED%94%84-%ED%8A%B8%EB%A0%88%EC%9D%BC-%EB%9F%AC%EB%8B%9D%ED%99%94-LIz4TAPU.png",
//       price: "189,000원",
//     },
//     {
//       name: "나이키 에어 포스 1 '07",
//       description: "남성 신발",
//       meber: true,
//       url: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_593,c_limit/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-07-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-TttlGpDb.png",
//       price: "139,000원",
//     },
//     {
//       name: "나이키 덩크 로우 레트로",
//       description: "남성 신발",
//       meber: true,
//       url: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_593,c_limit/a3e7dead-1ad2-4c40-996d-93ebc9df0fca/%EB%8D%A9%ED%81%AC-%EB%A1%9C%EC%9A%B0-%EB%A0%88%ED%8A%B8%EB%A1%9C-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-bDdzzUjf.png",
//       price: "129,000원",
//     },
//     {
//       name: "에어 조던 XXXVII 로우 PF",
//       description: "남성 농구화",
//       meber: false,
//       url: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_593,c_limit/aec39ee0-aa4f-489d-9528-258385edc026/%EC%97%90%EC%96%B4-%EC%A1%B0%EB%8D%98-xxxvii-%EB%A1%9C%EC%9A%B0-pf-%EB%82%A8%EC%84%B1-%EB%86%8D%EA%B5%AC%ED%99%94-KXN5S0eX.png",
//       price: "209,000원",
//     },
//     {
//       name: "나이키 페가수스 트레일 4 GORE-TEX",
//       description: "남성 워터프루프 트레일 러닝화",
//       meber: false,
//       url: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_593,c_limit/357cf26a-26a1-4ff0-8cde-d46249051eff/%ED%8E%98%EA%B0%80%EC%88%98%EC%8A%A4-%ED%8A%B8%EB%A0%88%EC%9D%BC-4-gore-tex-%EB%82%A8%EC%84%B1-%EC%9B%8C%ED%84%B0%ED%94%84%EB%A3%A8%ED%94%84-%ED%8A%B8%EB%A0%88%EC%9D%BC-%EB%9F%AC%EB%8B%9D%ED%99%94-LIz4TAPU.png",
//       price: "189,000원",
//     },
//     {
//       name: "나이키 에어 포스 1 '07",
//       description: "남성 신발",
//       meber: true,
//       url: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_593,c_limit/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-07-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-TttlGpDb.png",
//       price: "139,000원",
//     },
//     {
//       name: "나이키 덩크 로우 레트로",
//       description: "남성 신발",
//       meber: true,
//       url: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_593,c_limit/a3e7dead-1ad2-4c40-996d-93ebc9df0fca/%EB%8D%A9%ED%81%AC-%EB%A1%9C%EC%9A%B0-%EB%A0%88%ED%8A%B8%EB%A1%9C-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-bDdzzUjf.png",
//       price: "129,000원",
//     },
//     {
//       name: "에어 조던 XXXVII 로우 PF",
//       description: "남성 농구화",
//       meber: false,
//       url: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_593,c_limit/aec39ee0-aa4f-489d-9528-258385edc026/%EC%97%90%EC%96%B4-%EC%A1%B0%EB%8D%98-xxxvii-%EB%A1%9C%EC%9A%B0-pf-%EB%82%A8%EC%84%B1-%EB%86%8D%EA%B5%AC%ED%99%94-KXN5S0eX.png",
//       price: "209,000원",
//     },]
