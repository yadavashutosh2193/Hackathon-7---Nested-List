import React from 'react';

const ListTown = (props)=>{
    return <li id = {"town" + props.id}>{props.TownName.name}</li>
}
export default ListTown;