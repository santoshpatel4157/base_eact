import React from "react"; 
import ReactDOM from "react-dom/client"

// const head1 = React.createElement("h1", {id: " h1"}, "head1");

// const head2 = React.createElement("h2",  {id : "h2"},"head2");

// const head3 = React.createElement("h3",{id:"h3"},"head3");

// const head = React.createElement("div",{id:"title"},[head1,head2,head3]);
// const heading = ReactDOM.createRoot(document.getElementById("root"));

// heading.render(head);


const head1 = (<h1 className="hhh">head11</h1>);
const head2 = (<h2>head21</h2>);
const head3 = (<h2>head31</h2>);

const head =React.createElement("div",{id:"title"},[head1,head2,head3]);
const heading = ReactDOM.createRoot(document.getElementById("root"));

heading.render(head);

