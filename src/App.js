import './App.css';
import FichaRey from "./FichaRey";
import { React, useState } from 'react';

function App() {

  const reyes=[
    {
      nombre:"Atanagildo",
      color:"darkolivegreen",
      precio:178,
      url:"https://html6.es/img/rey_atanagildo.png"
    },{
      nombre:"Ervigio",
      color:"crimson",
      precio:169,
      url:"https://html6.es/img/rey_ervigio.png"
    },{
      nombre:"Ataúlfo",
      color:"peru",
      precio:81,
      url:"https://html6.es/img/rey_ataúlfo.png"
    },{
      nombre:"Leogivildo",
      color:"darkmagenta",
      precio:126,
      url:"https://html6.es/img/rey_leogivildo.png"
    },{
      nombre:"Recesvinto",
      color:"royalblue",
      precio:141,
      url:"https://html6.es/img/rey_rocesvinto.png"
    },{
      nombre:"Sisebuto",
      color:"teal",
      precio:69,
      url:"https://html6.es/img/rey_sisebuto.png"
    }
  ]

  function inicioDos() {
      const resultado1=reyes.filter(rey=>rey.precio===141);
  };

  return (
    <>
    {inicioDos()}
    </>
  );
}

export default App;
