import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import './App.css';

import { useState } from "react";
import { useNavigate } from "react-router";

export const AddVillager = (
		{
			addNewVillager
		}
	) => {

	const nav = useNavigate();

	const currentDate = new Date();
	const date = `${currentDate.getMonth()+1}/${currentDate.getDate()}/${currentDate.getFullYear()}`; 

	const [newVillagerName, setNewVillagerName] = useState("");
	// const [villagerToBeReplaced, setReplacedVillagerName] = useState("")

	const submitNewVillager = () => {
		newVillagerName !== "" 
		// || villagerToBeReplaced !== "" 
		?
			
			addNewVillager({
				name: newVillagerName,
				giftExchange: "Villager added to island",
				date: date,
				picture: false,
				active: true
			},
			alert(newVillagerName + " has been added to your island. Welcome, " + newVillagerName + "!"),
			nav ("/")
			)
		: alert('Please enter a name in both fields')
	};

	return(
		<>
			<div className="addVillager">
				<h1>Add Villager</h1>
				<h3>New Villager</h3>
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
				/>
	{/* 			<h3>Villager Leaving Island</h3>
				<TextField
					sx={{
						bgcolor: 'white',
						mr: 2
					}}
					required
					id="required-text-field"
					label="Villager name"
					value={villagerToBeReplaced}
					onChange={(e) => setReplacedVillagerName(e.target.value)}
				/> */}
				<br />
				<Button
					sx={{
						mt: 2,
						mb: 2,
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