import React from 'react'
import './works.css'
import { useState, useEffect } from 'react';

function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(true);
    const domRef = React.useRef();
    React.useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => setVisible(entry.isIntersecting));
            }
        );
            observer.observe(domRef.current);
            return () => observer.unobserve(domRef.current);
    }, []);
    return (
        <div className={`card ${isVisible ? 'card-visible' :''}`}
        ref={domRef} >
            {props.children}
        </div>
    );
}

export default FadeInSection;
    
