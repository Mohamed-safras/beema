import React from "react";
import {
  HeroContainer,
  HeroBg,
  ImageBg,
  HeroContent,
  HeroLogo,
  HeroLogoH1,
  HeroContentDescription,
  HeroContentDescriptionH2,
  StartProjectBtn,
  Btn,
  ArrowButton,
  ExpandMore,
} from "../../components/HeroSection/Style";
import logo from "../../images/logo.png";
import Bg from "../../images/bgimg.png";
const HeroSection = () => {
  return (
    <>
      <HeroContainer>
        <HeroBg>
          <ImageBg src={Bg} />
        </HeroBg>
        <HeroContent>
          <HeroLogo src={logo} />
          <HeroLogoH1>Beema</HeroLogoH1>
          <HeroContentDescription>
            <HeroContentDescriptionH2>
              Software Development From the best in the industry
            </HeroContentDescriptionH2>
          </HeroContentDescription>
          <StartProjectBtn>
            <Btn>Start you Project</Btn>
          </StartProjectBtn>
        </HeroContent>
        <ArrowButton>
          <ExpandMore />
        </ArrowButton>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
