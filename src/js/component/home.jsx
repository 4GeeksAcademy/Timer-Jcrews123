import React, { useEffect , useState} from "react";

//include images into your bundle
import { Clock } from "./Clock";

//create your first component
const Home = () => {
	const [seconds, setSeconds] = useState(0);
	useEffect(()=> {
			const startCounter = setInterval(() => {
				setSeconds(prevSeconds => prevSeconds + 1);
			}, 
			1000);
		return() => clearInterval(startCounter)} , [])
	const formatTime = (time) => {
		return time.toString().padStart(6,'0').split('');
	}
	const digits = formatTime(seconds);
	return (
		<div className="d-flex justify-content-center">
			<div className="text-center bg-dark" style={{height:"250px", width:"900px"}}>
				<div id="container" className= "d-flex flex-column align-items-center flex-md-row justify-content-between text-center">
					<div className="bg-secondary"style={{height:"100px", width:"100px"}}>
					<i className="fa-regular fa-clock bg-secondary fa-5x" style={{height:"100px", width:"100px", color:"white"}}></i>
					</div>
						{digits.map((digits,index) =>(
					<div key = {index} className="bg-secondary"style={{height:"100px", width:"100px"}}>
						<p>{digits}</p>
					</div>))}
					
				</div>
			</div>
		</div>
	);
	
};

export default Home;
