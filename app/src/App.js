import NavBar from './components/NavBar.js'
import { Box, Button, CircularProgress, Container, createTheme, CssBaseline, TextField, ThemeProvider, Typography } from '@mui/material';
import React from 'react';
import { blue, lime } from '@mui/material/colors';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      ytLink: '',
      isLoading: false,
      isReady: false,
      response: {},
    };
  }

  searchLink( url ) {
    console.log(url);
    this.setState({isLoading: true});
  }

  appTheme = createTheme({
    palette: {
      primary: lime,
      secondary: blue
    }
  });

  loaderStyle = {
    width: '100%',
    height: '50vh',
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

              <Typography
                variant='h2'
                sx={{ textAlign: 'center', textShadow: '2px 2px #000' }}>
                Youtube Shorts video downloader
              </Typography>

              <TextField
                fullWidth
                label="Youtube Short link here"
                id="YoutubeLink"
                variant="filled"
                onChange={(e) => this.setState({ytLink: e.target.value})}
                sx={{ mt: "2em", mb: "1em" }} />

                <Button
                  fullWidth
                  onClick={() => this.searchLink(this.state.ytLink)}
                  variant="outlined"
                  size="large">
                    Buscar
                </Button>
            </Container>
          </Box>

          { this.state.isLoading &&
            <div style={this.loaderStyle}><CircularProgress /></div>
          }

        </ThemeProvider>
    );
  }
}

export default App;