import React from "react";
import Money from '../assets/money.png'
export default function Cardup(props) {


return    (
<div className="flex flex-row  justify-between" >
 <div className="flex flex-row" >
    <img src={Money}  alt="money"  height="51px"/>
    <h1  className="mx-3 font-Outfit font-normal">SOUS-TOTAL</h1>
</div> 
  
<h1 className="font-Outfit font-extrabold text-base mr-3">2800 DZD</h1>
</div>
           

);




}