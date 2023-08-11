import styled from "styled-components";
import { colors } from "../../Constants/colors";
import { transparentize } from "polished";

export const PensContainer = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 1.25rem 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    h3 {
        width: 100%;
        text-align: center;
        font-weight: 300;
        color: ${colors.blue};
        margin-bottom: 2.5rem;
    }
`;

export const PensGrid = styled.div`
    display: grid; 
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    justify-content: center;
    gap: 2rem;
`;

export const PenContainer = styled.div`
    background-color: ${colors.asphalt};
    border-radius: 10px;
    padding: 0.5rem 1rem 1rem 1rem;

    a {
        color: ${transparentize(0.4, colors.white)};
        text-decoration: none;
        font-weight: 500;
        font-size: 1.25rem;

        &:hover {
            color: ${colors.white};
        }
    }

    picture img{
        border-radius: 10px;
        transition: transform 0.3s ease-in-out;
        transform: translateX(-1rem) translateY(-1.5rem);
    }

    &:hover {
        picture img {
            transform: translateX(-1.5rem) translateY(-1rem);
        }
    }
`;