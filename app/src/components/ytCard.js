import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

export default class ytCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const data = this.props.data || false;

        console.log( data );

        return (
            <Container sx={{mt: '2em'}}>
            <Card>
      <CardMedia
        sx={{ height: 480 }}
        image={data.responseData.thumbnail}
        title={data.responseData.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {data.responseData.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {data.responseData.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" color='secondary'>MP4@360p</Button>
      </CardActions>
    </Card>
    </Container>
        );
    }
}