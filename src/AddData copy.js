import { FormControl, InputLabel, MenuItem, Select, FormGroup, Checkbox, FormControlLabel, RadioGroup, FormLabel, Radio, Button } from "@mui/material";
import RadioGroupContext from "@mui/material/RadioGroup/RadioGroupContext";

export const AddData = () => {
	return(
		<>
			<h2>Add an Interaction</h2>

			<FormControl fullWidth>
				<InputLabel id="villager-select-label">Villager</InputLabel>
				<Select
					labelId="villager-select-label"
					id="villager-select"
					//value={villager}
					label="Villager"
					//onChange={handleChange} 
				>	
					<MenuItem value="Ione">Ione</MenuItem>
					<MenuItem value="Marshal">Marshal</MenuItem>
				</Select>
			</FormControl>
			
			<FormGroup>
				<h4>Interactions</h4>
				<FormControlLabel control={<Checkbox />} label="Chat"/>
				<FormControlLabel control={<Checkbox />} label="Came Over"/>
				<FormControlLabel control={<Checkbox />} label="Asked to Visit Their House"/>
				<FormControlLabel control={<Checkbox />} label="Asked to Leave"/>
				<FormControlLabel control={<Checkbox />} label="Other Interaction–Villager Initiated"/>
				<FormControlLabel control={<Checkbox />} label="Other Interaction-Player Initiated"/>
				<h4>Gifting</h4>
				<FormControl>
					<FormLabel id="gift-type-group-label">Choose One</FormLabel>
					<RadioGroup
						aria-labelledby="gift-type-group-label"
						defaultValue="none"
						name="radio-buttons-group"
					>
						<FormControlLabel value="none" control={<Radio />} label="None"/>
						<FormControlLabel value="GIR" control={<Radio />} label="Gift w/ Gift in Return"/>
						<FormControlLabel value="No-GIR" control={<Radio />} label="Gift w/ No Gift in Return"/>
						<FormControlLabel value="PIR" control={<Radio />} label="Gift w/ Villager Picture in Return"/>
					</RadioGroup>
				</FormControl>
			</FormGroup>
			<p></p>
			<p></p>
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