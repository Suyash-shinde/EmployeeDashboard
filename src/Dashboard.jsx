import {
    Avatar, Box, Container, Grid, Paper, Typography, Divider
} from "@mui/material";
import info from "./utilities/info.json";
import NavBar from "./utilities/NavBar";

const Dashboard = () => {
    const credentials = sessionStorage.getItem("credentials");
    const user = JSON.parse(credentials);

    return (
        <Container maxWidth={false} disableGutters>
            <NavBar />
            <Container maxWidth="lg">
                <Grid container spacing={4} sx={{
                    mt: { xs: 4, md: 8 },
                    px: { xs: 2, sm: 4 },
                }}>
                    <Grid item xs={12} md={4} sx={{ maxWidth: { xs: "100%", md: "20%" } }} >
                        <Paper
                            elevation={10}
                            sx={{
                                p: 4,
                                borderRadius: "16px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                heigth: { xs: "fit", md: "100%" }
                            }}
                        >
                            <Avatar
                                sx={{ bgcolor: "primary.main", height: 156, width: 156, mb: 2 }}
                            >
                                {user.username[0].toUpperCase()}
                            </Avatar>
                            <Typography variant="h6">{user.username}</Typography>
                            <Typography variant="body1" color="text.secondary">
                                {user.email}
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ mt: 4, textWrap: "wrap", textAlign: "justify" }}>
                                {info.address}
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={8} sx={{ maxWidth: { md: "75%", xs: "100%" } }}>
                        <Paper elevation={4} sx={{ height: "90%", p: 4, borderRadius: "16px" }}>
                            <Typography variant="h5" gutterBottom>
                                Employee Details
                            </Typography>
                            <Divider sx={{ mb: 2 }} />
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="subtitle1" color="text.secondary">
                                    Employee ID
                                </Typography>
                                <Typography variant="body1">{info.empID}</Typography>
                            </Box>
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="subtitle1" color="text.secondary">
                                    Name
                                </Typography>
                                <Typography variant="body1">{info.name}</Typography>
                            </Box>
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="subtitle1" color="text.secondary">
                                    Department
                                </Typography>
                                <Typography variant="body1">{info.empDepartment}</Typography>
                            </Box>
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="subtitle1" color="text.secondary">
                                    Salary
                                </Typography>
                                <Typography variant="body1">₹ {info.salary}</Typography>
                            </Box>
                            <Box>
                                <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 1 }}>
                                    Tech Stack
                                </Typography>
                                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                                    {info.techStack.map((tech, index) => (
                                        <Box
                                            key={index}
                                            sx={{
                                                px: 2,
                                                py: 0.5,
                                                bgcolor: "primary.light",
                                                color: "primary.contrastText",
                                                borderRadius: "12px",
                                                fontSize: 14,
                                            }}
                                        >
                                            {tech}
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

        </Container>
    );
};

export default Dashboard;

