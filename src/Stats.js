import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

export const Stats = ({giftExchanges}) => {


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
		</div>
		</>
	);
};