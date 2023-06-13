import "./Hero.css"

export default function Hero() {
    return(
        <div className="buddy">
            <div className="hero-text">
            <h1 className="bigText2">Velkommen til Free-lance Kokken</h1>
            <h2 className="bigText">Vi leverer frisk og lækkert mad til hele Aarhus og omegn</h2>
            <p className="heropar">Vi tilbyder en stor udvalg af retter </p>
           <a href="/menu"><button className="herobutton">Se vores menu</button></a> </div>
            <div></div>
        </div>
    )
}