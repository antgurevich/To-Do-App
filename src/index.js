import React from "react"
import ReactDOM from "react-dom"
import TodoContainer from "./functionBased/components/TodoContainer" // Component file
import "./functionBased/App.css" // Style sheet

ReactDOM.render(
    <React.StrictMode>
        <TodoContainer />
    </React.StrictMode>, 
    document.getElementById("root")
)