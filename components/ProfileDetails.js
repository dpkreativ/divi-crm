import Link from "next/link";
import { MdEmail, MdPhone, MdWork } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const ProfileDetails = ({ contact }) => {
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
            {contact.data.firstname}
          </h1>
          <p>{contact.data.lastname}</p>
        </div>
      </div>
      <section className="mt-8">
        <h2 className="font-bold text-xl md:text-2xl">Basic Information</h2>
        <div className="mt-2 md:mt-4 grid md:grid-cols-2 gap-2">
          <div className="phone-number flex items-center">
            <MdPhone />
            <div className="mx-2 text-lg">{contact.data.phone}</div>
            <Link href={`tel:${contact.data.phone}`}>
              <button className="bg-green-700 text-white rounded-full py-1 px-4 text-xs ml-2">
                call
              </button>
            </Link>
          </div>
          <div className="email flex items-center">
            <MdEmail />
            <div className="mx-2 text-lg">{contact.data.mail}</div>
            <button className="bg-blue-700 text-white rounded-full py-1 px-4 text-xs ml-2">
              send mail
            </button>
          </div>
        </div>
        <h3 className="font-bold text-lg mt-2 md:mt-4">Bio</h3>
        <div>{contact.data.bio}</div>
      </section>
      <section className="mt-8">
        <h2 className="font-bold text-xl md:text-2xl">Timeline</h2>
        <div>
          <button className="bg-purple-700 text-white rounded-full py-1 px-4 text-sm mt-2 md:mt-4">
            Add new entry
          </button>
        </div>
        <div className="entries">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<MdWork />}
            >
              <h3 className="vertical-timeline-element-title">
                Creative Director
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<MdWork />}
            >
              <h3 className="vertical-timeline-element-title">
                Creative Director
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </section>
    </div>
  );
};

export default ProfileDetails;
