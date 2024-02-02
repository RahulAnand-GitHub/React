import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {id:"heading"}, "Hello Form React🙏🏻");

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm Rahul Anand."),
    React.createElement("h2", {}, "And I'm from Bihar."),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Currently pursuing MCA"),
    React.createElement("h2", {}, "From CGC, Landran."),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
