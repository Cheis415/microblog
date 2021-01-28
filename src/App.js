import './App.css';
import { Container } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import NavBox from "./NavBox";
import MicroBlog from "./MicroBlog";

function App() {
  return (
    <Container style={{ margin: "10px"}} fluid className="App">
      <BrowserRouter>
        <NavBox />
        <MicroBlog />
      </ BrowserRouter>
    </ Container>
  );
}

export default App;
