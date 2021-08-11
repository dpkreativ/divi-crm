import Link from "next/link";
import Image from "next/image";

const Card = ({ contact }) => {
  const { firstname, lastname, phone } = contact.data;
  const lastnameFirstLetter = lastname.split("")[0];
  return (
    <div className="bg-purple-100 w-36 rounded-xl m-6 flex flex-col pb-4 justify-between items-center px-2">
      <div className="w-20 h-20 border-2 border-red-400 rounded-full -mt-10 mx-auto flex items-center justify-center p-1">
        <div className="w-full h-full bg-gray-600 rounded-full overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dpkreativ/image/upload/o_20/v1627300464/divi-crm/Profile_avatar_placeholder_large_rbnj5w.png"
            alt="profile image"
            className="object-cover w-full h-full"
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="font-bold text-lg mt-2">
          {firstname} <span>{lastnameFirstLetter}.</span>
        </div>
        <div className="text-sm">{phone}</div>
      </div>

      <Link href={`/profile/${contact.id}`} passHref>
        <button className="bg-gray-900 text-white px-4 py-1 cursor-pointer text-xs w-max rounded-lg mt-4">
          View Contact
        </button>
      </Link>
    </div>
  );
};

export default Card;
