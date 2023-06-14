import "./Hero.css"
import Logo from '../resources/freelancelogowhite.png';

export default function Hero() {
    return(
        <div className="buddy" id="hero">
            <div className="hero-text">
                <h1 className="bigText2">Velkommen til</h1>
            <img className="" src={Logo} alt="company logo" />
            
            <h2 className="bigText">Frisk og lækert mad forventer dig</h2>
            <p className="heropar">Vi leverer i hele Aarhus og omegn </p>
           <a href="#menu"><button className="herobutton">Se vores menu</button></a> </div>
            <div></div>
        </div>
    )
}