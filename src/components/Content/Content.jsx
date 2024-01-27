import React, { useEffect } from "react";
import { Container, Section } from "../../globalStyles";
import {
  ContentRow,
  TextWrapper,
  TopLine,
  Heading,
  ContentButton,
  Subtitle,
  ImgWrapper,
  Img,
  ContentColumn,
} from "./ContentStyles";
import { useInView } from "react-intersection-observer"; //amma controlli scroll view page akat yakjar twshi trigger abet bas
// scroll'y page ziatr la jarek twshi triggrt abet
import { useAnimation } from "framer-motion"; //amma bo animationi content basha
import { useNavigate } from "react-router-dom";
function Content({
  primary,
  topLine,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  inverse,
  reverse,
}) {
  const navigate = useNavigate();
  const initial = { opacity: 0, y: 30 }; // shweni dastpekrdni animation
  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 }); // ref:bo har component animation'i ayayne, inView:notify'man akat ke animation akat

  useEffect(() => {
    if (inView) {
      animation.start({ opacity: 1, y: 0 });
    }
  }, [animation, inView]);

  return (
    <Section inverse={inverse} ref={ref} padding="80px 0">
      <Container>
        <ContentRow reverse={reverse}>
          <ContentColumn>
            <TextWrapper>
              <TopLine
                initial={initial}
                transition={{ delay: 0.3, duration: 0.6 }}
                animate={animation}
              >
                {topLine.text}
              </TopLine>

              <Heading
                initial={initial}
                transition={{ delay: 0.5, duration: 0.6 }}
                animate={animation}
                inverse={inverse}
              >
                {headline}
              </Heading>
              <Subtitle
                initial={initial}
                transition={{ delay: 0.7, duration: 0.6 }}
                animate={animation}
                inverse={inverse}
              >
                {description}
              </Subtitle>
              <ContentButton
                initial={initial}
                transition={{ delay: 1, duration: 0.6 }}
                animate={animation}
                inverse={inverse}
                primary={primary}
                onClick={() => {
                  navigate("/shops");
                }}
              >
                {buttonLabel}
              </ContentButton>
            </TextWrapper>
          </ContentColumn>

          <ContentColumn
            initial={initial}
            transition={{ delay: 0.5, duration: 0.6 }}
            animate={animation}
          >
            <ImgWrapper>
              <Img
                src={img}
                alt={alt}
                whileHover={{ rotate: 2, scale: 1.02 }}
                transition={{ duration: 0.5 }}
              />
            </ImgWrapper>
          </ContentColumn>
        </ContentRow>
      </Container>
    </Section>
  );
}

export default Content;
