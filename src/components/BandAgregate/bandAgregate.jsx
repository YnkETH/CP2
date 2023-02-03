import React from "react";
import BandPush from "./bandPush";

const banda = ( props ) => {

    let a = props.addBand

   
    return(
        <div>
            
            <ul>

            {props.addBand && props.addBand.map((c)=> (
                <BandPush name={c.name}
                key={c.name}
                origin={c.origin}
                description={c.description}
                tickets={c.tickets}>             
                </BandPush>
                
               ))}
            </ul>
        </div>
    )

}



export default banda;