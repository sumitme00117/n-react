// const heading = React.createElement("h1",{id: "heading"},"Hello World!")
// console.log(heading) // It returns an object
// const root = ReactDOM.createRoot(document.getElementById("root")) 
// root.render(heading) // The work of render method is to convert the object (i.e heading) into HTML element <h1> that browser understand


// creating a nested html structure

{/* <div id="parent">
    <div id="child">
        <h1>I am a h1 tag</h1>
    </div>
</div> */}

const parent = React.createElement("div", {id: "parent"}, 
[React.createElement("div", {id: "child"}, [
    React.createElement("h1",{}, "I am an h1 tag"), 
    React.createElement("h2",{}, "I am an h2 tag")]),
    React.createElement("div", {id: "child"}, [
        React.createElement("h1",{}, "I am an h1 tag"), 
        React.createElement("h2",{}, "I am an h2 tag")])])

console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root")) 
root.render(parent)
