import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import { useNavigate, Link } from "react-router-dom"
import { Button, Typography, Grid, TextField, Stack } from '@mui/material'
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
        setError('Correo inválido')
      }
      if (error.code === 'auth/wrong-password') {
        setError('Contraseña inválida')
      }
      if (error.code === 'auth/user-not-found') {
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
      if (error.code === 'auth/popup-closed-by-user') {
        setError('Pop-up de autenticación cerrado')
      }
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email) return setError("Completá tu eMail para reseter la contraseña");
    try {
      await resetPassword(user.email);
      setError('Te enviamos un eMail. Revisa tu bandeja de entrada')
    } catch (error) {
      setError(error.message);
    }
  };

  return (

    <Stack
      m={18}
      alignItems="center"
      
    >

      <Typography
        variant="h4"
        component='h5'
        p={4}
      >

        Acceder a tu cuenta

      </Typography>

      <form
        onSubmit={handleSubmit}
      >
        <Grid container
          justifyContent="center"
          spacing={2}
        >

          <Grid item
            md={10}
            sx={{ padding: 2 }}
          >

            {error && <Typography variant="body1" component='p'>{error}</Typography>}

            <TextField
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              label="eMail"
              fullWidth
              required
              autoComplete="off"
            />

          </Grid>

          <Grid item
            md={10}
            sx={{ padding: 2 }}
          >

            <TextField
              fullWidth
              type="password"
              name="password"
              id="password"
              label="Password"
              required
              onChange={handleChange}
              autoComplete="off"
            />

          </Grid>

          <Grid item
            md={12}
            sx={{ padding: 2 }}
          >
            <Stack
              justifyContent="space-evenly"
              direction="row"
            >

              <Button
                variant="contained"
                type="submit"
              >

                Acceder

              </Button>

              <Button
                variant="outlined"
                component={Link}
                to="#!"
                onClick={handleResetPassword}
              >

                Olvidé mi contraseña

              </Button>

              <Button
                variant="outlined"
                onClick={handleGoogleSignin}
              >

                Acceder con Google

              </Button>

              <Button
                variant="outlined"
                component={Link}
                to='/register'
              >

                Registrarse

              </Button>

            </Stack>

          </Grid>

        </Grid>

      </form>

    </Stack>

  );
}
export default Login