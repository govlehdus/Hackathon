import React from "react";
import ReactDOM from "react-dom";
var x = false;
function Header() {
  return (
    <div>
      <header>
        <div
          id="menu_container"
          class="menu_container"
          onClick={() => {
            var node1 = document.getElementById("menu_container");
            var node2 = document.getElementById("list_container");
            var a = ReactDOM.findDOMNode(node1);
            var b = ReactDOM.findDOMNode(node2);
            a.classList.toggle("change");
            b.classList.toggle("list_transition");
          }}
        >
          <div class="bar1"> </div>
          <div class="bar2"> </div>
          <div class="bar3"> </div>
        </div>
        <h1>WebReg</h1>
      </header>
      <div id="list_container" className="list_container">
        <ul className="list">
          <li>
            <button
              className="list_link"
              onClick={() => {
                var node1 = document.getElementById("menu_container");
                var node2 = document.getElementById("list_container");
                var a = ReactDOM.findDOMNode(node1);
                var b = ReactDOM.findDOMNode(node2);
                a.classList.toggle("change");
                b.classList.toggle("list_transition");
                var node = document.getElementById("registered_container");
                const registered_container = ReactDOM.findDOMNode(node);
                setTimeout(() => {
                  registered_container.classList.toggle(
                    "registered_transition"
                  );
                }, 5000);
                registered_container.classList.toggle("registered_transition");
              }}
            >
              Add Selected Classes
            </button>
          </li>
          <li>
            <button className="list_link">Show Wait Listed Classes</button>
          </li>
          <li>
            <button className="list_link">Drop Classes</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Header;
export { x };
