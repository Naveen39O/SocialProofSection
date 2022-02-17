import React from "react";

function Customer(props){
    return(
        <div className="customer">
            <img className="cust-img" src={props.imgUrl}/>
            <p className="customer__details">
                {props.customer}<br/>
                Verified Buyer
            </p>
        </div>
    );
}

export default Customer;