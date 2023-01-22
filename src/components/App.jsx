import React from "react";
import Header from "./Header";
import Table from "./Tables";
import SOC from "./SOC";
import Drag from "./Dragger";
import Registered from "./Registered";



function App(){
    return(
    <div className="container">
        <Header />
        <Registered />
        <div className="table_container" id="table_container"><Table /></div>
        <Drag />
        <div className="soc_container" id="soc_container"><SOC /></div>
    </div>
    )
}
export default App;
