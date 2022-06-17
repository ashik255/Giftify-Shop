import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import './shop.css'

const Shop = (props) => {
    const {name,price,img} =props.products;
    console.log(props.products);
    return (
      
        <Grid item xs={12} sm={6} md={3}>
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="250"
        image={img}
      />
      <CardContent>
        <Typography gutterBottom style={{fontWeight:'bold'}} variant="subtitle2" component="h6">
          {name}
        </Typography>
        <Typography gutterBottom variant="body2" style={{fontWeight:'bold'}} color="">
          {price}
        </Typography>
        <Typography gutterBottom variant="subtitle1" color="text.secondary" component="div">
          Brand
        </Typography>
        <Typography gutterBottom variant="subtitle2" color="text.secondary" component="div">
          Puro
        </Typography>
      </CardContent>
      <CardActions>
       
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </Grid>
    );
};

export default Shop;