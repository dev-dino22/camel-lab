import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./routes/router.tsx";

createRoot(document.getElementById("root")!).render(<Router />);
