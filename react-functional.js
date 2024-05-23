import React from "react";
import ReactDOM from "react-dom/client";

// React Components

   // class based Component
   // functional Component

// React functional Components 
// a function return some peice of JSX code called functional components.

const elem = <span>React Element</span>;

const Title = () =>  (
  <h1 className="title">Title of react</h1>
);

// printing react element

const title = (
    <h1 className="title">Title of react element
     {elem}
    </h1>
  );

const number = 1000;


 // Even we can call a function 
 
const HeadingComponent = () => (
    <div id="container">
        <Title />
        {Title()} 
        <h2>{number}</h2>
        {title}
           <h1 className="header">Namaste React functional Component</h1>
        <Render />
    </div>
 );

 const Render = () => (
    <div className="wow"><strong>Hello Everyone</strong></div>
 );


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);