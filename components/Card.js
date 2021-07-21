import React from "react";
import { FiUser } from "react-icons/fi";

const Card = () => {
  return (
    <div className="bg-white shadow-md p-6 w-full max-w-sm rounded-lg">
      <div className="flex">
        <div className="img w-12 h-12 bg-gray-400 rounded-md flex">
          <FiUser className="w-8 h-8 m-auto items-center text-gray-200" />
        </div>
        <div className="name ml-4 self-center">
          <div className="text-xl">John Doe</div>
          <div className="flex items-center text-xs">
            <div>0908 765 4321</div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex items-center text-xs">
          <div className="bg-red-300 py-0.5 px-3 mr-1 rounded-full">Client</div>
          <div className="bg-blue-300 py-0.5 px-3 mr-1 rounded-full">
            Freelance
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
