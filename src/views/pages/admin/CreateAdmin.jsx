import { useState } from 'react';
// material-ui
import { useTheme } from '@mui/material/styles';
import {
	Box,
	Button,
	FormControl,
	FormHelperText,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
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
import { Visibility, VisibilityOff } from '@mui/icons-material';

// react-hook-form
import { useForm } from 'react-hook-form'

// hookform/resolvers
import { yupResolver } from '@hookform/resolvers/yup'

// ==============================|| SAMPLE PAGE ||============================== //

const CreateAdminPage = () => {
	const theme = useTheme();
	const [showPassword, setShowPassword] = useState(false)
	const createAdminSchema = yup.object().shape({
		name: yup.string().required(),
		email: yup.string().email().required(),
		password: yup.string().min(8).max(255).required()
	})

	const handleShowPassword = () => {
		setShowPassword(!showPassword)
	}

	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(createAdminSchema)
	})

	const onSubmit = (data) => console.log(data);

	return (
		<MainCard
			title="New Admin"
			secondary={
				<Button component={Link} to="/admin" endIcon={<IconArrowBackUp />}>
					Go Back
				</Button>
			}
		>
			<form onSubmit={handleSubmit(onSubmit)}>
				<FormControl
					fullWidth
					error={Boolean(errors.name)}
					sx={{ ...theme.typography.customInput }}
				>
					<InputLabel htmlFor="outlined-adornment-name-register">Name</InputLabel>
					<OutlinedInput
						id="outlined-adornment-name-register"
						{...register('name')}
					/>
					{errors.name && (
						<FormHelperText error id="standard-weight-helper-text--register">
							{errors.name?.message}
						</FormHelperText>
					)}
				</FormControl>
				<FormControl
					fullWidth
					error={Boolean(errors.email)}
					sx={{ ...theme.typography.customInput }}
				>
					<InputLabel htmlFor="outlined-adornment-email-register">Email Address / Username</InputLabel>
					<OutlinedInput
						id="outlined-adornment-email-register"
						{...register('email')}
					/>
					{errors.email && (
						<FormHelperText error id="standard-weight-helper-text--register">
							{errors.email?.message}
						</FormHelperText>
					)}
				</FormControl>
				<FormControl
					fullWidth
					error={Boolean(errors.password)}
					sx={{ ...theme.typography.customInput }}
				>
					<InputLabel htmlFor="outlined-adornment-password-register">Password</InputLabel>
					<OutlinedInput
						id="outlined-adornment-password-register"
						{...register('password')}
						type={showPassword ? 'text' : 'password'}
						endAdornment={
							<InputAdornment position='end'>
								<IconButton
									onClick={handleShowPassword}
								>
									{showPassword ? <Visibility /> : <VisibilityOff />}
								</IconButton>
							</InputAdornment>
						}
					/>
					{errors.password && (
						<FormHelperText error id="standard-weight-helper-text--register">
							{errors.password?.message}
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
