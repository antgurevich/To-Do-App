import React from "react"
import ReactDOM from "react-dom"
import TodoContainer from "./functionBased/components/TodoContainer" // Component file
import "./functionBased/App.css" // Style sheet
import { BrowserRouter as Router } from "react-router-dom" // Router file

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <TodoContainer />
        </Router>
    </React.StrictMode>, 
    document.getElementById("root")
)