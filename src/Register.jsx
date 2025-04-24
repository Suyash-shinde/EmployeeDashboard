import { Box, Button, Container, Grid, Link, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const Register = () => {
    const [user, setUser] = useState({
        username: "",
        password: "",
        email: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" }); 
    };

    const handleValidate = () => {
        let newErrors = {};
        if (user.username.length < 3 || user.username.length > 15) {
            newErrors.username = "Username must be between 3 and 15 characters";
        }

        if (user.password.length < 8 || user.password.length > 16) {
            newErrors.password = "Password must be between 8 and 16 characters";
        }

        const hasLetter = /[A-Za-z]/.test(user.password);
        const hasNumber = /\d/.test(user.password);
        const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(user.password);

        if (!hasLetter || !hasNumber || !hasSymbol) {
            newErrors.password = (newErrors.password || "") + "\nPassword must contain a letter, number, and symbol atleast once";
        }

        if (user.password !== user.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (handleValidate()) {
            sessionStorage.setItem("credentials", JSON.stringify(user));
            console.log("Submitted", user);
            navigate("/dashboard");
        }
    };

    return (
        <Container maxWidth="xs">
            <Paper elevation={10} sx={{ marginTop: 8, p: 2 }}>
                <Typography variant="h5" component="h1" sx={{ textAlign: "center" }}>
                    Sign In
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <TextField
                        placeholder="Enter Username"
                        name="username"
                        fullWidth
                        required
                        sx={{ mb: 2 }}
                        onChange={handleChange}
                        error={Boolean(errors.username)}
                        helperText={errors.username}
                    />
                    <TextField
                        placeholder="Enter Email"
                        name="email"
                        fullWidth
                        required
                        sx={{ mb: 2 }}
                        onChange={handleChange}
                    />
                    <TextField
                        placeholder="Enter Password"
                        type="password"
                        name="password"
                        fullWidth
                        required
                        sx={{ mb: 2 }}
                        onChange={handleChange}
                        error={Boolean(errors.password)}
                        helperText={errors.password}
                    />
                    <TextField
                        placeholder="Confirm Password"
                        type="password"
                        name="confirmPassword"
                        fullWidth
                        required
                        sx={{ mb: 2 }}
                        onChange={handleChange}
                        error={Boolean(errors.confirmPassword)}
                        helperText={errors.confirmPassword}
                    />
                    <Button type="submit" variant="contained" fullWidth sx={{ mt: 1 }}>
                        Sign In
                    </Button>
                    <Grid container justifyContent="space-between" sx={{ mt: 1 }}>
                        <Grid item>
                            <Link component={RouterLink} to="/forgot">
                                Forgot Password
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link component={RouterLink} to="/">
                                Login
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Container>
    );
};

export default Register;

