import React from "react";
import data from "../data";
import Card from "./Card";
import Rating from "./Rating";
import Info from "./Info";

function App() {
  return (
    <main className="App">
      <section>
        <Info/>
        <Rating/>

      </section>
      <section>
        <Card/>
      </section>

    </main>
  );
}

export default App;
