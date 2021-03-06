import React from "react";

function Rating(props){
    return (
        <div className={"rating-div " +  props.reviewer}>
            <div className="star-container" >
            {
                [...Array(props.rating)].map((e, index) => 
                {
                    return (<img className="star" key={index} src="./images/icon-star.svg" alt="rating"/>);
                })
            }
            </div>
            <p className="rating-p" >Rated 5 Stars in {props.reviewer}</p>
        </div>
    )
}

export default Rating;