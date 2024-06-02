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
    <ul className="lg:text-2xl w-full">
      {data.map((user, id) => (
        <li key={id}>
          {user}
          <button className="ml-16"onClick={()=>{deleteUser(id)}}>
           
            <MdDelete className="h-10" size={26} ></MdDelete>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default DisplayUsers;
