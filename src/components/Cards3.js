import { db } from '../firebase';
import { useEffect, useState } from 'react';
import {getDocs, collection, doc} from 'firebase/firestore';

function Card3() {
    const [eventList, setEventList] = useState([]);

    const eventCollectionRef = collection(db, 'events3');

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
                        <img className='event-image' src='https://img.freepik.com/free-photo/flat-lay-table-full-delicious-food-composition_23-2149141362.jpg'></img>
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

export default Card3;