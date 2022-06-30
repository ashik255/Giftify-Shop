import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid } from '@mui/material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height:700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({open, handleClose,product}) => {
    // const {name,price,img} = products;
    // console.log(product.name);
    return (
        <div>
             {/* <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{product?.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={12} md={8}>
            <img src={product?.img} alt=''></img>
            </Col>
            <Col xs={6} md={4}>
            {product?.price}
            </Col>
          </Row>
           </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal> */}
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <Grid container spacing={2}>
            
          <Grid item xs={4} md={8}>
         
          <img style={{width:'80%'}} src={product?.img} alt=''></img>
         
        </Grid>
        <Grid item xs={8} md={4}>
          
          {product?.name}
          <br></br>
          {product?.price}
         
        </Grid>
        </Grid>
          
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           
          </Typography>
        </Box>
      </Modal>
        </div>
    );
};

export default BookingModal;