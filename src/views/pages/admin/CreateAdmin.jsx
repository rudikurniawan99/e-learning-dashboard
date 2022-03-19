// material-ui
import { useTheme } from '@mui/material/styles';
import {
	Box,
	Button,
	FormControl,
	FormHelperText,
	Grid,
	InputLabel,
	OutlinedInput,
	TextField,
	useMediaQuery
} from '@mui/material';

// third party
import * as yup from 'yup';
// import { Formik } from 'formik';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets
import MainCard from 'ui-component/cards/MainCard';
import { Link } from 'react-router-dom';
import { IconArrowBackUp } from '@tabler/icons';

// react-hook-form
import { useForm } from 'react-hook-form'

// hookform/resolvers
import { yupResolver } from '@hookform/resolvers/yup'

// ==============================|| SAMPLE PAGE ||============================== //

const CreateAdminPage = () => {
	const theme = useTheme();
	const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

	const createAdminSchema = yup.object().shape({
		name: yup.string().required(),
		email: yup.string().email().required()
	})

	const { handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(createAdminSchema)
	})

	const onSubmit = (data) => console.log(data);

	return (
		<MainCard
			title="New Admin"
			secondary={
				<Button component={Link} to={-1} endIcon={<IconArrowBackUp />}>
					Go Back
				</Button>
			}
		>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Grid container spacing={matchDownSM ? 0 : 2}>
					<Grid item xs={12} sm={6}>
						<TextField
							fullWidth
							label="First Name"
							margin="normal"
							name="fname"
							type="text"
							defaultValue=""
							sx={{ ...theme.typography.customInput }}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							fullWidth
							label="Last Name"
							margin="normal"
							name="lname"
							type="text"
							defaultValue=""
							sx={{ ...theme.typography.customInput }}
						/>
					</Grid>
				</Grid>
				<FormControl
					fullWidth
					error={Boolean(errors.email)}
					sx={{ ...theme.typography.customInput }}
				>
					<InputLabel htmlFor="outlined-adornment-email-register">Email Address / Username</InputLabel>
					<OutlinedInput
						id="outlined-adornment-email-register"
					/>
					{errors.email && (
						<FormHelperText error id="standard-weight-helper-text--register">
							{errors.email?.message}
						</FormHelperText>
					)}
				</FormControl>

				<Box sx={{ mt: 2 }}>
					<AnimateButton>
						<Button
							disableElevation
							fullWidth
							size="large"
							type="submit"
							variant="contained"
							color="secondary"
						>
							submit
						</Button>
					</AnimateButton>
				</Box>
			</form>
		</MainCard>
	);
};

export default CreateAdminPage;
