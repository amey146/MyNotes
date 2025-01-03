import React from "react";

const About = () => {
  return (
    <div>
      <div className="max-w-[768px]">
        <h1>Welcome to MyNotes!</h1>
        <br />
        <br />
        <p className="text-left">
          At MyNotes, we believe that keeping track of your thoughts, ideas, and
          tasks should be easy and efficient. Our app is designed to provide a
          simple yet powerful way to organize your notes and stay productive, no
          matter where you are.
        </p>
        <br />
        <h3 className="text-left text-3xl">Key Features</h3>
        <br />
        <ul className="list-disc text-left">
          <li>
            Create, Edit, and Delete Notes: Add and manage your notes with ease.
          </li>
          <li>
            You can create new notes, edit them later, or delete them when no
            longer needed.
          </li>
          <li>
            Search Notes: Quickly find any note with our intuitive search
            functionality.
          </li>
          <li>
            Category Organization: Organize your notes into categories for easy
            access.
          </li>
          <li>
            Cross-Platform Sync: Access your notes on any device, whether you're
            on your phone, tablet, or computer.
          </li>
          <li>
            {" "}
            User-Friendly Interface: Enjoy a clean and clutter-free interface
            that makes note-taking feel effortless.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
