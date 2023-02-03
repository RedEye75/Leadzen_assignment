import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const { name, username, address, phone, email, website } = useLoaderData();
  return (
    <div className="h-screen max-w-screen-lg bg-blue-100 p-10 rounded-md shadow-lg mx-auto ">
      <div className="grid grid-cols-5 m-3">
        <h1 className="mt-3">Hello {username}</h1>
        <div>
          <p className="font-bold">Contact</p> <h1>{name}</h1>
        </div>
        <div>
          <p className="font-bold"> City</p> <h1>{address?.city}</h1>
        </div>
        <div>
          <p className="font-bold"> Street</p> <h1>{address?.street}</h1>
        </div>
        <Link to={"/"}>
          <button className="bg-[#fc3c3c] w-2/3 py-3 rounded-full font-bold text-white">
            Hide details
          </button>
        </Link>
      </div>
      <div className="text-start mt-20">
        <h1 className="font-bold">Description</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic,
          dolorum.
        </p>
      </div>
      <div className=" mt-10 flex text-start justify-between">
        <div className="space-y-5">
          <div>
            <h1 className="font-bold">Contact person</h1>
            {name}
          </div>
          <div>
            <h1 className="font-bold">Website</h1>
            {website}
          </div>
          <div>
            <h1 className="font-bold">Email</h1>
            {email}
          </div>
          <div>
            <h1 className="font-bold">Phone</h1>
            {phone}
          </div>
        </div>
        <div className="space-y-5">
          <div>
            <h1 className="font-bold">Address</h1>
            <h1 className="mr-1 inline-grid">{address.city}</h1>
            <h1 className="mr-1 inline-grid"> {address.street}</h1>
            {address.geo.lng}
          </div>
          <div>
            <h1 className="font-bold">City</h1>
            {address.city}
          </div>
          <div>
            <h1 className="font-bold">Street</h1>
            {address.street}
          </div>
          <div>
            <h1 className="font-bold">Zipcode</h1>
            {address.zipcode}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
