"use client"
import React, { useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import DeleteConfirmModal from "../DeleteConfirmModal/DeleteConfirmModal";


export default function DeleteItem({ id,item }) {
    const [showConfirmation, setShowConfirmation] = useState(false);
  const handleDelete = () => {
    setShowConfirmation(true);
  };
  return (
    <div>
      <button className="text-gray-800" onClick={handleDelete}>
        <FaDeleteLeft className="hover:text-gray-900 duration-700" size={35} />
      </button>
      {/* </form> */}
      {showConfirmation && (
        <DeleteConfirmModal
          id={id}
          item={item}
          setShowConfirmation={setShowConfirmation}
        />
      )}
    </div>
  );
}
