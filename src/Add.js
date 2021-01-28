import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import {  useDispatch } from "react-redux";
import { addPost } from "./actionCreators";

function Add() {
  const dispatch = useDispatch();
  const history = useHistory();
  // const state = useSelector(store => store);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    body: ""
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    dispatch(addPost(formData))
    history.push("/")
  }

  return (
    <div className="form-pad">
      <h1>New post</h1>
      <Form onSubmit={handleSubmit} >
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control style={{borderRadius: "10px",border: "3px solid #778E3B"}} name="title" value={formData.title} onChange={handleChange} type="text" placeholder="enter your title" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control style={{borderRadius: "10px",border: "3px solid #778E3B"}} name="description" value={formData.description} onChange={handleChange} type="text" placeholder="enter your description" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control style={{borderRadius: "10px", border: "3px solid #778E3B"}} name="body" value={formData.body} onChange={handleChange} as="textarea" rows={3} placeholder="enter your body" />
        </Form.Group>
        <Button style={{border:"none", backgroundColor: "#FFD902"}} type="submit" >Save</Button>  <Button style={{border:"none", backgroundColor: "#FFD902"}} href="/">Cancel</Button>
      </Form>
    </div>
  )
}

export default Add;