import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import './App.css';
import aclogo from './acnh logo.png';


export const Home = () => {

	const nav = useNavigate();

	return(
			<>
			<div class="App-header">
				<img src={aclogo} class="ac-logo" />

				<Button 
					class="buttonMain"
					variant="contained"
					onClick={() => nav("/AddData")}
				>
					Add Data
				</Button>

				<Button 
					class="buttonMain"
					variant="contained"
					onClick={() => nav("/AddVillager")}
				>
					Add Villager
				</Button>

				<Button 
					class="buttonMain"
					variant="contained" 
					onClick={() => nav("/Stats")}
				>
					View Stats
				</Button>
			</div>
		</>
  );
};