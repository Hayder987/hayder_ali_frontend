import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { format, compareAsc } from "date-fns";

const DisplayMessage = () => {
  const { data: allMessage = [], refetch } = useQuery({
    queryKey: ["message"],
    queryFn: async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_Server_URL}/message`
      );
      return response.data;
    },
  });

  console.log(allMessage);
  return (
    <div className="py-14">
      <div className=" p-4 bg-slate-200 rounded-lg">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-black">
                <th>#</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Subject</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {allMessage.map((item, idx) => (
                <tr key={item._id} className="text-black">
                  <th>{idx + 1}</th>
                  <td>{item?.name}</td>
                  <td>{item?.phone}</td>
                  <td>{item?.email}</td>
                  <td>{item?.subject}</td>
                  <td>{format(item?.date, "P")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DisplayMessage;
