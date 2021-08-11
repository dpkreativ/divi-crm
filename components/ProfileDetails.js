import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {
  MdDeleteForever,
  MdEmail,
  MdArrowBack,
  MdModeEdit,
  MdPhone,
} from "react-icons/md";
import { TimelineItem, TimelineWrapper } from "./Timeline";

const ProfileDetails = ({ contact }) => {
  const { firstname, lastname, phone, mail, bio, entries } = contact.data;

  const router = useRouter();

  const deleteContact = async () => {
    try {
      await fetch("/api/deleteContact", {
        method: "DELETE",
        body: JSON.stringify({ id: contact.id }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  const editContact = async () => {
    try {
      await router.push(`/profile/edit/${contact.id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Head>
        <title>{firstname}&apos;s profile</title>
      </Head>
      <main>
        <Link href="/" className="cursor-pointer" passHref>
          <button className="mt-4 mb-8 flex items-center">
            <MdArrowBack /> <div className="mx-2">Go to Home</div>
          </button>
        </Link>
        <div className="profile-header flex items-center justify-between rounded-full bg-doodle-1 bg-cover bg-center bg-gray-200 shadow-lg">
          <div className="flex items-center">
            <div className="w-24 h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 border-2 border-gray-500 rounded-full flex items-center justify-center p-1 mr-4">
              <div className="w-full h-full bg-gray-600 rounded-full overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dpkreativ/image/upload/o_20/v1627300464/divi-crm/Profile_avatar_placeholder_large_rbnj5w.png"
                  alt="profile image"
                  className="object-cover"
                  width="150%"
                  height="150%"
                />
              </div>
            </div>
            <div>
              <h1 className="font-bold text-2xl md:text-4xl text-gray-800">
                {firstname}
              </h1>
              <p>{lastname}</p>
            </div>
          </div>
          <div className=" grid md:grid-cols-2 px-8 text-xl">
            <button
              className="m-1.5 md:mx-4 text-green-700"
              onClick={editContact}
            >
              <MdModeEdit />
            </button>
            <button
              className="m-1.5 md:mx-4 text-red-500"
              onClick={deleteContact}
            >
              <MdDeleteForever />
            </button>
          </div>
        </div>
        <section className="mt-8">
          <h2 className="font-bold text-xl md:text-2xl">Basic Information</h2>
          <div className="mt-2 md:mt-4 grid md:grid-cols-2 gap-2">
            <div className="phone-number flex items-center">
              <MdPhone />
              <div className="mx-2 text-lg">{phone}</div>
              <Link href={`tel:${phone}`} passHref>
                <button className="bg-green-700 text-white rounded-full py-1 px-4 text-xs ml-2">
                  call
                </button>
              </Link>
            </div>
            <div className="email grid items-center md:flex">
              <div className="grid grid-cols-auto-2 items-center">
                <MdEmail />
                <div className="mx-2 text-lg">{mail}</div>
              </div>
              <div className="">
                <Link href={`mailto:${mail}`} passHref>
                  <button className="bg-blue-700 text-white rounded-full py-1 px-4 text-xs md:ml-2">
                    send mail
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <h3 className="font-bold text-lg mt-2 md:mt-4">Bio</h3>
          <div>{bio}</div>
        </section>
        <section className="mt-8">
          <h2 className="font-bold text-xl md:text-2xl">Timeline</h2>
          <div>
            <button className="bg-purple-700 text-white rounded-full py-1 px-4 text-sm mt-2 md:mt-4">
              Add new entry
            </button>
          </div>
          <div className="entries">
            {/* TODO: use the time of editing or creating the entry as its ID, then sort the entry based on the ids and display by the most recent */}
            <TimelineWrapper>
              {entries &&
                entries
                  .sort((a, b) => b._id - a._id)
                  .map((entry) => (
                    <TimelineItem key={entry._id}>{entry.entry}</TimelineItem>
                  ))}
            </TimelineWrapper>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProfileDetails;
