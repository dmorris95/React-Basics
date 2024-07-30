//About section
//Brief description with heading and a paragraph
import React from "react";
import styles from './About.module.css'

function About() {
    const heading = <h3 id={styles.about}>About Me</h3>
    const info = <p>A traveller at heart who enjoys exploring new lands and tasting different parts of culture around the world. Enjoys learning new skills and pushing myself to climb mountains.</p>

    return (
        
        <div>
            {heading}
            {info}
        </div>
    );
}
export default About;