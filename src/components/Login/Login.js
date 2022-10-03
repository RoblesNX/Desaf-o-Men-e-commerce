import React from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import { useAuthContext } from '../../context/AuthContext'
import { useNavigate, Link } from "react-router-dom"
import { TextField } from 'formik-mui'
import { Button, Typography, Box, Grid } from '@mui/material'
import { useState } from "react"
import { Container } from '@mui/system'


const Login = () => {

  const { login, loginWithGoogle, resetPassword } = useAuthContext();

  const user = [{ email: '', password: '' }]

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate(-1);
    } catch (error) {
      setError(error.message)
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
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        // password: Yup.string()
        //   .required('Please Enter your password')
        //   .matches(
        //     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        //     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        //   )
      })}
      onSubmit={async (values, { setSubmitting }) => {
        setError("");
        try {
          await login(values.email, values.password)
          navigate(-1)
        } catch (e) {
          setSubmitting(false)
          setError(error.message);
        }
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Container sx={{ marginTop: 15 }}>

          <Typography variant="h4" component='h5'>Login</Typography>
          <Box>
            <Grid container my={4} rowSpacing={2} columnSpacing={1} >
          <Form>
          <Grid item md={12} >
          {error && <Typography variant="body1" component='p'>{error}</Typography>}
            <Field
              component={TextField}
              type="email"
              name="email"
              label="eMail"
            />
            <Field
              component={TextField}
              type="password"
              name="password"
              label="password"
            />
            </Grid>
            <Grid  item md={12}>
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
            >
              Submit
            </Button>
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={handleGoogleSignin}
            >
              Sign In With Google
            </Button>
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={handleResetPassword}
            >
              Reset password
            </Button>
            </Grid>
            <Typography variant="body1" component={Link} to='/register'>Register</Typography>
          </Form>
          </Grid>
          </Box>
        
        </Container>
      )}
    </Formik>
  )
}
export default Login