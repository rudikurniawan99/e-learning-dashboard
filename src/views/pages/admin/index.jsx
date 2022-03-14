// material-ui
import { Button, Typography } from '@mui/material';
import { IconUserPlus } from '@tabler/icons';
import { Link } from 'react-router-dom';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| Admin PAGE ||============================== //
//
const AdminPage = () => (
	<MainCard
		title="List of Admin"
		secondary={
			<Button component={Link} to="/admin/create" endIcon={<IconUserPlus />}>
				New
			</Button>
		}
	>
		<Typography variant="body2">
			Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna
			alissa. Ut enif ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons
			construal. Duos aube grue dolor in reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive
			sin ocean cuspidate non president, sunk in culpa qui officiate descent molls anim id est labours.
		</Typography>
	</MainCard>
);

export default AdminPage;
