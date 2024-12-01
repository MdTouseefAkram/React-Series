import React from "react";
import ReactDOM from "react-dom/client"

{/* <div id="parent">
    <div id="child">
        <h1>I am h1 tag</h1>
        <h2>I am h1 tag</h2>
    </div>
<div id="child2">
        <h1>I am h1 tag</h1>
        <h2>I am h1 tag</h2>
</div>
</div>

ReactElement(Object) => HTMLAllCollection(Browser Understands) */}

// const heading = React.createElement("h1",
//     {id:"heading", xyz:"abc"},
//     "Hello world from React with CSS"
// )

//core React
const parent = React.createElement("div", {id:"parent"}, [
    React.createElement("div", {id:"child"}, [
        React.createElement("h1", {}, "I am an h1 tag"),
        React.createElement("h2", {}, "I am an h2 tag"),
    ]),
    React.createElement("div", {id:"child"},[
        React.createElement("h1", {}, " I am an h1 tag"),
        React.createElement("h2", {}, "I am an h2 tag"),
]),

]);

//Jsx can make this messy code easier
console.log(parent); //object
//ReactDOM.createElement not working
const root = ReactDOM.createRoot(document.getElementById("header"));

root.render(parent);
// root.render(heading);