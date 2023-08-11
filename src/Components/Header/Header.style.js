import styled from "styled-components";
import { colors } from "../../Constants/colors";
import { transparentize } from "polished";

export const StyledHeader = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 2.5rem;
    min-height: 1em;
    background-color: ${colors.magenta};
    z-index: 9;
`;

export const LinkContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    a {
        color: ${transparentize(0.6, colors.white)};
        text-decoration: none;
        font-weight: 500;
        &:hover {
            color: ${colors.white};
        }
    }
`;

export const SecondaryLinkContainer = styled(LinkContainer)`
    font-size: 1.25rem;
    gap: 0.5rem;
`;

export const AvatarContainer = styled.div`
position: absolute;
left: 50%;
margin-left: -70px;
`;