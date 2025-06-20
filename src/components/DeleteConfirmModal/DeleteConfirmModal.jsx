import { deleteMessage } from "@/lib/action";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoIosWarning } from "react-icons/io";

export default function DeleteConfirmModal({ id, setShowConfirmation }) {
  const [loading, setLoading] = useState(false);

  const handleConfirmDelete = async (e) => {
    setLoading(true);
    e.preventDefault();

    await deleteMessage(id);

    setLoading(false);
    setShowConfirmation(false);
    toast.success(`Message Deleted successfully!`);
  };
  const handleCancelDelete = (e) => {
    e.preventDefault();
    setShowConfirmation(false);
    // console.log("cancelled");
  };
  return (
    <>
      <div className=" fixed top-0 left-0 w-full h-full  bg-black bg-opacity-70 flex justify-center items-center rounded-xl z-50">
        <div className="bg-[#1c1c1c] p-5 rounded-b-2xl w-11/12 lg:w-1/4 overflow-hidden">
          {/* <h1 className=" my-4 flex w-14 h-14 rounded-full items-center  justify-center mx-auto bg-red-50 text-red-500">
          
          <IoIosWarning size={30} />
        </h1> */}
          {!loading ? (
            <>
              <h1 className="my-4 flex w-14 h-14 rounded-full items-center justify-center mx-auto bg-red-50 text-red-500">
                <IoIosWarning size={30} />
              </h1>
              <p className="font-bold px-2 text-gray-300">
                Are you sure you want to delete this Message?
              </p>
              <div className=" mx-auto p-2 flex gap-10 mt-4 justify-center">
                <button
                  onClick={handleConfirmDelete}
                  className="mr-4 bg-red-500 text-white text-sm font-bold px-2 py-1  text-bgSoft rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:bg-red-600"
                >
                  Yes, Delete!
                </button>
                <button
                  onClick={handleCancelDelete}
                  className="text-black bg-gray-200 px-2 py-1  text-bgSoft rounded-md hover:shadow-[rgba(20,_67,_255,_0.24)_0px_3px_8px] transition-shadow duration-300"
                >
                  No, Keep it.
                </button>
              </div>
            </>
          ) : (
            <>
              {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="  w-full h-20  flex justify-center items-center"
            >
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 border-t-4 border-red-500 border-solid rounded-full animate-spin"></div>
              </div>
            </motion.div> */}
              <div
                aria-label="Deleting..."
                role="status"
                class="flex items-center space-x-2"
              >
                <svg
                  class="h-10 w-10 animate-spin stroke-red-500"
                  viewBox="0 0 256 256"
                >
                  <line
                    x1="128"
                    y1="32"
                    x2="128"
                    y2="64"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                  ></line>
                  <line
                    x1="195.9"
                    y1="60.1"
                    x2="173.3"
                    y2="82.7"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                  ></line>
                  <line
                    x1="224"
                    y1="128"
                    x2="192"
                    y2="128"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                  ></line>
                  <line
                    x1="195.9"
                    y1="195.9"
                    x2="173.3"
                    y2="173.3"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                  ></line>
                  <line
                    x1="128"
                    y1="224"
                    x2="128"
                    y2="192"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                  ></line>
                  <line
                    x1="60.1"
                    y1="195.9"
                    x2="82.7"
                    y2="173.3"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                  ></line>
                  <line
                    x1="32"
                    y1="128"
                    x2="64"
                    y2="128"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                  ></line>
                  <line
                    x1="60.1"
                    y1="60.1"
                    x2="82.7"
                    y2="82.7"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    stroke-width="24"
                  ></line>
                </svg>
                <span class=" text-red-500 flex justify-between items-center gap-3">
                  <h1 className="font-extrabold textxl text-red-500">
                    Deleting
                  </h1>
                  <div class="flex space-x-2 justify-center items-center ">
                    <div class="h-2 w-2 bg-red-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div class="h-2 w-2 bg-red-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div class="h-2 w-2 bg-red-500 rounded-full animate-bounce"></div>
                  </div>
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
