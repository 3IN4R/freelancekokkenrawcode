import { db } from '../firebase';
import { useEffect, useState } from 'react';
import {getDocs, collection, doc} from 'firebase/firestore';

function Card4() {
    const [eventList, setEventList] = useState([]);

    const eventCollectionRef = collection(db, 'events4');

    useEffect(() =>{
         let getEventList = async () => {
            //Read data
            //Set event list
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
                        <img className='event-image' src='https://media.istockphoto.com/id/1329913246/photo/happy-business-colleagues-talking-while-eating-lunch-in-a-restaurant.jpg?s=612x612&w=0&k=20&c=i-NZDG0WUyoZjvVLsYimZduag8OXtHbzs0giSd8W0CA='></img>
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

export default Card4;