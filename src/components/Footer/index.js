import React from 'react'
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,SocialMedia,
    SocialIconLink , 
    SocialIcons,
    SocialLogo,
    WebsiteRights, 
    SocialMediaWrap,} from './FooterElements'
const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                                <FooterLink to="/">How It Works</FooterLink>
                                <FooterLink to="/">Careers</FooterLink>
                                <FooterLink to="/">Term of service</FooterLink>
                                <FooterLink to="/">Investors</FooterLink>                            
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Crypto </FooterLinkTitle>
                                <FooterLink to="/">How It Works</FooterLink>
                                <FooterLink to="/">Careers</FooterLink>
                                <FooterLink to="/">Term of service</FooterLink>
                                <FooterLink to="/">Investors</FooterLink>
                            
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Other Sites</FooterLinkTitle>
                                <FooterLink to="/">How It Works</FooterLink>
                                <FooterLink to="/">Careers</FooterLink>
                                <FooterLink to="/">Term of service</FooterLink>
                                <FooterLink to="/">Investors</FooterLink>                            
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to="/">How It Works</FooterLink>
                                <FooterLink to="/">Careers</FooterLink>
                                <FooterLink to="/">Term of service</FooterLink>
                                <FooterLink to="/">Investors</FooterLink>
                            
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/"
                        onClick={toggleHome}
                        >
                            Bankzi
                        </SocialLogo>
                        <WebsiteRights>Bankzi © {new Date().getFullYear()}
                        All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linked In">
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer;
