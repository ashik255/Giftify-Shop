import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";

const HandPicked = ({ feature, onsale, bestsell }) => {
  const [key, setKey] = useState("featured");
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    console.log(feature?.slice(0, 3));
    if (key === "featured") setNewData(feature?.slice(0, 3));
    else if (key === "onSell") setNewData(feature?.slice(3, 6));
    else if (key === "bestSeller") setNewData(feature?.slice(6, 9));
  }, [key, feature]);

  return (
    <div className="" style={{ marginTop: "100px" }}>
      <h1 className="text-center mb-5">Handpicked for You</h1>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 d-flex justify-content-center"
      >
        {tabs.map((tabData, idx) => {
          return (
            <Tab eventKey={tabData.Key} title={tabData.title} key={idx}>
              <Row>
                {newData?.map((data, idx) => {
                  return (
                    <Col xs={1} md={2} lg={4} key={idx}>
                      <Card>
                        <Card.Img  style={{minHeight:'420px'}} variant="top" src={data?.img} />
                        <Card.Body className="text-center">
                          <Card.Title>{data?.name}</Card.Title>
                          <p>{data?.price}</p>
                          <hr />
                            <h6>Brand</h6>
                            <h6>
                              Upohar signatures
                            </h6>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </Tab>
          );
        })}
      </Tabs>
    </div>
  );
};

const tabs = [
  {
    title: "FEATURED",
    Key: "featured",
  },
  {
    title: "ON SELL",
    Key: "onSell",
  },
  {
    title: "BEST SELLER",
    Key: "bestSeller",
  },
];

export default HandPicked;
