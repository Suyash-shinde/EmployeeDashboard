import { Alert, Box, Button, Container, Grid, Link, Paper, Snackbar, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import {Link as RouterLink, useNavigate} from 'react-router-dom'
const Forgot = () => {
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    useEffect(()=>{
        const user = sessionStorage.getItem("credentials");
    if(user===null){
        setPassword("No User Found, Please Register");
    }
    else{
        setPassword(JSON.parse(user).password);
    }
    },[]);

    const handleSubmit = ()=>{
        navigate("/");
    }
    return (
    <Container maxWidth="xs">
            <Paper elevation={10} sx={{marginTop:14,p:2} }> 

            <Typography variant="h5" component="h1" sx={{textAlignLast:"center"}}> Sign In </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{mt:1}}>
                    <TextField  name="password"  value={password} disabled fullWidth required sx={{mb:2}}/>
                    <Button variant="contained" type="submit" fullWidth sx={{mt:1}} > Back To Login </Button>
                    <Grid container justifyContent="space-between" sx={{mt:1}}>
                        <Grid item>
                            <Link component={RouterLink} to="/register"> Register </Link>
                            </Grid>
                    </Grid>
                </Box>
            </Paper>
    </Container>
           )
}

export default Forgot
