import React from "react";

function Rating(props){
    return (
        <div>
            {
                [...Array(props.rating)].map((e, index) => 
                {
                    return (<img key = {index} src="./images/icon-star.svg" alt="rating"/>);
                })
            }
            <p>Rated 5 Stars in {props.reviewer}</p>
        </div>
    )
}

export default Rating;