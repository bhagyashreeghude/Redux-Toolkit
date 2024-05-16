const Navbar = () => {
  return (
    <>
      <div className="bg-gray-600 p-2 m-2">
        <h1 className="text-white text-5xl">Welcome ! to Book store</h1>

        <div className="border text-white m-4 p-2 text-3xl">
          <ul className=" grid grid-col-6 grid-flow-col gap-4">
            <li className="col-span-2">Home</li>
            <li className="col-span-2">About</li>
            <li className="col-span-2">Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
