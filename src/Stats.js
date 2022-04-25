import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from "@mui/material"
import { useNavigate } from "react-router-dom";

export const Stats = ({giftExchanges}) => {

	const nav = useNavigate();

	// Let's see if new data makes it here ? ? ?
	//
	// From 'lifted' state in App.js.
	//
	console.log(giftExchanges);

	return(
		<>
		<div className="stats">
			<h2>Stats</h2>

			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Villager Name</TableCell>
							<TableCell>Last Gift Exchange Date</TableCell>
							<TableCell>Last Gift Exchange Result</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{giftExchanges.map(giftExchange => 
						<TableRow 
									key={giftExchange.name}
							>
								<TableCell>{giftExchange.name}</TableCell>
								<TableCell>{giftExchange.date}</TableCell>
								<TableCell>{giftExchange.giftExchange}</TableCell>
							</TableRow>
						)};
					</TableBody>
				</Table>
			</TableContainer>
			<Button
				variant="contained"
				color="secondary"
				size="large"
				onClick={() => nav('/')}
			> Home </Button>
		</div>
		</>
	);
};