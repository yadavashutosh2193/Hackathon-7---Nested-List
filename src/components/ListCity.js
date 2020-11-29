import React, { useState } from 'react';
import ListTown from './ListTown';
const ListCity = (props) =>{
    const [ShowTown, setShowTown] = useState(false);
    return <><li onClick = {() => setShowTown(!ShowTown)} id = {"city" + props.id}>{props.CityName.name}</li>
    {ShowTown ? <ul>
        {props.CityName.towns.map((Townname, TownIndex)=>{
            return <ListTown TownName = {Townname} key = {TownIndex} id = {TownIndex}/>
        })}
    </ul> : null}
    </>
}
export default ListCity;