// import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";

const ProfileDetails = () => {
  return (
    <div>
      <div className="profile-header flex items-center rounded-full bg-doodle-1 bg-cover bg-center bg-gray-200 shadow-lg">
        <div className="w-24 h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 border-2 border-gray-500 rounded-full flex items-center justify-center p-1 mr-4">
          <div className="w-full h-full bg-gray-600 rounded-full overflow-hidden">
            <img
              src="https://res.cloudinary.com/dpkreativ/image/upload/v1616357794/IMG_-oi62yk_wtfop2.jpg"
              alt="profile image"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div>
          <h1 className="font-bold text-2xl md:text-4xl text-gray-800">
            Divine
          </h1>
          <p>Antetokounmpo</p>
        </div>
      </div>
      <section className="mt-8">
        <h2 className="font-bold text-xl md:text-2xl">Basic Information</h2>
        <div className="mt-2 md:mt-4 grid md:grid-cols-2 gap-2">
          <div className="phone-number flex items-center">
            <MdPhone />
            <div className="mx-2 text-lg">09021824073</div>
            <button className="bg-green-700 text-white rounded-full py-1 px-4 text-xs ml-2">
              call
            </button>
          </div>
          <div className="email flex items-center">
            <MdEmail />
            <div className="mx-2 text-lg">dpkreativ@gmail.com</div>
            <button className="bg-blue-700 text-white rounded-full py-1 px-4 text-xs ml-2">
              send mail
            </button>
          </div>
        </div>
        <h3 className="font-bold text-lg mt-2 md:mt-4">Bio</h3>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          expedita et necessitatibus, ipsam omnis consequatur cumque maxime,
          illo in ea dolore soluta dignissimos suscipit, labore voluptatibus
          recusandae. Magnam, quibusdam voluptas!
        </div>
      </section>
      <section className="mt-8">
        <h2 className="font-bold text-xl md:text-2xl">Timeline</h2>
        <div>
          <button className="bg-purple-700 text-white rounded-full py-1 px-4 text-sm mt-2 md:mt-4">
            Add new entry
          </button>
        </div>
        <div className="entries"></div>
      </section>
    </div>
  );
};

export default ProfileDetails;
