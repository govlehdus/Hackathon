import React from "react";
import ReactDOM  from "react-dom";
import App from "./components/App";



ReactDOM.render(<App />,document.getElementById("root"))

const node_dragger= document.getElementById("dragger")
const node_element1=document.getElementById("table_container")
const node_element2=document.getElementById("soc_container")
const dragger=ReactDOM.findDOMNode(node_dragger)
const table_container=ReactDOM.findDOMNode(node_element1)
const soc_container=ReactDOM.findDOMNode(node_element2)
dragger.addEventListener("mousedown",function(e){
    window.addEventListener("mousemove",resize)
    window.addEventListener("mouseup",stopResize)
})

function resize(e){
    table_container.style.width=e.pageX - table_container.getBoundingClientRect().left + 'px'
    soc_container.style.width=window.screen.width-51.5-table_container.getBoundingClientRect().width + 'px'
}
function stopResize() {
    window.removeEventListener('mousemove', resize)
  }