import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from '../layout/AuthLayout'
import { checkingAuthentication, startGoogleSingIn } from '../../store/auth'
import { useForm } from '../../hooks'
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"


export const LoginPage = () => {

  const { status } = useSelector( state => state.auth );
  const dispath = useDispatch();
  const { email, password, onInputChange } = useForm({
    email : 'carlos@google.com',
    password: '123456'
  });

  const isAuthenticating = useMemo( () => status === 'checking', [status]);

  const onSumbit = ( event ) => {
     event.preventDefault();
     console.log( { email, password });
     dispath( checkingAuthentication() );
  }

  const onGoogleSignIn = () => {
    console.log('OngoogleSubmit');
    dispath( startGoogleSingIn () );
   
  }
  return (

    <AuthLayout title='Login'>
       <form>
                <Grid container>
                   <Grid item xs={ 12 } sx={{ mt:2 }}>
                      <TextField 
                        label="Correo"
                        type="email"
                        placeholder="correo@google.com"
                        fullWidth
                        name='email'
                        value={ email }
                        onChange  = { onInputChange }
                        />
                   </Grid>
                   <Grid item  xs={ 12 } sx={{ mt:2 }}>
                      <TextField 
                        label="Contraseña"
                        type="password"
                        placeholder="Contraseña"
                        fullWidth
                        name='password'
                        value={ password }
                        onChange  = { onInputChange }
                        />
                   </Grid>

                   <Grid container spacing={ 2 } sx={ { mb: 2, mt: 1 }}>
                      <Grid item xs={ 12 } sm={ 6}>
                          <Button disabled= { isAuthenticating } onClick={ onSumbit } type='submit' variant="contained" fullWidth>
                              Login
                          </Button>

                      </Grid>
                      <Grid item xs={ 12 } sm={ 6}>
                          <Button disabled= { isAuthenticating } onClick={ onGoogleSignIn } variant="contained" fullWidth>
                              <Google/>
                              <Typography sx={{ ml: 1}}>Google</Typography>
                          </Button>

                      </Grid>
                   </Grid>
                </Grid>

                <Grid container direction='row' justifyContent='end'>
                 
                  <Link component={ RouterLink } color='inherit' to='/auth/register'>
                   Crear una cuenta
                  </Link>
                   
                </Grid>
            </form>
    </AuthLayout>
  )
}
