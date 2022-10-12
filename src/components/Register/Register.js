import React from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import { useAuthContext } from '../../context/AuthContext'
import { useNavigate, Link } from "react-router-dom"
import { TextField } from 'formik-mui'
import { Button, Typography, Grid, Stack } from '@mui/material'
import { useState } from "react";

const Register = () => {

  const { signup } = useAuthContext();

  const [error, setError] = useState("");

  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string().email('Correo electrónico inválido').required('Requerido'),
        password: Yup.string()
          .required('Por favor ingrese su contraseña')
          .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Debe tener 8 caracteres, una mayúscula, una minúscula, un número y un caracter especial"
          )
      })}
      onSubmit={async (values) => {
        setError("")
        try {
          await signup(values.email, values.password)
          navigate(-1)
        } catch (error) {
          if (error.code === 'auth/email-already-in-use')
            setError('El usuario ya existe')
        }
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Stack
          m={15}
          alignItems="center"
        >

          <Typography
            variant="h4"
            component='h5'
            p={4}
          >

            Registrarse

          </Typography>

          <Form>

            <Grid container
              justifyContent="center"
              spacing={2}
            >


              <Grid item
                md={10}
                
                sx={{ padding: 2 }}
              >

                {error && <Typography variant="body1" component='p'>{error}</Typography>}

                <Field
                  component={TextField}
                  type="email"
                  name="email"
                  label="eMail"
                  fullWidth
                  required
                  autoComplete="off"
                  sx={{ margin: 2 }}
                />

                <Field
                  component={TextField}
                  type="password"
                  name="password"
                  label="Contraseña"
                  fullWidth
                  required
                  autoComplete="off"
                  sx={{ margin: 2 }}
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
                  color="primary"
                  disabled={isSubmitting}
                  onClick={submitForm}
                >

                  Crear cuenta

                </Button>


                <Button
                variant="outlined"
                component={Link}
                to='/login'
              >

                Ya tenés una cuenta?

              </Button>

                </Stack>

              </Grid>

            </Grid>

          </Form>

        </Stack>
      )}
    </Formik>
  )
}

export default Register