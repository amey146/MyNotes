import {
  faCopy,
  faEye,
  faPenToSquare,
  faShareNodes,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromPastes } from "../redux/pasteSlice";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  return (
    <div className="max-w-[1000px]">
      <div>
        <input
          className="p-2 pl-4 rounded-2xl min-w-[600px] my-5"
          type="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-5">
        {filteredData.length > 0 &&
          filteredData.map((paste) => {
            return (
              <div className="border rounded-xl" key={paste?._id}>
                <div className="text-3xl font-bold p-4">{paste.title}</div>
                <div className="text-gray-400 px-9 py-3">{paste.content}</div>
                <div className="mt-3 flex flex-row gap-4 place-content-evenly">
                  <button className="bg-green-600 hover:bg-green-700">
                    {" "}
                    <Link to={`/?pasteId=${paste?._id}`} className="text-white">
                      <FontAwesomeIcon icon={faPenToSquare} />
                      Edit
                    </Link>
                  </button>
                  <button className="bg-blue-600 hover:bg-blue-700">
                    <Link to={`/pastes/${paste?._id}`} className="text-white">
                      <FontAwesomeIcon icon={faEye} />
                      View
                    </Link>
                  </button>
                  <button
                    onClick={() => handleDelete(paste?._id)}
                    className="bg-red-600 hover:bg-red-700"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                    Delete
                  </button>
                  <button
                    className="bg-gray-600 hover:bg-gray-700"
                    onClick={() => {
                      navigator.clipboard.writeText(paste?.content);
                      toast.success("Copied to clipboard");
                    }}
                  >
                    <FontAwesomeIcon icon={faCopy} />
                    Copy
                  </button>
                  <button
                    className="bg-teal-600 hover:bg-teal-700"
                    onClick={() => {
                      if (navigator.share) {
                        navigator
                          .share({
                            title: paste?.title,
                            text: paste?.content,
                            url: window.location.href,
                          })
                          .then(() => toast.success("Shared successfully!"))
                          .catch((error) =>
                            toast.error("Error sharing: " + error.message)
                          );
                      } else {
                        toast.error("Sharing not supported in this browser.");
                      }
                    }}
                  >
                    <FontAwesomeIcon icon={faShareNodes} />
                    Share
                  </button>
                </div>
                <div className="text-sm text-gray-400 p-2 text-right">
                  {format(new Date(paste.createdAt), "MMMM dd, yyyy HH:mm")}
                  {/* {paste.createdAt} */}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Paste;
