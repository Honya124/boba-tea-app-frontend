import React, { useEffect } from "react";
import { Container } from "../../globalStyles";
import {
  AboutSection,
  AboutVideo,
  AboutText,
  AboutMainHeading,
  AboutBackgroundColor,
  AboutImgWrapper,
  Img,
} from "./AboutStyles";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
function About() {
  const initial = { opacity: 0, y: 30 };
  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      animation.start({ opacity: 1, y: 0 });
    }
  }, [inView, animation]);

  return (
    <AboutSection ref={ref}>
      <AboutVideo src="./assets/bubble-tea.mp4" muted autoPlay loop />
      <Container>
        <AboutMainHeading
          initial={initial}
          transition={{ delay: 0.3, duration: 0.6 }}
          animate={animation}
        >
          About Boba Tea
        </AboutMainHeading>
        <AboutText
          initial={initial}
          transition={{ delay: 0.6, duration: 0.6 }}
          animate={animation}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. In ab iure
          tempore. Quos repudiandae debitis reprehenderit dignissimos
          consequatur, porro voluptate veritatis suscipit aliquam animi, eius
          corrupti iusto eligendi cum placeat.
        </AboutText>
        <AboutImgWrapper>
          <Img src="./assets/direction1.png" />
        </AboutImgWrapper>
      </Container>
      <AboutBackgroundColor />
    </AboutSection>
  );
}

export default About;
