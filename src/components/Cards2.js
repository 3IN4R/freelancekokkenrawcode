import { db } from '../firebase';
import { useEffect, useState } from 'react';
import {getDocs, collection, doc} from 'firebase/firestore';
import './cards.css';

function Card2() {
    const [eventList, setEventList] = useState([]);

    const eventCollectionRef = collection(db, 'events2');

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
                        <img className='event-image' src='https://media.istockphoto.com/id/612018672/photo/enjoying-party-with-nearest-friends.jpg?s=612x612&w=0&k=20&c=F2fdJU-1s18qVHV5GM0WmWl2zv12Zj4VTvudQOOB8Xk='></img>
                        <h1 className='serviceName'>{events.type}</h1>
                        <p> Max Antal {events.guestNR} </p>
                        <p> Pris: {events.price}</p>
                        <p> Veganske retter: {events.veganPossible}</p>
                        <a href='#menu2'><button className='this'>Læs om retter</button></a>
                    </div>
                    
                )  )}
            </div>
        
            
          
        </div>
    )


   
}

export default Card2;