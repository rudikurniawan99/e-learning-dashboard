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
  Stack,
  Typography
} from '@mui/material';

// third party
import * as yup from 'yup';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// config
import config from 'config'

// axios
import axios from 'axios';

// react-query
import { useMutation } from 'react-query'

// react-hook-form
import { useForm } from 'react-hook-form';

// hookform/resolvers
import { yupResolver } from '@hookform/resolvers/yup'

const AuthLogin = () => {
  const theme = useTheme();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const { mutate, data } = useMutation( async ( { email, password } ) => {
    const data = await axios.post(`${config.baseApi}/auth/login`, {
      email, password
    })
    return data
  })

  const validationSchema = yup.object().shape({
    email: yup.string().max(255).email().required(),
    password: yup.string().max(255).required()
  }).required()

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  })

  const onSubmit = data => {
    console.log(data);
    console.log(errors);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          fullWidth
          error={Boolean(errors.email)}
          sx={{ ...theme.typography.customInput }}
        >
          <InputLabel htmlFor="outlined-adornment-email-login">Email Address / Username</InputLabel>
          <OutlinedInput
            {...register('email')}
            id="outlined-adornment-email-login"
            label="Email Address / Username"
          />
          {errors.email && (
            <FormHelperText error id="standard-weight-helper-text-email-login">
              {errors.email?.message}
            </FormHelperText>
          )}
        </FormControl>

        <FormControl
          fullWidth
          error={Boolean(errors.password)}
          sx={{ ...theme.typography.customInput }}
        >
          <InputLabel htmlFor="outlined-adornment-password-login">Password</InputLabel>
          <OutlinedInput
            {...register('password')}
            id="outlined-adornment-password-login"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  size="large"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          {errors.password && (
            <FormHelperText error id="standard-weight-helper-text-password-login">
              {errors.password?.message}
            </FormHelperText>
          )}
        </FormControl>
        <Stack direction="row" justifyContent="space-between" spacing={1}>
          <Typography variant="subtitle1" color="secondary" sx={{ textDecoration: 'none', cursor: 'pointer' }}>
            Forgot Password?
          </Typography>
        </Stack>
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
              Sign in
            </Button>
          </AnimateButton>
        </Box>
      </form>
    </>
  );
};

export default AuthLogin;
