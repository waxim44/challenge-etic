import React ,{useState} from "react";
import product from "../assets/image 2.png"
import plus from "../assets/plus.png"
import minus from "../assets/minus.png"

 function Cardmid(props) {

const [count, setCount] = useState(0);




return (
   <div  className="flex flex-row mt-10 justify-between" >
    <div className="flex flex-row ">
        <img  src={product} alt="image" ></img> 
        <div className=" flex flex-col ml-4 self-center font-Outfit font-normal" >
            <h3 className=" w-56 text-sm" >{props.title}</h3> 
            <h5 className="text-xs text-greenos font-extrabold">{props.price}</h5>
            <h6 className="text-xs line-through text-grayos">{props.exprice}</h6>
        </div> 
    </div>
    
    <div className="flex flex-row justify-evenly w-24" >
         <button  onClick={()=>{setCount(count-1)}} ><img src={minus} alt="-"   ></img></button>
         <h3 className=" self-center">{count}</h3>
         <button onClick={()=>{setCount(count+1)}}   ><img src={plus} alt="+" ></img></button>

    </div>    



   </div>


);



}
export default Cardmid ; 