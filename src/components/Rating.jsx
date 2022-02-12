import React from "react";

function Rating(props){
    return (
        <div className="rating-div">
            <div className="star-div">
            {
                [...Array(props.rating)].map((e, index) => 
                {
                    return (<div><img className="star" key = {index} src="./images/icon-star.svg" alt="rating"/></div>);
                })
            }
            </div>
            <p className="rating-p">Rated 5 Stars in {props.reviewer}</p>
        </div>
    )
}

export default Rating;