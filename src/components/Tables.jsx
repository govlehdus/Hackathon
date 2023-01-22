import React from "react";

function Table(){
    return(
        <div className="table">
            <div>
                <ul className="headers">
                    <li>Mon</li>
                    <li>Tue</li>
                    <li>Wed</li>
                    <li>Thu</li>
                    <li>Fri</li>
                </ul>
            </div>
            <div>
                <ul className="times_container">
                    <li><hr/>8am</li>
                    <li><hr/>9am</li>
                    <li><hr/>10am</li>
                    <li><hr/>11am</li>
                    <li><hr/>12pm</li>
                    <li><hr/>1pm</li>
                    <li><hr/>2pm</li>
                    <li><hr/>3pm</li>
                    <li><hr/>4pm</li>
                    <li><hr/>5pm</li>
                    <li><hr/>6pm</li>
                    <li><hr/>7pm</li>
                    <li><hr/>8pm</li>
                    <li><hr/>9pm</li>
                </ul>
            </div>
        </div>
        
    )
}
export default Table;