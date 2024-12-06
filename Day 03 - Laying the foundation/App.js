import React from "react";
import ReactDOM from "react-dom/client";

// // React.createElement => ReactElement-JS Object => HTMLElement(render)

// const heading = React.createElement(
//     "h1",
//     {id: "heading"},
//     " Core React"
// );

// console.log(heading);

// // JSX (transpiled before it reaches the JS) - PARCEL - Babel

// // JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)
// const jsxHeading = <h1 id="heaidng">React using JSX</h1>;

// console.log(jsxHeading);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);

//////////////////////////////////////////////////////////////////////

// React Component
const heading = (
    <h1 className="hand" tabIndex="5">
        React using JSX
    </h1>
);

// React Component
// Class Based Component
// Functional Component - NEW


//React Functional Component
const HeadingComponent  = () => {
    return <h1 className="heading">React Functional Component</h1>
};

const HeadingComponent2 = () => (
    <h1 className="heading">React Functional Component</h1>
)

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

//////////////////////////////////////////////////////////////

const Title = () => (
    <h1 className="hand" tabIndex="5">
        React using JSX
    </h1>
);

const HeadingComponent3 = () => (
    <div id="container">
        {Title()}
        <Title/>
        <Tile></Tile>
        {/* these three are same thing */}
        <h1 className="heading">React Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);

//we can any javacript code in jsx using {} brackets or can write expression also like
//{12+13}