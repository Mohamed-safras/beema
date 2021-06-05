import styled from "styled-components";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  z-index: 1;
  padding: 0 30px;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 800px;
  width: 100%;
  background: #111;
  opacity: 0.8;
`;

export const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.3;
  background: #232a34;
`;

export const HeroContent = styled.div`
  position: absolute;
  top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeroLogo = styled.img`
  height: 131px;
  width: 131px;
`;

export const HeroLogoH1 = styled.h1`
  color: #00d8b1;
  font-size: 52px;
  font-weight: 900;
  margin-top: 0;
  line-height: 60px;
`;
export const HeroContentDescription = styled.div`
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;
export const HeroContentDescriptionH2 = styled.h2`
  text-align: center;
  font-size: 30px;
  color: #fff;
`;
export const StartProjectBtn = styled.div`
  margin-top: 20px;
`;
export const Btn = styled.button`
  border: none;
  outline: none;
  font-size: 20px;
  padding: 10px 20px;
  border-radius: 10px;
  color: #fff;
  font-weight: 600;
  background: #00d8b1;
  cursor: pointer;
`;
export const ArrowButton = styled.div`
  position: absolute;
  bottom: 15px;
`;
export const ExpandMore = styled(ExpandMoreIcon)`
  font-size: 24px;
  background: transparent;
  font-size: 34px !important;
  opacity: 0.8;
  background: #ffffff;
  color: #111;
  border-radius: 999px;
`;
