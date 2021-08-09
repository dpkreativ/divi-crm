import { MdDeleteForever, MdModeEdit } from "react-icons/md";

const TimelineItem = ({ children, key }) => {
  return (
    <div key={key}>
      <div>{children}</div>
      <div className="grid justify-items-end">
        <div className="grid grid-cols-2 w-max gap-4 pt-4 text-xl">
          <button>
            <MdDeleteForever />
          </button>
          <button>
            <MdModeEdit />
          </button>
        </div>
      </div>
    </div>
  );
};

const TimelineWrapper = ({ children }) => {
  return <div>{children}</div>;
};

export { TimelineItem, TimelineWrapper };
