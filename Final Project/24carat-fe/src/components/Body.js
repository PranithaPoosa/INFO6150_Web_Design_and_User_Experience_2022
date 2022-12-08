import { initial } from "lodash";
import React, { Component } from "react";
import "../App.css";
import { Card, Row, Grid, Col, Button } from "react-bootstrap";
import CountDownTimer from "./CountDownTimer";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import StarRating from "./StarRating";

function Body() {
  var dateVariable = new Date();
  var currentHour = dateVariable.getHours();
  var currenttMinute = dateVariable.getMinutes();
  var currentSeconds = dateVariable.getSeconds();

  var Saving = Math.floor(Math.random() * (50 - 10) + 10);

  var arr = ["https://www.shift4shop.com/2015/images/sell-online/digital-downloads/jewelrytop.jpg",
             "https://www.bulgari.com/dw/image/v2/BCSG_PRD/on/demandware.static/-/Library-Sites-bulgariSharedLibrary/default/dwb12f9819/hj/the-magnificent-creations/wg30/266531-655X800.jpg?sw=655",
             "https://cdn.shopify.com/s/files/1/0009/8746/3737/products/necklace-cornflowerblue_800x.jpg?v=1624457683",
             "https://i.pinimg.com/736x/a0/44/70/a044704e0de00b5a89e50181ab513c0b.jpg",
             "https://bridalshower101.com/wp-content/uploads/2021/06/london-blue-topaz-engagement-rings.jpg",
             "https://cdn.shopify.com/s/files/1/2201/2975/products/IMG_6629_700x.jpg?v=1595310017"]
  const hoursMinSecs = {
    hours: 23 - currentHour,
    minutes: 59 - currenttMinute,
    seconds: 59 - currentSeconds,
  };

  return (
    <div>
      <h4>Bonus Deals of the day</h4>
      <Row xs={4} md={3} className="g-4">
        {Array.from({ length: 6 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img
                variant="top"
                src= {arr[idx]}
                style={{ maxHeight: "400px", width: "auto" }}
                alt="Product image"
              />
              <Card.Body>
                <Card.Title>Product {idx}</Card.Title>
                <Card.Text>
                  Information about the product <br />
                  Price: $ {Math.floor(
                    Math.random() * (999 - 100) + 100
                  )}.00 <br />
                  Saving: ${Math.floor(Math.random() * (50 - 10) + 10)}
                  <br />
                  Rating
                  <StarRating />
                  <br />
                  <AccessTimeIcon style={{ fontSize: 15 }} />
                  Deal ends in <CountDownTimer hoursMinSecs={hoursMinSecs} style={{color:'black'}}/>
                </Card.Text>
                <Button variant="primary bg-secondary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <br/>
      <br/>
    </div>
  );
}

export default Body;
