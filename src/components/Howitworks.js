import React from 'react'
import './works.css'
//Credits for inspiration: https://dev.to/selbekk/how-to-fade-in-content-as-it-scrolls-into-view-10j4
//Creating a function component asking props 
function FadeInSection(props) {
//variable for setting entries to 'visible'    
    const [isVisible, setVisible] = React.useState(true);
//prevents rerendering for entries
    const domRef = React.useRef();
    //using 'observer' to check the viewport status and each entry visible and making sure it does not intersect.
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
        //Checks if 'card' is visible (boolean) using ternary operator, updates the children style accordingly.
        <div className={`card ${isVisible ? 'card-visible' :''}`}
        ref={domRef} >
            {props.children}
        </div>
    );
}

export default FadeInSection;
    
