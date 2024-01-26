import React from "react";
// import { Container, Section } from "./../../globalStyles";
import { FeaturesImgWrapper, Img } from "./FeaturesStyles";
function Features() {
  const initial = {
    y: 40,
    opacity: 0,
  };

  const animate = {
    y: 0,
    opacity: 1,
  };
  return (
    // <Section
    //   smPadding="0 0"
    //   padding="0 0"
    //   height="600px"
    //   position="relative"
    //   inverse
    //   id="features"
    // >
      // <Container>
        <FeaturesImgWrapper
          initial={initial}
          animate={animate}
          transition={{ transition: 0.5 }}
        >
          <Img src="assets/features1.png" />
        </FeaturesImgWrapper>
      // </Container>
    // </Section>
  );
}

export default Features;
