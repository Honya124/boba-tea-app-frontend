import React from "react";
import {
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  FooterLogo,
  SocialIcon,
  FooterRights,
  FooterSocialIcon,
  FooterWrapper,
  FooterAddress,
  FooterColumn,
  FooterGrid,
} from "./FooterStyles";
import { footerData, footerSocialData } from "../../data/FooterData";
import { Row, Section } from "../../globalStyles";

function Footer() {
  return (
    <Section padding="4rem 0 2rem 0">
      <FooterWrapper>
        <FooterGrid justify="space-between">
          <FooterColumn id="footerLogo">
            <FooterLogo>
              <SocialIcon src="./assets/bobaLogo.png" />
            </FooterLogo>

            <FooterAddress>
              69 Street, Delta Building, US Road, Los Angeles 123
            </FooterAddress>
            <Row align="center" margin="auto auto 0 auto" gap="1.5rem">
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
          {footerData.map((footerItem, index) => (
            <FooterLinkItems key={index}>
              <FooterLinkTitle>{footerItem.title}</FooterLinkTitle>
              {footerItem.links.map((link, linkIndex) => (
                <FooterLink key={linkIndex} to="/">
                  {link}
                </FooterLink>
              ))}
            </FooterLinkItems>
          ))}
        </FooterGrid>
        <FooterRights>Boba Tea © {new Date().getFullYear()} </FooterRights>
      </FooterWrapper>
    </Section>
  );
}

export default Footer;
