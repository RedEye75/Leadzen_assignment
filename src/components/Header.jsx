import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div>
        <header class="text-gray-600 body-font">
          <div class="container mx-auto grid grid-cols-2  p-5 max-w-screen-lg items-center">
            <a class="flex  title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <span class="ml-3  font-bold text-3xl">Leadzen.ai</span>
            </a>
            <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
              <a class="mr-5 hover:text-gray-900">Home</a>
              <a class="mr-5 hover:text-gray-900">demo</a>
            </nav>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
