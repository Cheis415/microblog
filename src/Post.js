import React from "react";
import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap';

function Post({ title, description, id }) {
  return (<Card style={{ border: "3px solid #778E3B", borderRadius:"10px", color: "#0A5785", backgroundColor: "#FCFCFC", marginTop: "5px", marginBottom: "5px", marginLeft: "auto", marginRight: "auto" }}>
    <Card.Body>
      <Card.Title><Link style={{color:"#0A5785"}} to={`posts/${id}`}>{title}</Link></Card.Title>
      <Card.Text>
        {description}
      </Card.Text>
    </Card.Body>
  </Card>
  );
}

export default Post;
