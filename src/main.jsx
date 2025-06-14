import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Homepage from "./Homepage.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<div className='bg-[#0f0f0f]'>
			<Homepage />
		</div>
	</StrictMode>
);
