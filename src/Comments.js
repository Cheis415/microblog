import Comment from "./Comment";
import { useParams } from "react-router-dom";

function Comments({ blog }) {
  const { id } = useParams();

  return (
    <div>
      {blog.comments.map((comment, i) => <div key={comment.id}> <Comment comment={comment} index={i} id={id} /></div>)}
    </div>
  )
}

export default Comments;