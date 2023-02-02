import React from "react";

const User = ({ singleUser }) => {
  console.log(singleUser);
  const { name, username, id, address } = singleUser;
  return (
    <div className="max-w-screen-xl bg-blue-100 mx-auto ">
      <div className="grid shadow-lg py-10 grid-cols-5 m-5  mx-auto">
        <h1>Hello {username}</h1>
        <div>
          <h1 className="font-bold text-xl">Contact</h1>
          <p>{name}</p>
        </div>
        <div>
          <h1 className="font-bold text-xl">City</h1>
          <h1>{address.city}</h1>
        </div>
        <div>
          <h1 className="font-bold text-xl">Street</h1>
          <h1>{address.street}</h1>
        </div>
        <button className="bg-[#fc3c3c] w-2/3 py-3 rounded-md font-bold text-black">
          View details
        </button>
      </div>
    </div>
  );
};

export default User;
