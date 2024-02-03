import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"))

// const headingJSX = <h1 className="heading">Namaste React using JSX.</h1>;

const Title = () =>{
  return <h1>NamasteReact 🚀</h1>
}

const HeadingComponent = ()=>{
  return <div>
    <Title />
    {1000+2000}
    <h1 className="heading">Functional Component</h1>
  </div>
}

root.render(<HeadingComponent />)