import React,{useState,useEffect} from "react";
import "../../styles/index.css";
//include images into your bundle
import TrafficLight from "./Trafic-light.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<TrafficLight/>
		</div>
	);
};

export default Home;
