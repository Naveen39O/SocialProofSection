import React from "react";
import Customer from "./Customer";

function Card(props){
    const cardNumber = props.index + 1;
    return (
        <div className={"card " + " card" + cardNumber}>
            <Customer key={props.index} customer={props.customerName} imgUrl ={props.imgUrl}/>
            <p className="cust-review">{props.review}</p>
        </div>
    );
}

export default Card;