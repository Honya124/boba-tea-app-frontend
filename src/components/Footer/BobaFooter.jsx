import React from "react";
import { Section, Row } from "../../globalStyles";
import {
  FooterWrapper,
  FooterColumn,
  FooterImgColumn,
  FooterLogo,
  SocialIcon,
  FooterAddress,
  FooterCall,
  FooterEmail,
  FooterTime,
  FooterSocialIcon,
  FooterGrid,
} from "./FooterStyles";
import { footerSocialData } from "../../data/FooterData";
function BobaFooter() {
  return (
    <Section padding="4rem 0 2rem 0" id="footerLogo" >
      <FooterWrapper>
        <FooterGrid justify="space-between">
          <FooterColumn>
            <FooterCall>+964(0) 111 111 111</FooterCall>
            <FooterEmail>bobaTea@gmail.com</FooterEmail>

            <FooterAddress>
              69 Street, Delta Building, US Road, Los Angeles 123
            </FooterAddress>
          </FooterColumn>
          <FooterImgColumn>
            <FooterLogo>
              <SocialIcon src="./assets/bobaLogo.png" />
            </FooterLogo>
          </FooterImgColumn>
          <FooterColumn>
            <FooterTime>Everyday: 11:00 – 5:00</FooterTime>
            <Row align="center" margin="0.400rem auto 0 auto" gap="1.5rem">
              {footerSocialData.map((social, index) => (
                <FooterSocialIcon
                  key={index}
                  href="/"
                  target="_blank"
                  aria-label={social.name}
                >
                  {social.icon}
                </FooterSocialIcon>
              ))}
            </Row>
          </FooterColumn>
        </FooterGrid>
      </FooterWrapper>
    </Section>
  );
}

export default BobaFooter;
