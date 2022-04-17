import React from "react";
import ReactDOM from "react-dom";

import { App }  from "./app/App"


const entryPoint = document.getElementById("entry-point");

const root = ReactDOM.createRoot(entryPoint);

root.render(<App/>);