import React from "react";
import ReactDOM from "react-dom/client";

// {using core concept of react}

// react element is end of the day is object.
//when we render it on to the DOM then it becomes html element.

const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

//JSX - its a HTML like systax.  [Using JSX]

// JSX - transpiled it before it reaches the JS Engine.

// if need to write in multiple lines we need to use parenthisis

const JsxHeading = (
  <h1 id="heading" className="headingone">
    Namaste React Using JSX
  </h1>
);

console.log(JsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(JsxHeading);
