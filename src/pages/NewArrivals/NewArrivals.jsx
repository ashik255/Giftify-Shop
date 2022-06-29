import React, { useEffect, useState } from "react";
import "./NewArrivals.css";
import { Container, Row } from "react-bootstrap";
import NewArrivalCard from "./NewArrivalCard";
import { Link } from "react-router-dom";

const NewArrivals = () => {
    const [newArrivalData, setNewArrivalData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/shopData")
          .then((res) => res.json())
          .then((data) => {
            setNewArrivalData(data);
            // console.log(data);
          });
      }, [newArrivalData]);

  return (
    <div className="newArrival-bg" style={{marginTop:'80px'}}>
      <h1 className="text-center py-4">New Arrivals</h1>
      <Container>
        <Row xs={1} md={2} lg={4} className="g-4">
          {
            newArrivalData.slice(0,8).map((data)=>{
                return(
                    <NewArrivalCard key={data.id} data={data}/>
                )
            })
          }
        </Row>
        <div className="d-flex justify-content-center my-5">
        <Link className='text-decoration-none newItems-link' to="/shop">View All Products</Link>
        </div>
      </Container>
      
    </div>
  );
};

export default NewArrivals;
