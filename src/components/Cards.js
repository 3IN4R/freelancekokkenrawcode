import { db } from '../firebase';
import { useEffect, useState } from 'react';
import {getDocs, collection, doc} from 'firebase/firestore';

function Card() {
    
    const [eventList, setEventList] = useState([]);
//Gathering data from database
    const eventCollectionRef = collection(db, 'events');
//Creating an asynchronous application
    useEffect(() =>{
         let getEventList = async () => {
            //Read data
            //Set event list
            //Try to prevent errors using try/catch
            //Wait until data is gathered
            //Filtering out the data
            //Setting the filteredData
            try {
            const data = await getDocs(eventCollectionRef);
            const filteredData = data.docs.map((doc) =>({
                ...doc.data(),
                 id: doc.id,
                }));
            setEventList(filteredData);
            } catch (err) {
                console.error(err);
            }
    };

    

    

    getEventList();
    },  [])

   
    return (
        <div>
            <div className='down'>
                {eventList.map((events) => (
                    <div className='cardinside'>
                        <img className='event-image' src='https://www.brides.com/thmb/EKltHhNgAEA3qEfzLJuJeThg5cs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sqcopy-0bb93fd53174427586f98eadfb51417f.jpg'></img>
                        <h1 className='serviceName'>{events.type}</h1>
                       
                        <p> Max Antal {events.guestNr} </p>
                        <p> Pris: {events.price}</p>
                        <p> Veganske retter: {events.veganPossible}</p>
                        <a href='#menu2'><button className='this'>Læs om retter</button></a>
                    </div>
                    
                )  )}
            </div>
        
        </div>
    )


   
}

export default Card;