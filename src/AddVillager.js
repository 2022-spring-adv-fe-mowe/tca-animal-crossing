import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export const AddVillager = () => {
	
	return(
		<>
			<h2>Add Villager</h2>

			<TextField
				required
				id="outlined-required"
				label="Villager Name"
				variant="outlined"
			>
			</TextField>
			<Button
				variant="contained"
				color="success"
				size="large"
			>
				Submit
			</Button>
		</>
	);
};

//Once the user adds a new villager, 
//a pop-up should appear asking the user
//which villager left/is leaving