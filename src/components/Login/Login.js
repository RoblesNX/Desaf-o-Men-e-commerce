import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import { useNavigate, Link } from "react-router-dom"
import { Button, Typography, Box, Grid, TextField} from '@mui/material'
import { useState } from "react"


const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle, resetPassword } = useAuthContext();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(user.email, user.password)
      navigate(-1)
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        setError('Correo invalido')
      }
      if (error.code === 'auth/wrong-password') {
        setError('Contraseña invalida')
      }
      if (error.code === ' auth/user-not-found') {
        setError('Usuario no encontrado')
      }
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate(-1);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email) return setError("Write an email to reset password");
    try {
      await resetPassword(user.email);
      setError('We sent you an email. Check your inbox')
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Box sx={{ marginTop: 15, display: 'flex', justifyContent: 'center'}}>

      <Typography variant="h4" component='h5'>Login</Typography>

      <Grid container my={4}>
        <form
          onSubmit={handleSubmit}
        >
          <Grid item md={12} sx={{padding: 2}}>
            {error && <Typography variant="body1" component='p'>{error}</Typography>}
            <TextField
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              label="eMail"
            />
          </Grid>
          <Grid item md={12} sx={{padding: 2}}>
            <TextField
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              label="Password"
            />

          </Grid>

          <Grid item md={12} sx={{padding: 2}}>
            <Button
              type="submit"
            >
              Sign In
            </Button>
            <Button component={Link}
              to="#!"
              onClick={handleResetPassword}
            >
              Forgot Password?
            </Button>
            </Grid>
            <Grid item md={12} sx={{padding: 2}}>
            <Button
              onClick={handleGoogleSignin}
            >
              Google login
            </Button>
            <Typography sx={{ margin: 1 }} variant="body1" component={Link} to='/register'>Register</Typography>
          </Grid>
        </form>
      </Grid>
    </Box>
  );
}
export default Login