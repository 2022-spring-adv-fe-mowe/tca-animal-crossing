//import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import './App.css';
import aclogo from './img/acnh logo.png';


export const Home = () => {

	const nav = useNavigate();

	return(
			<>
			<div className="App-header">
				<img src={aclogo} className="ac-logo" />

				<button 
					className="buttonMain"
					onClick={() => nav("/Play")}
				>
					Play
				</button>

				<button 
					className="buttonMain"
					onClick={() => nav("/AddVillager")}
				>
					Add Villager
				</button>

				<button 
					className="buttonMain"
					onClick={() => nav("/Stats")}
				>
					View Stats
				</button>
			</div>
		</>
  );
};