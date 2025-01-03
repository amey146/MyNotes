import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewPaste = () => {
  const { id } = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.filter((p) => p._id === id)[0];

  return (
    <div>
      <div className="text-xl">Title </div>
      <div className="flex flex-row gap-7 place-content-between">
        <input
          className="p-1 rounded-xl mt-2 w-[100%] pl-4"
          type="text"
          name=""
          id=""
          placeholder="Enter Title Here"
          disabled
          value={paste.title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* <button className="p-2 rounded-xl mt-2" onClick={createPaste}>
          {pasteId ? "Update My Paste" : "Create My Paste"}
        </button> */}
      </div>

      <div className="text-xl mt-8">Description </div>
      <div>
        <textarea
          className="p-4 rounded-xl mt-4 min-w-[500px]"
          name=""
          id=""
          value={paste.content}
          disabled
          placeholder="Enter Content Here"
          rows={11}
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default ViewPaste;
