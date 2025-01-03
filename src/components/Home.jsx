import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [search, setSearch] = useSearchParams();
  const pasteId = search.get("pasteId");
  const allPastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();

  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p._id === pasteId);
      setTitle(paste.title);
      setValue(paste.content);
    }
  }, [pasteId]);

  function createPaste() {
    // make a paste object
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      //update
      dispatch(updateToPastes(paste));
    } else {
      //create
      dispatch(addToPastes(paste));
    }

    //after that clear title nd content
    setTitle("");
    setValue("");
    setSearch({});
  }

  return (
    <div className="border border-slate-400 p-4 rounded-xl">
      <div className="flex flex-row gap-7 place-content-between ">
        <input
          className="p-1 rounded-xl mt-2 w-[66%] pl-4"
          type="text"
          name=""
          id=""
          placeholder="Enter Title Here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          className="p-2 rounded-xl mt-2 bg-blue-700"
          onClick={createPaste}
        >
          {pasteId ? "Update My Paste" : "Create My Paste"}
        </button>
      </div>
      <div className="mt-3">
        <textarea
          className="p-4 rounded-xl mt-4 min-w-[500px]"
          name=""
          id=""
          value={value}
          placeholder="Enter Content Here"
          rows={11}
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default Home;
