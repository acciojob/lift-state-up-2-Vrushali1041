
import React ,{useState} from "react";
import './../styles/App.css';

const App = ()=> {
    let [text , setText] = useState("");
    return (
        <div>
            <div className="parent">
                <h1>Parent Component</h1>
                <p>{text}</p>
            <div className="child">
                <h2>Child Component</h2>
                <input type="text" onChange={(event)=>setText(event.target.value)}/>
            </div>
            </div>
        </div>
    )
}

export default App