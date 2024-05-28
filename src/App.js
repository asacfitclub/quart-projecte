import './App.css';
import FichaRey from "./FichaRey";
import { React, useState } from 'react';

function App() {

  const [total, setTotal] = useState(0);


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
  

  return (
    <>
    <h1 className='totalAPagar'>Total a pagar: {total}</h1>
    <div className='cajaCentral'>
      <FichaRey nombre={reyes[0].nombre} color={reyes[0].color} precio={reyes[0].precio} url={reyes[0].url} setTotal={setTotal}></FichaRey>
      <FichaRey nombre={reyes[1].nombre} color={reyes[1].color} precio={reyes[1].precio} url={reyes[1].url} setTotal={setTotal}></FichaRey>
      <FichaRey nombre={reyes[2].nombre} color={reyes[2].color} precio={reyes[2].precio} url={reyes[2].url} setTotal={setTotal}></FichaRey>
      <FichaRey nombre={reyes[3].nombre} color={reyes[3].color} precio={reyes[3].precio} url={reyes[3].url} setTotal={setTotal}></FichaRey>
      <FichaRey nombre={reyes[4].nombre} color={reyes[4].color} precio={reyes[4].precio} url={reyes[4].url} setTotal={setTotal}></FichaRey>
      <FichaRey nombre={reyes[5].nombre} color={reyes[5].color} precio={reyes[5].precio} url={reyes[5].url} setTotal={setTotal}></FichaRey>
    </div>
    </>
  );
}

export default App;
