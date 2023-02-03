import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Typical from "react-typical";
import User from "./User";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="">
      <section class="bg-gray-50">
        <div class="mx-auto max-w-screen-2xl px-4 py-32 lg:flex  lg:items-center">
          <div class="mx-auto max-w-2xl text-center">
            <h1 class="text-3xl  font-extrabold sm:text-5xl">
              Find your next
              <Typical
                className="text-[#fbc32b] inline ml-3"
                steps={[
                  "Customer.",
                  1500,
                  "Recruit.",
                  1500,
                  "Prospect.",
                  1500,
                  "Recruit.",
                  1500,
                  "Contact.",
                  1500,
                ]}
                loop={Infinity}
                wrapper="p"
              ></Typical>
            </h1>

            <p class="mt-4 sm:text-xl sm:leading-relaxed">
              The Most Intelligent AI Powered Real-Time Lead Generation Engine
            </p>
          </div>
        </div>
      </section>

      {users.map((singleUser) => (
        <User singleUser={singleUser} />
      ))}
    </div>
  );
};

export default Home;
