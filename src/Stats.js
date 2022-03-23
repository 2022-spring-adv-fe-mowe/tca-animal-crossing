import { Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

export const Stats = () => {
	return(
		<>
		<h2>Stats</h2>

		<TableContainer>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Villager</TableCell>
						<TableCell>Last Interaction Date</TableCell>
						<TableCell>Last Gift Date</TableCell>
						<TableCell>Picture?</TableCell>
						<TableCell>Avg. Weekly Chats</TableCell>
						<TableCell>Avg. Weekly Gifts</TableCell>
					</TableRow>
				</TableHead>
			</Table>
		</TableContainer>
		</>
	);
};