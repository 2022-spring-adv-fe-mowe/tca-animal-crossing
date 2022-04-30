import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import './App.css';

import { useState } from "react";
import { useNavigate } from "react-router";

export const AddVillager = ({addNewVillager}) => {

	const nav = useNavigate();

	const currentDate = new Date();
	const date = `${currentDate.getMonth()+1}/${currentDate.getDate()}/${currentDate.getFullYear()}`; 

	const [newVillagerName, setNewVillagerName] = useState("");

	const submitNewVillager = () => {
		newVillagerName !== "" ?
			addNewVillager({
				name: newVillagerName,
				giftExchange: "Villager added to island",
				date: date,
				picture: false,
				active: true
			})
		: alert('Please enter a name')
	};

	return(
		<>
			<div className="addVillager">
				<h2>Add Villager</h2>

				<TextField
					sx={{
						bgcolor: 'white',
						mr: 2
					}}
					required
					id="required-text-field"
					label="Villager Name"
					value={newVillagerName}
					onChange={(e) => setNewVillagerName(e.target.value)}
				>
				</TextField>
				<Button
					sx={{
						mt: 1,
						bgcolor: 'teal'
					}}
					variant="contained"
					size="large"
					color="secondary"
					onClick={submitNewVillager}
				>
					Submit
				</Button>
				<br />
				<Button
						size="large"
						onClick={() => nav('/')}
					> Home
					</Button>
			</div>
		</>
	);
};

//Once the user adds a new villager, 
//a pop-up should appear asking the user
//which villager left/is leaving