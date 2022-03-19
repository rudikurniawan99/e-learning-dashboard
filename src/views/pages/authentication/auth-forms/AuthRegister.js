import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  CircularProgress,
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
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// react-query
import { useMutation } from 'react-query';

// axios
import axios from 'axios';

// config
import config from 'config'

// react-hook-form
import { useForm } from 'react-hook-form'

// hookform/resolvers
import { yupResolver } from '@hookform/resolvers/yup'

// react-router-dom
import { useNavigate } from 'react-router-dom'

// react-redux
import { useDispatch } from 'react-redux';

import { UPDATE_CURRENT_USER } from 'redux/types';

const AuthRegister = () => {
  const theme = useTheme();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const { mutate, isLoading } = useMutation( async({ name, email, password }) => {
    await axios.post(`${config.baseApi}/auth/register`, {
      name, email, password
    })
  }, {
    onSuccess: (data) => {
      const payload = data.data.data
      dispatch({ 
        type: UPDATE_CURRENT_USER,
        id: payload.id,
        name: payload.name,
        email: payload.email,
        role: payload.role
      }) 
      navigate('/')
    }
  })

  const registerSchema = yup.object().shape({
    name: yup.string().max(255).required(),
    email: yup.string().email().max(255).required(),
    password: yup.string().min(8).max(255).required()
  }).required()

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(registerSchema)
  })

  const onSubmit = (data) => {
    mutate(data)
  }

  return (
    <>
      {isLoading && (
        <Box 
          sx={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <CircularProgress />
        </Box>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl
            fullWidth
            error={Boolean(errors.name)}
            sx={{ ...theme.typography.customInput }}
          >
            <InputLabel htmlFor="outlined-adornment-name-register">Fullname</InputLabel>
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
              type={showPassword ? 'text' : 'password'}
              {...register('password')}
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
              inputProps={{}}
            />
            {errors.password && (
              <FormHelperText error id="standard-weight-helper-text-password-register">
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
                Sign up
              </Button>
            </AnimateButton>
          </Box>
      </form>
    </>
  );
};

export default AuthRegister;
