import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { removeUser } from "./store/userSlice";

const DisplayUsers = () => {
  const dispatch = useDispatch()

  const data = useSelector((state) => {
    return state.users;
  });
  console.log(data);

  const deleteUser =(id)=>{
    dispatch(removeUser(id))
  }

  return (
    <ul>
      {data.map((user, id) => (
        <li key={id}>
          {user}
          <button className="pl-10 "onClick={()=>{deleteUser(id)}}>
           
            <MdDelete className="h-8" size={20} ></MdDelete>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default DisplayUsers;
