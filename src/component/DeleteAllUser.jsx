import { useDispatch } from "react-redux";
import { deleteUsers } from "./store/userSlice";

const DeleteAllUser = () => {
  const dispatch = useDispatch();
  const delAllUser = () => {
    console.log("hi");
    dispatch(deleteUsers());
  };
  return (
    <div>
      <button
        className="bg-red-600 hover:bg-red-400 border-black p-2 m-2 rounded-lg"
        onClick={() => {
          delAllUser();
        }}
      >
        DeleteAllUser
      </button>
    </div>
  );
};

export default DeleteAllUser;
