import { useParams, useHistory } from "react-router-dom";
import { useState } from "react";
import { Card, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import Comments from "./Comments";
import { useDispatch, useSelector } from "react-redux";
import { removePost, addComment } from "./actionCreators";

function PostDetails() {
  const [formData, setFormData] = useState({
    comment: "",
  });

  const history = useHistory();
  let { id } = useParams();
  let blogs = useSelector(state => state)
  let blog = blogs[id]
  let dispatch = useDispatch();

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  }

  function handleRemove() {
    dispatch(removePost(id));
    history.push('/')
  }

  function handleEdit() {
    history.push(`/edit/${id}`)
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    dispatch(addComment(formData.comment, id))
  }

  return (
    <div>
      <Card style={{border: "3px solid #778E3B", borderRadius:"10px",color: "#132819", backgroundColor: "#FCFCFC", marginTop: "5px", marginBottom: "5px", marginLeft: "auto", marginRight: "auto" }}>
        <Card.Body>
          <FontAwesomeIcon style={{padding:"1.5px",cursor:"pointer",color:"#132819"}} className="right" icon={faTrashAlt} onClick={handleRemove} />
          <FontAwesomeIcon style={{padding:"1.5px",cursor:"pointer",color:"#132819"}} className="right" icon={faEdit} onClick={handleEdit} />
          <Card.Title><h2 style={{color: "#132819"}}>{blog.title}</h2></Card.Title>
          <Card.Title><b style={{color: "#0A5785"}}>{blog.description}</b></Card.Title>
          <Card.Text style={{color:"#0A5785"}}>{blog.body}</Card.Text>
        </Card.Body>
      </Card>
      <Comments blog={blog} />
      <Form onSubmit={handleSubmit} >
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control
            style={{
              color:"#0A5785",  
              borderRadius: "10px",
              border: "3px solid #778E3B",
              marginTop: "5px",
              marginBottom: "5px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            name="comment" value={formData.comment} onChange={handleChange} type="text" placeholder="Add a comment" />
        </Form.Group>
        <Button style={{ border:"none", color:"#0A5785",  backgroundColor: "#FFD902"}} onClick={handleSubmit}>Submit</Button>
      </Form>
    </div >
  );
}

export default PostDetails;