import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AlertQhatu from '../../components/alert/AlertQhatu';

const LoginStl = ({
  refEmail,
  refPassword,
  handleClickSignIn,
  alertMessage,
}) => {
  return (
    <>
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <TextField
          type="email"
          margin="normal"
          required
          fullWidth
          id="txtEmail"
          label="Correo Electronico"
          name="txtEmail"
          inputRef={refEmail}
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="txtPassword"
          label="Contraseña"
          type="password"
          id="txtPassword"
          inputRef={refPassword}
        />
        <Button
          type="button"
          onClick={handleClickSignIn}
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Ingresar
        </Button>
        <Grid container>
          <Grid item>
            <Link to="/register" variant="body2">
              {'¿No tienes una cuenta? Registrate'}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default LoginStl;
