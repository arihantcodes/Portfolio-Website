import { render } from "preact";
import { App } from "./app.jsx";
import "./index.css";
import { inject } from "@vercel/analytics";
import { injectSpeedInsights } from '@vercel/speed-insights';
inject(); // Invoke inject() separately
injectSpeedInsights();
render(<App />, document.getElementById("app"));
