import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from "@mui/material"
import { useNavigate } from "react-router-dom";

export const Stats = ({giftExchanges}) => {

	const nav = useNavigate();

	console.log(giftExchanges);

	return(
		<>
		<div className="stats">
			<h1>Stats</h1>

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
				id="statsHome"
				variant="contained"
				size="large"
				onClick={() => nav('/')}
			> Home </Button>
		</div>
		</>
	);
};