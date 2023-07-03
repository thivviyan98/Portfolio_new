import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
    <LinkList>
      <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href='tel:+94-71-596-0791'>+947-159-607-91</LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href='mailto:thivviyan1998@gmail.com'>Thivviyan1998@gmail.com</LinkItem>
      </LinkColumn>
    </LinkList>
    
    <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>Innovation In Projects At Any Time</Slogan>
      </CompanyContainer>
      <SocialContainer>
       <SocialIcons href='https://github.com/thivviyan98/'>
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href='https://github.com/thivviyan98/https://www.linkedin.com/in/thivviyan-balasubramaniyam-447a85176'>
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href='https://www.instagram.com/thivviyan_balasubramaniyam/'>
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
      </SocialContainer>
    </SocialIconsContainer>
   </FooterWrapper>
  );
};

export default Footer;
