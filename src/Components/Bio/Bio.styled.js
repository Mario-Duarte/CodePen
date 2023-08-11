import styled from "styled-components";
import { colors } from "../../Constants/colors";

export const BioContainer = styled.div`
    width: 100%;
    max-width: 760px;
    text-align: center;
    margin: 0 auto;
    padding: 1.25rem 2.5rem;
    margin-top: 4rem;
    color: ${colors.blue};

    a {
        color: ${colors.magenta};
        text-decoration: underline;
        &:hover {
            color: ${colors.magenta};
        }
    }
`;