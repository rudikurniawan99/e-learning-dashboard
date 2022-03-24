// material-ui
import { Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import { IconUserPlus } from '@tabler/icons';
import { Link } from 'react-router-dom';

// project imports
import MainCard from 'ui-component/cards/MainCard';

import { useQuery } from 'react-query'
import axios from 'axiosConfig'
import config from 'config'
import { useEffect, useState } from 'react';

// ==============================|| Admin PAGE ||============================== //
//
const AdminPage = () => {

	const { data, isSuccess } = useQuery('Admin', async () => axios.get(`${config.baseApi}/users`))
	const [users, setUsers] = useState([])

	useEffect(() => {
		if (isSuccess) setUsers(data.data.data[0])
	}, [data, isSuccess])

	return (
		<MainCard
			title="List of Admin"
			secondary={
				<Button component={Link} to="/admin/create" endIcon={<IconUserPlus />}>
					New
				</Button>
			}
		>
			<TableContainer
				component={Paper}
			>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>No</TableCell>
							<TableCell>Name</TableCell>
							<TableCell>Role</TableCell>
							<TableCell>Email</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{users.map((user, index) => (
							<TableRow key={user.id}>
								<TableCell>{index + 1}</TableCell>
								<TableCell>{user.name}</TableCell>
								<TableCell>{user.role}</TableCell>
								<TableCell>{user.email}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>

			</TableContainer>
		</MainCard>
	);
}

export default AdminPage;
