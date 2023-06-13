import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Cards";
import Card2 from "../components/Cards2";
import './menu.css';
import '../components/works.css';
import Card3 from '../components/Cards3';
import Card4 from "../components/Cards4";
import Card5 from "../components/Cards5";
import Card6 from "../components/Cards6";
import Plate from "../components/plateimg";

export default function Menu(){
    return(
        <div>
<div className="menutext">
<div className="moveHeader"><Plate/>

<h1 className="bigText2">Her finder du vores begivenhedmenu</h1></div>
<h2>Klik på 'læs om retter' knap for at se nuværende retter</h2></div>
<div className="cards">
    
<Card/>
<Card2/>
<Card3/>
<Card4/>
<Card5/>
<Card6/>
</div>
</div>
    )
}