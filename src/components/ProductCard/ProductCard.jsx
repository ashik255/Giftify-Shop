import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Vanilla from '../../images/Vanilla.jpg';
import Container from '@mui/material/Container';
//import Shop from '../Shop/Shop';
import Shop  from '../../components/Shop/Shop';




// const shopdatas = [
//     {
//         "id":1,
//         "name":"Gift Box (GB 809)",
//         "price":"1,999.00৳",
//         "img":"https://upohar.xyz/wp-content/uploads/2022/02/274359611_320092723484292_361948910754683011_n-600x600.jpg.webp",
//         "categories":"gift"
//     },
//     {
//         "id":2,
//         "name":"Gift Box (GB 808",
//         "price":"3,499.00৳",
//         "img":"https://upohar.xyz/wp-content/uploads/2022/02/274485403_320086966818201_8348248923367114499_n-600x600.jpg.webp",
//         "categories":"gift"
//     },
//     {
//         "id":3,
//         "name":"Gift Box (GB-830)",
//         "price":"2,699.00৳ ",
//         "img":"https://upohar.xyz/wp-content/uploads/2022/06/286581255_135289659114294_5735359531278147069_n-600x600.jpg.webp",
//         "categories":"gift"
//     },
//     {
//         "id":4,
//         "name":"Gift Box (GB-827)",
//         "price":"1,750.00৳",
//         "img":"https://upohar.xyz/wp-content/uploads/2022/06/285635811_135264772450116_1926340316190623982_n-600x600.jpg.webp",
//         "categories":"gift"
//     },
//     {
//         "id":5,
//         "name":"Tiramisu Cake",
//         "price":"1,350.00৳",
//         "img":"https://upohar.xyz/wp-content/uploads/2022/06/tiramisu-600x600.jpg.webp",
//         "categories":"food"
//     },
//     {
//         "id":6,
//         "name":"Mocha Cake",
//         "price":"1,050.00৳",
//         "img":"https://upohar.xyz/wp-content/uploads/2022/06/mocha-cake-600x600.jpg.webp",
//         "categories":"food"
//     }
// ]

const ProductCard = () => {
    const [product, setProduct] = useState([]);

useEffect(() => {
  fetch('http://localhost:5000/shopData')
    .then(res => res.json())
    .then(data => setProduct(data));
}, []);

    return (
    <div className='border-3'>
        <Grid xs={12} sm={6} md={3} >
            
                {
                    product.map(products => <Shop products={products}>

                    </Shop> )
                }
                
            
        </Grid>
    </div>
    );
};

export default ProductCard;