import React, { useEffect, useState } from "react";
import _ from "lodash";
import { ContentOverlay, FeaturedBackground, FeaturedContainer, FeaturedForeground, ParticlesContainer, StyledParticle } from "./Featured.styles";

function createParticle(i) {
	this.id = i;
	this.width = _.random(1,20) + 'px';
	this.height = this.width;
	this.x = _.random(10,90) + '%';
	this.delay = _.random(1,60) + 's';
	this.duration = _.random(10,60) + 's';
	this.html = <StyledParticle style={{width: this.width, height: this.height, left: this.x, animationDelay: this.delay, animationDuration: this.duration}} />;
}

export function Featured() {
    const [particles, setParticles] = useState(null);

    useEffect(() => {
        if (particles) {
            return;
        }
        // generate 100 particles
        const particlesArr = [];
        for (let i = 0; i < 100; i++) {
            particlesArr.push(new createParticle(i));
        }
        setParticles(particlesArr);
    },[particles])

    return(
        <>
        <FeaturedContainer>
            <ContentOverlay>
                <h1>Mario Duarte</h1>
            </ContentOverlay>
            <FeaturedBackground></FeaturedBackground>
            <ParticlesContainer>
                {particles && particles.map((particle)=>(<React.Fragment key={particle.id}>{particle.html}</React.Fragment>))}
            </ParticlesContainer>
            <FeaturedForeground></FeaturedForeground>
        </FeaturedContainer>
        </>
    );
}