import React, { useState, useEffect } from "react";

export const TrafficLight = () => {
	const [color, setColor] = useState("red");

	return (
		<div className="body">
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
		</div>
	);
};
