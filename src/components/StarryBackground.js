import React, { useEffect } from "react";
import "../styles/StarryBackground.css"; // Make sure to create this file

const StarryBackground = () => {
    useEffect(() => {
        const starContainer = document.querySelector(".starry-bg");
        if (!starContainer) return;

        // Clear any existing stars before re-generating
        starContainer.innerHTML = "";

        for (let i = 0; i < 80; i++) { // Number of stars
            let star = document.createElement("div");
            star.className = "star";
            star.style.width = `${Math.random() * 1.5 + 0.5}px`;  // Adjusted smaller size (1px - 3px)
            star.style.height = star.style.width; // Ensure width and height are equal for a perfect circle
            star.style.top = `${Math.random() * 100}vh`;
            star.style.left = `${Math.random() * 100}vw`;
            star.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random flicker speed
            star.style.animationDelay = `${Math.random() * 5}s`; // Random start delay
            starContainer.appendChild(star);
        }
    }, []);

    return <div className="starry-bg"></div>;
};

export default StarryBackground;
