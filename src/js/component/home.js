import React, { useState } from "react";

//create your first component
export const TrafficLight = () => {
	const [color, setColor] = useState("green");

	return (
		<>
			<div className="trafficPole container">
				<div
					className={color === "red" ? "redOn" : "redOff"}
					onClick={() => setColor("red")}
				/>
				<div
					className={color === "yellow" ? "yellowOn" : "yellowOff"}
					onClick={() => setColor("yellow")}
				/>
				<div
					className={color === "green" ? "greenOn" : "greenOff"}
					onClick={() => setColor("green")}
				/>
			</div>
		</>
	);
};
