import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './App.css';

function NavBox() {

  return (
    <Card style={{
      display: "flex",
      marginTop: "10px",
      color: "#132819",
      backgroundColor: "#FCFCFC",
      marginLeft: "auto", 
      marginRight: "auto",
      width: '100%',
      borderRadius: "15px",
      border: "3px solid #778E3B"
    }}>
      <Card.Img style={{width: "100%", height:"auto",borderTopRightRadius: "15px", borderTopLeftRadius: "15px"}} variant="top" src="https://static.hwpi.harvard.edu/files/styles/os_files_xxlarge/public/digital-millennium-copyright-act/files/hero-3.jpg?m=1589487823&itok=y6icL4sM" />
      <Card.Body style={{display: "flex", flexDirection: "column", marginTop: "5px", marginBottom: "5px", marginLeft: "auto", marginRight: "auto" }} >
        <Card.Title className="left" ><h1 style={{fontSize:"4rem", color: "#132819"}}>Micro Blog</h1></Card.Title>
        <Card.Text style={{ color:"#132819",display: "flex", marginLeft: "auto", marginRight: "auto" }} className="left"><b> This is the place where you can pour your micro thoughts onto the screen. </b></Card.Text>
        <Link style={{color:"#0A5785", }} className="pad left" to="/blog">Home</Link>
        <Link style={{color:"#0A5785", }} className="pad left" to="/add">Add a new tiny blog!</Link>
      </Card.Body>
    </Card>
  )
}

export default NavBox;

