import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button, Container, MainHeading } from "../../globalStyles";
import {
  HeroVideo,
  HeroSection,
  HeroText,
  ButtonWrapper,
  HeroButton,
  HeroBackgroundColor,
} from "./HeroStyles";

function Hero() {
  const navigate = useNavigate();

  return (
    <HeroSection>
      <HeroVideo src="./assets/bubble-tea.mp4" muted autoPlay loop />
      <Container>
        <MainHeading>Make your day Refresh with us</MainHeading>
        <HeroText>
          we provide best Boba Tea for clients all over the world
        </HeroText>

        <ButtonWrapper>
          <Link to="signup">
            <Button>Get Started</Button>
          </Link>
          <HeroButton
            onClick={() => {
              navigate("/shops");
            }}
          >
            Find More
          </HeroButton>
        </ButtonWrapper>
      </Container>
      <HeroBackgroundColor />
    </HeroSection>
  );
}

export default Hero;
