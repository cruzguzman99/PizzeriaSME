import React from "react";
import {
  Grid,
  Typography,
  Button,
  TextField,
  MenuItem,
} from "@material-ui/core";
import { Helmet } from "react-helmet";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { loginStyles } from "./login.styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
}));

const LoginView = (props) => {
  const classes2 = useStyles();
  const classes = loginStyles();
  const {
    state,
    handleLoginViewOpen,
    handleRegisterViewOpen,
    handleSubmitRegister,
    handleChange,
    validateLoginFields,
    handleCurrent,
    handleClickShowPassword,
    handleMouseDownPassword,
    userType,
    handleChangeRegister,
    firstNameError,
    lastNameError,
    phoneError,
    genderError,
    emailError,
    passwordError,
    handlefile,
  } = props;

  const {
    contentLoginForm,
    contentRegisterForm,
    showPassword,
    emailLoginPatient,
    passwordLoginPatient,
    emailLoginError,
    passwordLoginError,
  } = state;
  return (
    <>
      <Helmet>
        <title> Login</title>
      </Helmet>
      <div className={classes.root}>
        <section className={classes.contentAll}>
          <Grid xs={12} className={classes.backBox}>
            <Grid
              className={contentLoginForm ? classes.boxOpen : classes.boxClose}
            >
              <Typography className={classes.spaceTitle}>
                ??Ya tienes una cuenta?
              </Typography>
              <Typography className={classes.spaceTop}>
                Inicia sesi??n para entrar en la p??gina
              </Typography>
              <Button
                className={classes.button}
                variant="outlined"
                color="white"
                onClick={handleLoginViewOpen}
              >
                Iniciar Sesion
              </Button>
            </Grid>
            <Grid
              className={
                contentRegisterForm ? classes.boxOpen : classes.boxClose
              }
            >
              <Typography className={classes.spaceTitle}>
                ??Aun no tienes cuenta?{" "}
              </Typography>
              <Typography className={classes.spaceTop}>
                Registrarse para iniciar sesi??n
              </Typography>
              <Button
                className={classes.button}
                variant="outlined"
                color="white"
                onClick={handleRegisterViewOpen}
              >
                Registrarse
              </Button>
            </Grid>
          </Grid>
          {/* formulario login y Registrarse*/}
          <Grid
            className={
              contentLoginForm ? classes.openRegister : classes.closeRegister
            }
          >
            <Grid className={contentLoginForm ? classes.open : classes.close}>
              <Grid className={classes.contentLoginForm}>
                <Typography className={classes.title}>
                  Inicio de sesi??n
                </Typography>
                <FormControl
                  className={clsx(classes2.margin, classes.inputLogin)}
                  variant="filled"
                >
                  <InputLabel htmlFor="filled-adornment-password">
                    Correo Electronico
                  </InputLabel>
                  <FilledInput
                    name="emailLoginPatient"
                    error={emailLoginError === 0 ? false : true}
                    helperText={
                      emailLoginError === 1
                        ? "Campo obligatorio"
                        : emailLoginError === 2
                        ? "Introduzca una direcci??n de correo v??lida"
                        : null
                    }
                    value={emailLoginPatient}
                    onChange={handleChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    SelectProps={{
                      native: true,
                    }}
                    id="input-with-icon-textfield"
                    startAdornment={
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl
                  className={clsx(classes.margin, classes.inputLogin)}
                  variant="filled"
                >
                  <InputLabel htmlFor="filled-adornment-password">
                    Password
                  </InputLabel>
                  <FilledInput
                    id="filled-adornment-password"
                    type={showPassword ? "text" : "password"}
                    value={passwordLoginPatient}
                    name="passwordLoginPatient"
                    error={passwordLoginError === 0 ? false : true}
                    helperText={
                      passwordLoginError === 1
                        ? "Campo obligatorio"
                        : passwordLoginError === 2
                        ? "La contrase??a debe contener al menos 6 caracteres"
                        : null
                    }
                    InputLabelProps={{
                      shrink: true,
                    }}
                    SelectProps={{
                      native: true,
                    }}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <Grid className={classes.centerButton}>
                  <select
                    className={classes.buttonLogin}
                    onChange={handleCurrent}
                    style={{
                      backgroundColor: "rgba(249, 120, 1, 1)",
                      color: "#fff",
                      outline: "none",
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "700",
                      border: "none",
                      marginRight: "5px",
                      borderRadius: "5px",
                    }}
                    name=""
                    id=""
                  >
                    {userType.map((item) => (
                      <option>{item}</option>
                    ))}
                  </select>
                  <Button
                    onClick={validateLoginFields}
                    variant="outlined"
                    className={classes.buttonLogin}
                    style={{
                      backgroundColor: "rgba(249, 120, 1, 1)",
                      color: "#fff",
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "700",
                      border: "none",
                      marginLeft: "5px",
                    }}
                  >
                    iniciar
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              className={contentRegisterForm ? classes.open : classes.close}
            >
              <div className={classes.contentRegisterForm}>
                <Typography className={classes.titleRegister}>
                  Registro de usuario
                </Typography>
                <Grid spacing={2} className={classes.register} container>
                  <Grid item lg={6}>
                    <TextField
                      className={classes.inputStyle}
                      label="Nombre"
                      variant="outlined"
                      name="nombre"
                      error={firstNameError}
                      helperText={firstNameError ? "Campo obligatorio" : null}
                      onChange={handleChangeRegister}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      SelectProps={{
                        native: true,
                      }}
                    />
                  </Grid>
                  <Grid item lg={6}>
                    <TextField
                      className={classes.inputStyle}
                      label="Apellido"
                      variant="outlined"
                      name="apellido"
                      error={lastNameError}
                      helperText={lastNameError ? "Campo obligatorio" : null}
                      onChange={handleChangeRegister}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      SelectProps={{
                        native: true,
                      }}
                    />
                  </Grid>
                  <Grid item lg={6}>
                    <TextField
                      className={classes.inputStyle}
                      label="Tel??fono"
                      variant="outlined"
                      name="telefono"
                      type="number"
                      error={phoneError}
                      helperText={phoneError ? "Campo obligatorio" : null}
                      onChange={handleChangeRegister}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      SelectProps={{
                        native: true,
                      }}
                    />
                  </Grid>
                  <Grid item lg={6}>
                    <input
                      className={classes.inputStyle}
                      onChange={handlefile}
                      name="file"
                      type="file"
                      accept=".jpg, .jpeg, .png"
                    />
                  </Grid>
                  <Grid item lg={6}>
                    <TextField
                      className={classes.inputStyle}
                      select
                      label="Sexo"
                      variant="outlined"
                      name="genero"
                      error={genderError}
                      helperText={genderError ? "Campo obligatorio" : null}
                      onChange={handleChangeRegister}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    >
                      <MenuItem key={0} value={0}></MenuItem>
                      <MenuItem key={1} value={"Masculino"}>
                        Masculino
                      </MenuItem>
                      <MenuItem key={2} value={"Femenino"}>
                        Femenino
                      </MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item lg={6}>
                    <TextField
                      className={classes.inputStyle}
                      label="Correo Electronico"
                      variant="outlined"
                      name="correo"
                      error={emailError === 0 ? false : true}
                      helperText={
                        emailError === 1
                          ? "Campo obligatorio"
                          : emailError === 2
                          ? "Introduzca una direcci??n de correo v??lida"
                          : null
                      }
                      onChange={handleChangeRegister}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      SelectProps={{
                        native: true,
                      }}
                    />
                  </Grid>
                  <Grid item lg={6}>
                    <TextField
                      className={classes.inputStyle}
                      label="Contrase??a"
                      variant="outlined"
                      name="contrase??a"
                      helperText={
                        passwordError === 1
                          ? "Campo obligatorio"
                          : passwordError === 2
                          ? "La contrase??a debe contener al menos 6 caracteres"
                          : null
                      }
                      error={passwordError === 0 ? false : true}
                      onChange={handleChangeRegister}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      SelectProps={{
                        native: true,
                      }}
                    />
                  </Grid>
                  <div className={classes.centerButton}>
                    <select
                      className={classes.buttonRegister}
                      onChange={handleChangeRegister}
                      style={{
                        backgroundColor: "rgba(249, 120, 1, 1)",
                        color: "#fff",
                        outline: "none",
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "700",
                        border: "none",
                        marginRight: "5px",
                        borderRadius: "5px",
                      }}
                      name="tipo"
                      id=""
                    >
                      {userType.map((item) => (
                        <option>{item}</option>
                      ))}
                    </select>
                    <Button
                      variant="outlined"
                      color="Default"
                      className={classes.buttonRegister}
                      onClick={handleSubmitRegister}
                      style={{
                        backgroundColor: "rgba(249, 120, 1, 1)",
                        color: "#fff",
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "700",
                        border: "none",
                        marginLeft: "5px",
                      }}
                    >
                      Registrarse
                    </Button>
                  </div>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </section>
      </div>
    </>
  );
};

export default LoginView;
