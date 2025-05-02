import { Alert, Box, Button, Container, Grid, Link, Paper, Snackbar, TextField, Typography } from "@mui/material"
import { useState } from "react"
import {Link as RouterLink, useNavigate} from 'react-router-dom'
const Login = () => {

    const [user, setUser] = useState({
        username:"",
        password:""
        });
    const navigate = useNavigate();
      const [openSnackbar, setOpenSnackbar] = useState(false);
   const handleChange = (e)=>{
        setUser({...user ,[e.target.name]:e.target.value});
    }
    const handleValidate = () =>{
        const credentialsString = sessionStorage.getItem("credentials");
        const credentials=JSON.parse(credentialsString);
        console.log(credentials);
        if(user.username!==credentials.username) return false;
        if(user.password!==credentials.password) return false;
        return true;
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        if(handleValidate()){
           sessionStorage.setItem("loggedInToken", true); 
             setOpenSnackbar(true); 

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    }
                  }
    return (
    <Container maxWidth="xs">
            <Paper elevation={10} sx={{marginTop:14,p:2} }> 

            <Typography variant="h5" component="h1" sx={{textAlignLast:"center"}}> Sign In </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{mt:1}}>
                    <TextField placeholder="Enter Username" onChange={(e)=>handleChange(e)}  name="username" autoFocus fullWidth required sx={{mb:2}}/>
                    <TextField placeholder="Enter Password" onChange={(e)=>handleChange(e)}   name="password" type="password" fullWidth required sx={{mb:2}}/>
                    <Button type="submit" variant="contained" fullWidth sx={{mt:1}}> Sign In</Button>
                    <Grid container justifyContent="space-between" sx={{mt:1}}>
                        <Grid item>
                            <Link component={RouterLink} to="/forgot"> Forgot Password </Link>
                            </Grid>
                        <Grid item>
                            <Link component={RouterLink} to="/register"> Register </Link>
                            </Grid>
                    </Grid>
                </Box>
            </Paper>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={1000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          Login Successful!
        </Alert>
      </Snackbar>
    </Container>
           )
}

export default Login
