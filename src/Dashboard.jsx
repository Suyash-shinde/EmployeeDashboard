import { PhotoFilterRounded, PhotoRounded } from "@mui/icons-material"
import { Avatar, Box, Container, Grid, Paper, Typography } from "@mui/material"

const Dashboard = () => {
    const credentials = sessionStorage.getItem("credentials");
    const user = JSON.parse(credentials);
  return (
    <Container>
            <Grid container spacing={4}>
                <Grid size={4} item>
                   <Paper elevation={10} sx={{mt:2, p:2, borderRadius:"10px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                        <Avatar sx={{ bgcolor: "red", height:156, width:156 }}>S</Avatar>
                        <Typography >{user.username}</Typography> 
                        <Typography> {user.email}</Typography>

                   </Paper>
                </Grid>
                <Grid size={4} item>
                    <Paper elevation={2}>
                        Hell0o
                    </Paper>
                </Grid>
            </Grid>
    </Container>
  )
}

export default Dashboard
