import React from "react";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import Howit from "../components/Howitworks";
import Hero from "../components/hero";
import FadeInSection from "../components/Howitworks";
import '../components/works.css'
import How from "../components/how";
import Plate from "../components/plateimg";
import Menu from "./menu";
import TableTest from "./description";
import Contact from "./contact";

export default function Home(){
    return(
        <div>
<Navbar/>
<Hero/>
<div className="movingSection">
<div className="moveHeader">
<Plate/>
<h1 className="bigText2">Sådan virker det:</h1></div>
<FadeInSection>
    
<How/>

</FadeInSection>
</div>
<h1 className="dot" id="menu">.</h1>
<div >
<Menu/>
</div>

<div className="tablemenu" id="menu2">
<h1>Her finder du vores nuværende menu</h1>
<TableTest/>
</div>
<div class="elfsight-app-1ea6d15a-6aee-44b5-852b-e406abe49ca8"></div>
<div id="contact">
<Contact/>
</div>
<Footer/>
</div>

    )
}