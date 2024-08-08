import ReactDOM from "react-dom/client";

import { Root } from "@/components/Root.js";

// Uncomment this import in case, you would like to develop the application even outside
// the Telegram application, just in your browser.
import "./mockEnv.js";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
