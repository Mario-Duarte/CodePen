import styled, { keyframes } from "styled-components";
import _ from "lodash";
import { colors } from "../../Constants/colors";

export const FeaturedContainer = styled.div`
    position: relative;
	width: 100%;
	height: 80vh;
    background-color: ${colors.blue};
`;

export const FeaturedBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-image: url('https://raw.githubusercontent.com/Mario-Duarte/CodePen/main/assets/my-illustration-background.png');
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: 100% auto;
    z-index: 0;
`;

export const FeaturedForeground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-image: url('https://raw.githubusercontent.com/Mario-Duarte/CodePen/main/assets/my-illustration-foreground.png');
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: 100% auto;
    z-index: 2;
`;

export const ParticlesContainer = styled.div`
    position: absolute;
    top:0;
    right:0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
`;

const ParticleAnimation = keyframes`
    0% { transform: translateX( 0px ) translateY(0vh); opacity: 1; };
    30% { transform: translateX( ${_.random(0, 80) - 40}px ) translateY(-10vh); opacity: 0.9; };
    40% { transform: translateX( ${_.random(0, 80) - 40}px ) translateY(-20vh); opacity: 0.8; };
    50% { transform: translateX( ${_.random(0, 80) - 40}px ) translateY(-30vh); opacity: 0.7; };
    60% { transform: translateX( ${_.random(0, 80) - 40}px ) translateY(-40vh); opacity: 0.6; };
    70% { transform: translateX( ${_.random(0, 80) - 40}px ) translateY(-50vh); opacity: 0.5; };
    100% { transform: translateX( ${_.random(0, 80) - 40}px ) translateY(-100vh); opacity: 0; };
`;

export const StyledParticle = styled.span`
    display: inline-block;
    position: absolute;
    bottom: 0%;
    border-radius: 50%;
    background-color: ${colors.magenta};
    opacity: 1;
    box-shadow: 0px 0px 10px 5px ${colors.magenta};
    transform: translateX(0%) translateY(0%);
    animation: ${ParticleAnimation};
    animation-iteration-count: infinite;
    animation-timing-function: linear;
`;

export const ContentOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: ${colors.magenta};
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;

    h1 {
        position: relative;
        font-size: 3rem;
        display: flex;
        align-items: flex-start;

        &::after {
            content: '.love:not(.hate)';
            font-size: 1rem;
            color: white;
            font-weight: 300;
        }
    }
`;