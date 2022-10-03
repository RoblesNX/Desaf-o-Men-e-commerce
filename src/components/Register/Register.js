import React from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import { useAuthContext } from '../../context/AuthContext'
import { useNavigate, Link } from "react-router-dom"
import { TextField } from 'formik-mui'
import { Button, Typography, Box, Grid } from '@mui/material'
import { Container } from '@mui/system'
import { useState } from "react";

const Register = () => {

  const { signup } = useAuthContext();

  const [error, setError] = useState("");

  const navigate = useNavigate();

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
      onSubmit={async (values, { setSubmitting, setStatus }) => {
        setError("");
        try {
          await signup(values.email, values.password)
          navigate("/")
        } catch (e) {
          setSubmitting(false)
          setError(error.message);
        }
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Container sx={{ marginTop: 15 }}>

          <Typography variant="h4" component='h5'>Register</Typography>
          <Box>
            <Grid container padding={5} rowSpacing={2} columnSpacing={1} >
          <Form >
          <Grid item md={12}>
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
            <Grid item md={12}>
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
            >
              Submit
            </Button>
            <Typography variant="body1" component={Link} to='/login'>Already have an Account?</Typography>
            </Grid>
          </Form>
          </Grid>
          </Box>
        </Container>
      )}
    </Formik>
  )
}

export default Register