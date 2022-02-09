import React from "react";

function Customer(props){
    return(
        <div>
            <img src={props.imgUrl}/>
            <h4>{props.customer}</h4>
            <p>Verified Buyer</p>
        </div>
    );
}

export default Customer;