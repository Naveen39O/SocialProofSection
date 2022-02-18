import React from "react";

function Customer(props){
    return(
        <div className="customer">
            <img className="cust-img" src={props.imgUrl}/>
            <p className="customer__name">{props.customer}</p>
            <p className="customer__authentic">Verified Buyer</p>
        </div>
    );
}

export default Customer;