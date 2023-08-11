import styled from "styled-components";
import { colors } from "../../Constants/colors";
import { transparentize } from "polished";

export const StyledFooter = styled.footer`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 7.5rem 2.5rem 2.5rem 2.5rem;
    background-color: ${colors.asphalt};
    color: ${transparentize(0.6, colors.white)};
`;

export const IconWrapper = styled.span`
    color: ${transparentize(0.4, colors.magenta)};
`;

export const LinkContainer = styled.div`
display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
    a {
        font-size: 1.25rem;
        color: ${transparentize(0.6, colors.white)};
        text-decoration: none;
        font-weight: 500;
        &:hover {
            color: ${colors.white};
        }
    }
`;