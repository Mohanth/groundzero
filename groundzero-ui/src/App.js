import React from "react";
import "./App.css";
import GlobalDashboard from './components/GlobalDashboard'
import GlobalHeader from "./components/GlobalHeader";

function App() {
    return (
        <div>
            <GlobalHeader/>
            <GlobalDashboard/>
        </div>
    );
}

export default App;
