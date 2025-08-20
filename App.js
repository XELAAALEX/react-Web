    
    
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
    
    
    
    
    
    
    
    
    const heading = React.createElement("div", {"id":"Parent"}, [React.createElement("div", {"id":"Child1"}, [React.createElement("h1", {},"If Not Now" ), React.createElement("h2", {}, "Then, When?")]), React.createElement("div", {"id":"Child2"}, [React.createElement("h1", {},"If Not Now" ), React.createElement("h2", {}, "Then, When?")])])
    const root = ReactDOM.createRoot(document.getElementById('root'))
    root.render(heading);