import React from "react"
import ReactDOM from "react-dom"
import TodoContainer from "./components/TodoContainer" // Component file
import "./App.css" // Style sheet

ReactDOM.render(
    <React.StrictMode>
        <TodoContainer />
    </React.StrictMode>, 
    document.getElementById("root")
)