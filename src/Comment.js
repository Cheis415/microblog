
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from "react-redux";
import { removeComment } from "./actionCreators";

function Comment({ comment, index, id }) {
  const dispatch = useDispatch()

  function handleRemove() {
    dispatch(removeComment(index, id));
  }

  return (
    <div>
      <FontAwesomeIcon style={{size:"15vw",padding:"1px",cursor:"pointer",color:"#132819"}} className="right" icon={faTrashAlt} onClick={handleRemove} />
      <p style={{size:"15vw",color:"#0A5785"}}>{comment}</p>
    </div>
  )
}

export default Comment;