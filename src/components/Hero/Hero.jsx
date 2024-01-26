import React from "react";
import toast, { Toaster } from "react-hot-toast";
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
import { useSelector } from "react-redux";

function Hero() {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const isLogedin = useSelector((state) => state.auth.isLogedin);
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
              if (isLogedin && currentUser) {
                navigate("/shops");
              }
              toast.error("please, login");
            }}
          >
            Find More
          </HeroButton>
        </ButtonWrapper>
        <Toaster position="top-center" reverseOrder={true} />
      </Container>
      <HeroBackgroundColor />
    </HeroSection>
  );
}

export default Hero;
