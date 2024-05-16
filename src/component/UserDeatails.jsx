import DeleteAllUser from "./DeleteAllUser"

const UserDeatails = () => {
  return (
    <div className="m-2 p-2 border h-auto">
        <h2>List of Book Names</h2>
        <div>
            
            
        </div>
        <ul>
            <input className="w-1/3  m-2 p-2" placeholder="enter book name"></input>
            <button className="bg-blue-600 hover:bg-blue-400 m-2 p-2 border border-black rounded-lg text-white" >Add new book</button>
        



        
            <button className="bg-red-600 hover:bg-red-400 m-2 p-2 border border-black rounded-lg text-white" >Remove new book</button>
            <hr>
            </hr>
            <DeleteAllUser/>
        </ul>

    </div>
  )
}

export default UserDeatails