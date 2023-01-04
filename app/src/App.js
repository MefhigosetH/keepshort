import NavBar from './components/NavBar.js'
import { Box, Button, CircularProgress, Container, createTheme, CssBaseline, TextField, ThemeProvider } from '@mui/material';
import React from 'react';
import { blue, lime } from '@mui/material/colors';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      ytLink: '',
      isLoading: false,
      response: {},
    };
  }

  appTheme = createTheme({
    palette: {
      primary: lime,
      secondary: blue
    }
  });

  loaderStyle = {
    width: '100%',
    height: '70vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }


  render() {

    return (
      <ThemeProvider theme={this.appTheme}>

          <CssBaseline />

          <Box sx={{ color: "#fff", background: "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(25,0,255,1) 100%)" }}>

            <NavBar />

            <Container
              fixed
              sx={{ pb:"3em" }}>

              <TextField
                fullWidth
                label="Youtube Short link here"
                id="YoutubeLink"
                variant="filled"
                onChange={(e) => this.setState({ytLink: e.target.value})}
                sx={{ mt: "2em", mb: "1em" }} />

                <Button
                  fullWidth
                  onClick={() => console.log(this.state.ytLink)}
                  variant="outlined"
                  size="large">
                    Buscar
                </Button>
            </Container>
          </Box>

          <div style={this.loaderStyle}><CircularProgress /></div>

        </ThemeProvider>
    );
  }
}

export default App;