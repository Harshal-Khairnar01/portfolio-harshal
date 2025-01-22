import DeleteItem from "@/app/components/DeleteItem/DeleteItem";
import { getContactDetails } from "@/lib/data";
import React from "react";

export default async function page() {
  const queries = await getContactDetails();
  return (
    <div className=" bg-bg-main  w-full ">
      <table className=" w-11/12 bg-white table-auto mt-40 mx-auto">
        <thead className=" bg-[#252525] text-gray-200">
          <tr>
            <th className="w-1/5 py-3 px-4 uppercase font-semibold text-sm">
              Name
            </th>
            <th className="w-1/5 py-3 px-4 uppercase font-semibold text-sm">
              Email
            </th>

            <th className="w-3/5 py-3 px-4 uppercase font-semibold text-sm">
              Message or Query
            </th>
            <th className=" "></th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {queries.map((item, index) => (
            <tr key={item._id} className="bg-gray-100 border-b border-gray-200">
              <td className="py-3 px-4 text-center">{item.name}</td>
              <td className="py-3 px-4 text-center">{item.email}</td>

              <td className="py-3 px-4">
                <div className="max-h-20 overflow-y-auto">{item.message}</div>
              </td>
              <td className="py-3 px-4 text-center">
                {" "}
                <DeleteItem id={item._id} />{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
