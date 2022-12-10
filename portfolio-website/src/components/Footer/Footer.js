import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillFacebook, AiFillTwitterSquare } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Phone</LinkTitle>
          <LinkItem href="tel:+47 409 52 550">Norwegian Number:<hr /> +47 409 52 550</LinkItem>
          <LinkItem href="tel:+48 731 459 220">Polish Number:<hr /> +48 731 459 220</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>E-mail</LinkTitle>
          <LinkItem href="mailto:piotr.kwiatkowski115@gmail.com">piotr.kwiatkowski115@gmail.com</LinkItem>         
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Contact me via E-mail or Phone or visit my Social Media! <br /> I am looking forward to hearing from you!</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Pekillen/Projects">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/piotr-kwiatkowski-9ba0191a3/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/perfect_story_to_tell/">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://twitter.com/Pekillen">
            <AiFillTwitterSquare size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.facebook.com/piotrekblady.kwiatkowski">
            <AiFillFacebook size="3rem" />
          </SocialIcons>
         </SocialContainer>
        </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
