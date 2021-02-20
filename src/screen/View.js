import React from "react";
import styled from "styled-components";
import firstImage from "../assets/img/first_image.png";
import footer from "../assets/img/footer.jpg";
import footerInfo from "../assets/img/info.png";
import remindImage from "../assets/img/remind.png";
import first_banner from "../assets/img/banner_1.png";
import second_banner from "../assets/img/banner_2.png";

const View = () => {
  const fontsize = 25;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ImageStyles src={firstImage} alt={"first_image"} />

      <InputFormBoxContainer>
        <InputFirstText fontsize={fontsize}>
          <div style={{ fontWeight: "700" }}>30일 무료체험</div>으로 직접
          드셔보시고 결정하세요!!
        </InputFirstText>
        <InputSecondText fontsize={fontsize}>
          기입하신 정보는 본 이벤트 이외에 어떤 용도로도 사용되지 않습니다!!
        </InputSecondText>
        <InputFormStyle src="https://adpot.kr/js/form/iframe.php?width=800&form=my2form28&cid=a2FeOFSpnE&c1=0&c2=0&c3=0&c4=0&autoHeight=377&btn=30일 무료체험 신청&fb=884561989025168"></InputFormStyle>
      </InputFormBoxContainer>
      <FirstBanner src={first_banner} alt={"first_banner"} />
      <SecondBanner src={second_banner} alt={"second_banner"} />
      <div style={{ marginTop: 30 }} />
      <ImageStyles src={remindImage} alt={"footer"} />
      <div style={{ marginTop: 20 }} />
      <ImageStyles src={footer} alt={"footer"} />
      <ImageStyles src={footerInfo} alt={"footerInfo"} />
    </div>
  );
};

const ImageStyles = styled.img`
  width: 1000px;
  @media (max-width: ${(props) => 1000}px) {
    width: 100%;
  }
`;

const InputFormBoxContainer = styled.div`
  position: relative;
  width: 950px;
  border: solid 3px black;
  padding: 25px 25px 40px 25px;
  margin-left: 25px;
  margin-right: 25px;
  border-radius: 10px;
  margin-top: 70px;
  @media (max-width: ${(props) => 1000}px) {
    width: 95%;
  }
`;

const InputFormStyle = styled.iframe`
  width: 900px;
  height: 377px;
  @media (max-width: ${(props) => 950}px) {
    width: 100%;
  }
`;

const InputFirstText = styled.div`
  display: flex;
  margin-bottom: 10px;
  margin-top: 20px;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  font-size: ${(props) => props.fontsize}px;
  @media (max-width: ${(props) => 1000}px) {
    font-size: ${(props) => (props.fontsize / 1000) * 100}vw;
  }
`;

const InputSecondText = styled.div`
  display: flex;
  margin-bottom: 30px;
  font-size: ${(props) => props.fontsize}px;
  text-align: center;
  justify-content: center;
  align-items: center;
  @media (max-width: ${(props) => 1000}px) {
    font-size: ${(props) => (props.fontsize / 1000) * 100}vw;
  }
`;

const FirstBanner = styled.img`
  width: 700px;
  border-radius: 10px;
  margin-top: 30px;
  @media (max-width: ${(props) => 1000}px) {
    width: ${(props) => (700 / 1000) * 100}vw;
  }
`;

const SecondBanner = styled.img`
  width: 700px;
  border-radius: 10px;
  margin-top: 20px;
  @media (max-width: ${(props) => 1000}px) {
    width: ${(props) => (700 / 1000) * 100}vw;
  }
`;

export default View;
