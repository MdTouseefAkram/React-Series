import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is React"),
    React.createElement("h2", {}, "by Md Touseef Akram"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
]);
const Title = () => (
  <h1 className="head" tabIndex="5">
    React using JSX 
  </h1>
);

console.log(parent); // object
// React Fragment - behaves like an empty tag
const HeadingComponent = () => (
  <>
    <div id="container">
      <Title />
      <h1 className="heaidng">React Fucntional Component</h1>
    </div>
    <div id="container-2"></div>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
root.render(<HeadingComponent />);
