import { MdChevronRight, MdDeleteForever, MdModeEdit } from "react-icons/md";

const TimelineItem = ({ handleDelete, children }) => {
  return (
    <div className="flex items-center mb-4">
      <div className="border-2 -ml-3 text-sm rounded-full border-red-500 p-0.5 bg-white">
        <MdChevronRight />
      </div>
      <div className="p-4 bg-gray-50 border-2 border-blue-800 ml-4 rounded-lg w-full shadow-lg">
        <div>{children}</div>
        <div className="grid justify-items-end">
          <div className="grid grid-cols-2 w-max gap-4 pt-4 text-xl">
            <button className="text-red-500" onClick={handleDelete}>
              <MdDeleteForever />
            </button>
            <button className="text-green-700">
              <MdModeEdit />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const TimelineWrapper = ({ children }) => {
  return <div className="mx-4 pt-8 border-l-2 border-blue-300">{children}</div>;
};

export { TimelineItem, TimelineWrapper };
