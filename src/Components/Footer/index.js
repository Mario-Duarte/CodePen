import React from "react";
import { IconWrapper, LinkContainer, StyledFooter } from "./Footer.style";
import { HiHeart, HiCode } from "react-icons/hi";
import { FaLinkedin, FaInstagramSquare, FaBehance, FaDribbble, FaGithub, FaCodepen } from "react-icons/fa";
import { links } from "../../Constants/links";

export function Footer() {
    const year = new Date().getFullYear();
    const footerLinks = [
        {
            label: <FaGithub />,
            url: links.github
        },
        {
            label: <FaCodepen />,
            url: links.codepen
        },
        {
            label: <FaLinkedin />,
            url: links.linkedin
        },
        {
            label: <FaInstagramSquare />,
            url: links.instagram
        },
        {
            label: <FaBehance />,
            url: links.behance
        }, {
            label: <FaDribbble />,
            url: links.dribble
        }
    ];

    return (
        <StyledFooter>
            <p>Created with <IconWrapper><HiHeart /></IconWrapper> and <IconWrapper><HiCode /></IconWrapper> by Mário Duarte &copy; {year}</p>

            <LinkContainer>
                {footerLinks.map((link, i) => (
                    <a key={`${link.label || "icon"}-${i}`} href={link.url} target="_blank" rel="noreferrer">{link.label}</a>
                ))}
            </LinkContainer>
        </StyledFooter>
    );
}