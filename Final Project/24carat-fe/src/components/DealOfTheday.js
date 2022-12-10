import React, { Component } from "react";
import CountDownTimer from "./CountDownTimer";
import { Badge } from "react-bootstrap";
// import Banner from "./Banner";
import "../App.css";
import Body from "./Body";
import Form from "./form";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
// import DescInAccordion from "./DescInAccordion";
import Footer from "./Footer";
import { JustifyRight } from "react-bootstrap-icons";

function DealOfTheday() {
  var dateVariable = new Date();
  var currentHour = dateVariable.getHours();
  var currenttMinute = dateVariable.getMinutes();
  var currentSeconds = dateVariable.getSeconds();

  const hoursMinSecs = {
    hours: 23 - currentHour,
    minutes: 59 - currenttMinute,
    seconds: 59 - currentSeconds,
  };
  var dayOfWeek = new Date().toLocaleDateString("en-us", { weekday: "long" });

  return (
    <div style={{backgroundColor:'#023047'}}>
      <div className="container" style={{backgroundColor:'#023047'}}>
      <div>
        <p></p>
      </div>

      <div className="widthSetting" >
        <p style={{textAlign:'end', color: "white"}}  >
          <AccessTimeIcon style={{ fontSize: 20, color: "white" }} />
          &nbsp;
        Time left</p>
        <div style = {{display: 'flex', justifyContent:'space-between'}}>
          <div className="widthLeft">
            {" "}
            <h2 style={{  color: "white" }}>Hurry! It is {dayOfWeek}'s</h2>
            <h3 style={{  color: "white" }}><b>DEAL OF THE DAY</b></h3>
            <h6 style={{  color: "white" }}>
              <p>Terms and conditions apply*</p>
            </h6>
          </div>
          <div className="widthRightt">
            <Badge className="timerBadge" bg="secondary">
              <p></p>
              
              <CountDownTimer hoursMinSecs={hoursMinSecs} />
            
            </Badge>
          </div>
        </div>
      </div>
      <div className="Items">
        <Body />
      </div>

      <Form />
      {/* <DescInAccordion /> */}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default DealOfTheday;
