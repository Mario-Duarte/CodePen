import React from "react";
import { links } from "../../Constants/links";
import { BioContainer } from "./Bio.styled";

export function Bio() {
    return (
        <BioContainer>
            <h2>East Sussex, United Kingdom</h2>
            <p>Hello friends, I'm Mario Duarte, a Developer from the United Kingdom. I love Tech and Visual Art in many shapes and forms, feel free to follow me on <a href={links.codepen} target="_blank" rel="noreferrer">CopenPen</a> for my latest doodles and ideas or on <a href={links.github} target="_blank" rel="noreferrer">GitHub</a> for my latest projects.</p>
        </BioContainer>
    )
}