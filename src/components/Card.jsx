import React from "react";
import Customer from "./Customer";

function Card(props){
    return (
        <div className="card">
            <Customer key={props.index} customer={props.customerName} imgUrl ={props.imgUrl}/>
            <p className="cust-review">{props.review}</p>
        </div>
    );
}

export default Card;