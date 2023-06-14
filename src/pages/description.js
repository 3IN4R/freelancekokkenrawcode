import React from "react";
import { Component } from "react";
import News from '../FoodSources.json';
import './description.css';


//Creating a component that renders a table and populates it with items from JSON
//News component gets iterated using keyword and index

export class TableTest extends Component {
    render() {
        return (
            <>
                <div>
                    <table border={1} className='Table' >
                        <tbody className="Tablecontent">
                            <tr>
                                <th>Varm mad</th>
                                <th>Desserter</th>
                                <th>Snacks</th>
                            </tr>
                            {News.news.map((item, i) => (
                                <tr key={i}>
                                    <td>{item.name}</td>
                                    <td>{item.country}</td>
                                    <td>{item.factuality}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}

export default TableTest;