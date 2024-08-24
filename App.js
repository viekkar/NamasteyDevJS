import React from "react";
import RactDOM from "react-dom/client"

const parent=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"im h1 tag"),
        React.createElement("h2",{},"im h2 tag"),
    ]),    
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"im h1 tag"),
        React.createElement("h2",{},"im h2 tag"),
    ])

]);

console.log(parent);

const root=RactDOM.createRoot(document.getElementById("root"));

root.render(parent);