import React from "react";
import { AvatarContainer, LinkContainer, StyledHeader, SecondaryLinkContainer } from "./Header.style";

export function Header({ links, avatar, secondaryLinks }) {
    return (
        <StyledHeader>
            {links && (
                <LinkContainer>
                    {links.map((link, i) => (
                        <a key={`${link.label || "link"}-${i}`} href={link.url} target="_blank" rel="noreferrer">{link.label}</a>
                    ))}
                </LinkContainer>
            )}
            {avatar && <AvatarContainer>{avatar}</AvatarContainer>}
            {secondaryLinks && (
                <SecondaryLinkContainer>
                    {secondaryLinks.map((link, i) => (
                        <a key={`${link.label || "secondary-link"}-${i}`} href={link.url} target="_blank" rel="noreferrer">{link.label}</a>
                    ))}
                </SecondaryLinkContainer>
            )}
        </StyledHeader>
    );
}