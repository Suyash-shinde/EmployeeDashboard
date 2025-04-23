import { Password } from "@mui/icons-material";
import { Box, Button, Container, Grid, Link, Paper, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { Link as RouterLink } from 'react-router-dom'
const Register = () => {
    const [user, setUser] = useState({
        username: "",
        password: "",
        email: "",
        confirmPassword: "",
    });
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const handleValidate = () => {
        console.log(user)
        if (user.password != user.confirmPassword) {
            return false;
        }
        if (user.username.length < 3 || user.username.length > 15) return false;
        if (user.password.length < 8 || user.password.length > 16) return false;
        return true;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (handleValidate()) {
            sessionStorage.setItem("credentials", JSON.stringify(user));
            console.log("Submitted", user);
        }
    }
    return (
        <Container maxWidth="xs">
            <Paper elevation={10} sx={{ marginTop: 8, p: 2 }}>

                <Typography variant="h5" component="h1" sx={{ textAlignLast: "center" }}> Sign In </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <TextField placeholder="Enter Username" onChange={(e) => handleChange(e)} name="username" autoFocus fullWidth required sx={{ mb: 2 }} />
                    <TextField placeholder="Enter Email" onChange={(e) => handleChange(e)} name="email" fullWidth required sx={{ mb: 2 }} />
                    <TextField placeholder="Enter Password" type="password" onChange={(e) => handleChange(e)} name="password" autoFocus fullWidth required sx={{ mb: 2 }} />
                    <TextField placeholder="Confirm Password" type="password" onChange={(e) => handleChange(e)} name="confirmPassword" autoFocus fullWidth required sx={{ mb: 2 }} />
                    <Button type="submit" variant="contained" fullWidth sx={{ mt: 1 }}> Sign In</Button>
                    <Grid container justifyContent="space-between" sx={{ mt: 1 }}>
                        <Grid item>
                            <Link component={RouterLink} to="/forgot"> Forgot Password </Link>
                        </Grid>
                        <Grid item>
                            <Link component={RouterLink} to="/"> Login </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Container>
    )
}

export default Register
