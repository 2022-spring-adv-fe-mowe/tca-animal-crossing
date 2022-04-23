import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

export const Stats = ({villagers}) => {

	console.log(villagers);

	return(
		<>
		<div className="stats">
			<h2>Stats</h2>

			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Villager Name</TableCell>
							<TableCell>Last Gift Date</TableCell>
							<TableCell>Last Gift Exchange Type</TableCell>
							<TableCell>Picture</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{villagers.map(villager => 
							<TableRow 
									key={villager.name}
							>
								<TableCell>{villager.name}</TableCell>
								<TableCell>{villager.lastGiftedDate}</TableCell>
								<TableCell>{villager.lastGiftExchange}</TableCell>
								<TableCell>{villager.picture}</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
		</>
	);
};