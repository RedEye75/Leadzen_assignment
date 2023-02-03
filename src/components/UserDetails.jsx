import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const { name, username, address, phone, email, website } = useLoaderData();
  return (
    <div className="min-h-screen mt-20 mb-20 max-w-screen-lg bg-blue-100 p-10 rounded-md shadow-lg mx-auto ">
      <div className="grid grid-cols-5 m-3">
        <h1 data-aos="fade-down" data-aos-duration="1500" className="mt-3">
          Hello {username}
        </h1>
        <div data-aos="fade-down" data-aos-duration="1500">
          <p className="font-bold">Contact</p> <h1>{name}</h1>
        </div>
        <div data-aos="fade-down" data-aos-duration="1500">
          <p className="font-bold"> City</p> <h1>{address?.city}</h1>
        </div>
        <div data-aos="fade-down" data-aos-duration="1500">
          <p className="font-bold"> Street</p> <h1>{address?.street}</h1>
        </div>
        <Link data-aos="fade-left" data-aos-duration="1500" to={"/"}>
          <button className="bg-[#fc3c3c] w-2/3 py-3 rounded-full font-bold text-white">
            Hide details
          </button>
        </Link>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="text-start mt-20"
      >
        <h1 className="font-bold">Description</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic,
          dolorum.
        </p>
      </div>
      <div className=" mt-10 flex text-start justify-between">
        <div className="space-y-5">
          <div data-aos="fade-up" data-aos-duration="1500">
            <h1 className="font-bold">Contact person</h1>
            {name}
          </div>
          <div data-aos="fade-up" data-aos-duration="1500">
            <h1 className="font-bold">Website</h1>
            {website}
          </div>
          <div data-aos="fade-up" data-aos-duration="1500">
            <h1 className="font-bold">Email</h1>
            {email}
          </div>
          <div data-aos="fade-up" data-aos-duration="1500">
            <h1 className="font-bold">Phone</h1>
            {phone}
          </div>
        </div>
        <div className="space-y-5">
          <div data-aos="fade-up" data-aos-duration="1500">
            <h1 className="font-bold">Address</h1>
            <h1 className="mr-1 inline-grid">{address.city}</h1>
            <h1 className="mr-1 inline-grid"> {address.street}</h1>
            {address.geo.lng}
          </div>
          <div data-aos="fade-up" data-aos-duration="1500">
            <h1 className="font-bold">City</h1>
            {address.city}
          </div>
          <div data-aos="fade-up" data-aos-duration="1500">
            <h1 className="font-bold">Street</h1>
            {address.street}
          </div>
          <div data-aos="fade-up" data-aos-duration="1500">
            <h1 className="font-bold">Zipcode</h1>
            {address.zipcode}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
