import * as React from "react";
import * as ReactDOM from "react-dom";

import Start from "./awesome-sec-audit.tsx";

// Dedicating a file to this basic call allows us to import all major modules
// into test suites.
const item = document.getElementById("content");
if (item == null) {
    console.log("Render container missing");
}
else {
    ReactDOM.render(
        <Start />,
        item
    );
}
