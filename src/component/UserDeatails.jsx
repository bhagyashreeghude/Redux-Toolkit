import { fakeUserData } from "../api/api";
import DeleteAllUser from "./DeleteAllUser";
import { useDispatch } from "react-redux";
import { addUser } from "./store/userSlice";
import DisplayUsers from "./DisplayUsers";

const UserDeatails = () => {
  const dispatch = useDispatch();

  const addNewUser = (name) => {
    console.log(name);
    dispatch(addUser(name));
  };

  return (
    <div className="m-2 p-2 border  ">
      <h2 className="lg:text-3xl font-bold ">List of Candidate Name</h2>

      <ul className="p-2 m-2 underline-offset-4">
        {/* <input
          className="w-1/3  m-2 p-2 border"
          placeholder="enter book name"
        ></input> */}
        <button
          className="bg-blue-600 hover:bg-blue-400 m-1 p-1 ml-0 lg:m-2 lg:p-2 border border-black rounded-lg text-white"
          onClick={() => addNewUser(fakeUserData())}
        >
          Add new candidate name
        </button>

        <DisplayUsers />

        <hr></hr>
        <br></br>
        <DeleteAllUser />
      </ul>
    </div>
  );
};

export default UserDeatails;
