import { fakeUserData, fakeUserDataGender } from "../api/api";
import DeleteAllUser from "./DeleteAllUser";
import { useDispatch } from "react-redux";
import { addUser } from "./store/userSlice";

const UserDeatails = () => {

  const dispatch = useDispatch()

  const addNewUser = (name) => {
    console.log(name)
    dispatch(addUser(name))
  };

  const displayGeneder = (gender) => {
    console.log(gender)
    dispatch(addUser(gender))
  };

  return (
    <div className="m-2 p-2 border h-auto">
      <h2>List of Book Names</h2>
      <div></div>
      <ul>
        <input className="w-1/3  m-2 p-2" placeholder="enter book name"></input>
        <button
          className="bg-blue-600 hover:bg-blue-400 m-2 p-2 border border-black rounded-lg text-white"
          onClick={() => addNewUser(fakeUserData())}
        >
          Add new book
        </button>

        <button
          className="bg-blue-600 hover:bg-blue-400 m-2 p-2 border border-black rounded-lg text-white"
          onClick={() => displayGeneder(fakeUserDataGender())}
        >
          Gender
        </button>
        {}

        <button className="bg-red-600 hover:bg-red-400 m-2 p-2 border border-black rounded-lg text-white">
          Remove new book
        </button>
        <hr></hr>
        <DeleteAllUser />
      </ul>
    </div>
  );
};

export default UserDeatails;
