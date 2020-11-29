import React, { useState } from 'react';
import ListCity from './ListCity';

function ListState(props){
    const [ShowCity, setShowCity] = useState(false);
    return <><li onClick = {()=> setShowCity(!ShowCity)}>{props.StateName.name}</li>
    {ShowCity ? <ul>
        {props.StateName.cities.map((Cityname, cityIndex)=>{
           return <ListCity CityName = {Cityname} key = {cityIndex}/>
        })}
    </ul> : null}
    </>
}
export default ListState;