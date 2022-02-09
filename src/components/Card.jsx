import React from "react";
import Customer from "./Customer";

function Card(props){
    return (
        <div>
            <Customer key={props.index} customer={props.customerName} imgUrl ={props.imgUrl}/>
            <p>{props.review}</p>
        </div>
    );
}

export default Card;