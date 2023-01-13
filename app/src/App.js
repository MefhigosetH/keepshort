import { Box, Button, CircularProgress, Container, createTheme, CssBaseline, Paper, TextField, ThemeProvider, Typography } from '@mui/material';
import React from 'react';
import { blue, lime } from '@mui/material/colors';

import NavBar from './components/NavBar.js'
import VideoCard from './components/ytCard'


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

  async searchLink( linkUrl ) {
    this.setState({isReady: false, isLoading: true});

    let regex = /https:\/\/(?:www.)*youtu(?:be.com|.be)\/(?:shorts\/|watch\?v=)?([\w\d-]+)/;
    let matches = linkUrl.match( regex );

    if( matches != null && matches.length === 2 ){

      var vid = matches[1];

      var API_URL = '/api';

      if( process.env.NODE_ENV === 'development' ){
        API_URL = "http://localhost:8888/.netlify/functions";
      }

      try {
        const response = await fetch( API_URL + "/dl?url=" + vid );
        var jsonData = await response.json();
      } catch(e) {
        console.log( e );
      }

      this.setState({isLoading: false, isReady: true, response: jsonData});
    } else {
      this.setState({isReady: false, isLoading: false});
    }
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

          { this.state.isReady &&
            <VideoCard data={this.state.response} />
          }

          <Paper
            elevation={3}
            sx={{ width: '100%', position: 'fixed', bottom: 0 }}>

            <Typography
              variant='p'
              sx={{ textAlign: 'center', display: 'block', color: "#fff", background: "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(25,0,255,1) 100%)", py: "1em" }}>
                Desarrollado con &#129293; por Victor Villarreal
            </Typography>
          </Paper>

        </ThemeProvider>
    );
  }
}

export default App;
