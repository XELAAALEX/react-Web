    
// # Namaste React 🚀
// DAY-1 
    // <div id = "Parent">
    //     <div id = "Child1">
    //         <h1>If Not Now </h1>
    //         <h2>Then, When?</h2>
    //     </div>
    //     <div id = "Child2">
    //         <h1>If Not Now </h1>
    //         <h2>Then, When?</h2>
    //     </div>
    // </div>
       
    // const heading = React.createElement("div", {"id":"Parent"}, [React.createElement("div", {"id":"Child1"}, [React.createElement("h1", {},"If Not Now" ), React.createElement("h2", {}, "Then, When?")]), React.createElement("div", {"id":"Child2"}, [React.createElement("h1", {},"If Not Now" ), React.createElement("h2", {}, "Then, When?")])])
    // const root = ReactDOM.createRoot(document.getElementById('root'))
    // root.render(heading);


// # Namaste React 🚀
// DAY-2
/*
# Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles
*/

import React from "react";
import ReactDOM from "react-dom/client";

// Create child1 with key
const child1 = React.createElement("div", { id: "child1", key: "child1" }, [
  React.createElement("h1", { key: "h1-child1" }, "This is Namaste React 🚀"),
  React.createElement("h2", { key: "h2-child1" }, "by Akshay Saini"),
]);

// Create child2 with key
const child2 = React.createElement("div", { id: "child2", key: "child2" }, [
  React.createElement("h1", { key: "h1-child2" }, "I am an h1 tag"),
  React.createElement("h2", { key: "h2-child2" }, "I am an h2 tag"),
]);

// Create parent element with both children
const parent = React.createElement("div", { id: "parent" }, [child1, child2]);

// Create root
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the parent element
root.render(parent);
