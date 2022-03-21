import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


export const Home = () => {

	const nav = useNavigate();

	return(
			<>
			<h2>Home</h2>

			<Button 
				variant="contained"
 				onClick={() => nav("/AddData")}
			>
				Add Data
			</Button>

			<Button 
				variant="contained"
				onClick={() => nav("/AddVillager")}
			>
				Add Villager
			</Button>

			<Button 
				variant="contained" 
				onClick={() => nav("/Stats")}
			>
				View Stats
			</Button>
		</>
  );
};