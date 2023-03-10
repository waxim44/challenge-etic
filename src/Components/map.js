import React ,{useState} from "react";
import Cardup from "./cardup"
import Cardmid from "./cardmid";
import Cardbottom from "./cardbottom";
export default function Card(props) {



  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg rounded-2xl max-w-lg h-72 p-9">
      <Cardup  ></Cardup>
      <Cardmid  title="Miellerie Mazouni Miel De Fleur 
      Sauvages - 250 Grs -"  price="27000" exprice="90000"  ></Cardmid>
      <Cardbottom></Cardbottom>
    </div>
  );







  
}