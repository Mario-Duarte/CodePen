import React from "react";
import { PenContainer, PensContainer, PensGrid } from "./Pens.style";
import { pens } from "../../Constants/pens";

export function Pens() {
    return (
        <PensContainer>
            <h3>Mario Duarte's Pens</h3>
            <PensGrid>
                {pens && pens.map((pens, i) => (
                    <PenContainer key={pens.title}>
                        <a href={pens.url} target="_self">
                            <picture>
                                <img src={pens.preview} />
                            </picture>
                            {pens.title}
                        </a>
                    </PenContainer>
                ))}
            </PensGrid>
        </PensContainer>
    );
}