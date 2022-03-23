import { TextField, Button } from "@mui/material";

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