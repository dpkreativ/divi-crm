import Link from "next/link";
import { MdEmail, MdPhone, MdWork } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const ProfileDetails = ({ contact }) => {
  const { firstname, lastname, phone, mail, bio, entries } = contact.data;
  // const { entry } = entries;
  return (
    <div>
      <div className="profile-header flex items-center rounded-full bg-doodle-1 bg-cover bg-center bg-gray-200 shadow-lg">
        <div className="w-24 h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 border-2 border-gray-500 rounded-full flex items-center justify-center p-1 mr-4">
          <div className="w-full h-full bg-gray-600 rounded-full overflow-hidden">
            <img
              src="https://res.cloudinary.com/dpkreativ/image/upload/o_20/v1627300464/divi-crm/Profile_avatar_placeholder_large_rbnj5w.png"
              alt="profile image"
              className="object-cover w-full h-full"
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
      <section className="mt-8">
        <h2 className="font-bold text-xl md:text-2xl">Basic Information</h2>
        <div className="mt-2 md:mt-4 grid md:grid-cols-2 gap-2">
          <div className="phone-number flex items-center">
            <MdPhone />
            <div className="mx-2 text-lg">{phone}</div>
            <Link href={`tel:${phone}`}>
              <button className="bg-green-700 text-white rounded-full py-1 px-4 text-xs ml-2">
                call
              </button>
            </Link>
          </div>
          <div className="email flex items-center">
            <MdEmail />
            <div className="mx-2 text-lg">{mail}</div>
            <Link href={`mailto:${mail}`}>
              <button className="bg-blue-700 text-white rounded-full py-1 px-4 text-xs ml-2">
                send mail
              </button>
            </Link>
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
          <VerticalTimeline>
            {entries &&
              entries.map((entry) => (
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "rgb(33, 150, 243)",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(33, 150, 243)",
                  }}
                  iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                  icon={<MdWork />}
                  key={entry._id}
                >
                  {entry.entry}
                </VerticalTimelineElement>
              ))}
          </VerticalTimeline>
        </div>
      </section>
    </div>
  );
};

export default ProfileDetails;
