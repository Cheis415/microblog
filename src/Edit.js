import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editPost } from "./actionCreators";

function Edit() {
  console.log("hello")
  let {id} = useParams();
  let dispatch = useDispatch();

  let blogs = useSelector(state => state)
  let blog = blogs[id]

  const [formData, setFormData] = useState({
    title: blog.title,
    description: blog.description,
    body: blog.body
  });

  const history = useHistory();

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    dispatch(editPost(formData, id))
    history.push("/")
  }

  function handleCancel(evt) {
    history.push("/")
;  }

  return (
    <div className="form-pad">
      <h1>Edit post</h1>
      <Form onSubmit={handleSubmit} >
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control style={{borderRadius: "5px", border: "3px solid #778E3B"}} name="title" value={formData.title} onChange={handleChange} type="text" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control style={{borderRadius: "5px",border: "3px solid #778E3B"}} name="description" value={formData.description} onChange={handleChange} type="text" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control style={{borderRadius: "5px",border: "3px solid #778E3B"}} name="body" value={formData.body} onChange={handleChange} as="textarea" rows={3} />
        </Form.Group>
        <Button style={{ border:"none",color: "#778E3B",  backgroundColor: "#FFD902"}} type="submit" >Save</Button>  <Button style={{ border:"none",color: "#778E3B",  backgroundColor: "#FFD902"}} onClick={handleCancel}>Cancel</Button>
      </Form>
    </div>
  )
}

export default Edit;