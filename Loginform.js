import React from "react";
import './Loginform.css';

const Loginform=(props)=>{
    return(
        
        <div className="Loginform">
            {/* <label>Name</label> */}
            <input  name={props.name} placeholder={props.placeholder}/>  
              </div>
        
    )
}
export default Loginform;
       