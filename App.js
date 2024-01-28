const heading = React.createElement(
        "div", 
       { id: "child"},[
        React.createElement("h1", {id: "child1"}, "I am an tag"),
        React.createElement("h2", {id: "child2"}, "I am an small tag"),
]);
console.log("heading", heading);
console.log("console", console);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("root", root.render);
root.render(heading);