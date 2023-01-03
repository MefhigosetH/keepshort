import NavBar from './components/NavBar.js'
import Container from '@mui/material/Container';
import { Box, Button, TextField } from '@mui/material';

function App() {
  return (
    <Box sx={{ color: "#fff", background: "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(25,0,255,1) 100%)" }}>
      <NavBar />
      <Container fixed
        sx={{ pb:"2em" }}>
        <TextField
          fullWidth
          label="Youtube Short link here"
          id="YoutubeLink"
          variant="filled"
          sx={{ mt: "2em", mb: "1em" }} />
          <Button variant="outlined" size="large">Outlined</Button>
          <Button variant="outlined" size="large">Outlined</Button>
      </Container>
    </Box>
  );
}

export default App;
