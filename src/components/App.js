import React from "react";
import {testimonials, reviews} from "../data";
import Card from "./Card";
import Rating from "./Rating";
import Info from "./Info";

function App() {
  return (
    <main className="App">
      <section className="top-section">
        <Info/>
        <div className="rating-container">
          {
            reviews.map((review, indx) => {
              return(
                <Rating 
                  key ={indx}
                  index ={indx}
                  reviewer = {review.reviewer}
                  rating = {review.rating}
                />
              );
            })
          }
        </div>

      </section>
      <section className="card-section">
        {
          testimonials.map((testimonial, index) => {
            return (
              <Card 
                key = {index}
                index = {index}
                customerName = {testimonial.user} 
                imgUrl = {testimonial.imgUrl}
                review ={testimonial.comment}
              />
            );
          })
        }
      </section>

    </main>
  );
}

export default App;
