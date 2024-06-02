import { useDispatch } from "react-redux";
import { deleteUser } from "./store/userSlice";

const DeleteAllUser = () => {
  const dispatch = useDispatch()
  const popAllUser =()=>{
    dispatch(deleteUser)
  }
  return (
    <div>
      <button className="bg-red-600 hover:bg-red-400 border-black p-2 m-2 rounded-lg" onClick={()=>{popAllUser()}}>DeleteAllUser</button>
    </div>
  );
};

export default DeleteAllUser;
