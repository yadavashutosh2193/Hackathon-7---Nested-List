import React, { Component, useState } from "react";
import "./../styles/App.css";

// Do not alter the states const and values inside it.
const states = [
  {
    name: "Madhya Pradesh",
    cities: [
      {
        name: "Indore",
        towns: [
          {
            name: "Mhow",
          },
          {
            name: "Dewas",
          },
        ],
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit",
          },
          {
            name: "Berasia",
          },
        ],
      },
      {
        name: "Gwalior",
        towns: [
          {
            name: "Ajaypur",
          },
        ],
      },
    ],
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad",
          },
          {
            name: "Hirapur",
          },
        ],
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's",
          },
          {
            name: "Faizal khan's",
          },
        ],
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's",
          },
          {
            name: "Guddu bhaiya's",
          },
        ],
      },
    ],
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin",
          },
          {
            name: "Jalah",
          },
        ],
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati",
          },
          {
            name: "Leopard found in IIT Guwahati",
          },
        ],
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Dibrugarh",
          },
          {
            name: "Silchar",
          },
        ],
      },
    ],
  },
  {
    name: "Bihar",
    cities: [
      {
        name: "Patna",
        towns: [
          {
            name: "Sonpur",
          },
          {
            name: "Maner",
          },
        ],
      },
      {
        name: "Gaya",
        towns: [
          {
            name: "Bakraur",
          },
          {
            name: "Barachatti",
          },
        ],
      },
      {
        name: "Darbhanga",
        towns: [
          {
            name: "Singhwara",
          },
          {
            name: "Jale",
          },
        ],
      },
    ],
  },
];

function App() {
  const [cityVisible, setCityVisibility] = useState("none");
  const [townVisible, settownVisible] = useState("none");
  function DispalyCity(){
    if(townVisible === "none"){
      settownVisible("");
    }else{
      settownVisible("none")
    }
  }
  function DispalyTown(){
    if(cityVisible === "none"){
      setCityVisibility("");
    }else{
      setCityVisibility("none")
    }
  }
  return (<div id="main">
  <ul>{states.map((state, idx)=>{
    return <li onClick = {DispalyCity}  id = {"state" + (idx + 1)} key = {idx}>{state.name}
    <ul>
      {states.map((city, cityindex)=>{
        return <li style = {{"display":{cityVisible}}} onClick = {DispalyTown}  id = {"city" + (city + 1)} key = {cityindex}>{city.cities.name}
        <ul>
          {states.map((town, townIndex)=>{
            return <li style = {{"display":{townVisible}}} id = {"town" + (townIndex + 1)} key = {townIndex}>{town.cities.towns}</li>
          })}
        </ul>
        </li>
      })}
    </ul>
    </li>
  })}</ul>
  
  {/* <ul>
    {states.map((sta, stateIndex)=>{
      return <li key = {stateIndex}>{sta.name}
      <ul>
      {states[stateIndex].map((city, cityIndex)=>{
      return <li key = {cityIndex}>{city.name}
      <ul>
      {states[stateIndex].cities[cityIndex].map((town, townIndex)=>{
      return <li key = {townIndex}>{town.name}</li>
    })}
      </ul>
      </li>
    })}
      </ul>
      </li>
    })}
    </ul> */}
  </div>);
}

export default App;
