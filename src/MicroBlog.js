import { Redirect, Route, Switch } from "react-router-dom";
import Add from "./Add";
import Home from "./Home";
import PostDetails from "./PostDetails";
import Edit from "./Edit"
import { useSelector } from "react-redux";
import './App.css';

function MicroBlog() {
  const blogs = useSelector(state => state)

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/add">
        <Add />
      </Route>
      <Route exact path="/posts/:id">
        <PostDetails />
      </Route>
      <Route exact path="/edit/:id">
        <Edit blogs={blogs} />
      </Route>
      <Redirect to="/" />
    </Switch>)
}

export default MicroBlog;