import React from 'react';

const ListTown = (props)=>{
    return <li id = {"town" + (props.id + 1)}>{props.TownName.name}</li>
}
export default ListTown;