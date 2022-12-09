import React, {Component} from "react";
import axios from "axios";
import {Form, Button } from "react-bootstrap";

function Adminpage(){
    const onSubmit = (e) => {
        e.preventDefault();
        var review = {}
        review['numberOfReviews'] = 0
        review['overallRating'] = 0.0
        var obj = {};
        obj['name'] = e.target[0].value
        obj['pricing'] = e.target[1].value
        obj['images'] = e.target[2].value.split(",")
        obj['reviews'] = review
        obj['description'] = e.target[3].value
        obj['brand'] = e.target[4].value
        obj['category'] = e.target[5].value
        obj['dealOfTheDay'] = false
    axios
      .post("http://localhost:3001/items/save", obj)
    };
//form for admin to access

    return(
        <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name of the Product</Form.Label>
                <Form.Control type='text'
                name='from_name'
                placeholder='Your Name'
                 />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Price</Form.Label>
                <Form.Control type='text'
                name='reply_to'
                placeholder='Your Email'/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Images</Form.Label>
                <Form.Control as='textarea' rows={3}
                name='message'
                placeholder='Your message' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control type='text'
                name='message'
                placeholder='Your message' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Brand</Form.Label>
                <Form.Control type='text'
                name='message'
                placeholder='Your message' />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Category</Form.Label>
                <Form.Control type='text'
                name='message'
                placeholder='Your message' />
            </Form.Group>
            <Button className="bg-secondary" as="input" type="submit" value="Submit" />{' '}
        </Form>
    );
    

}

export default Adminpage;