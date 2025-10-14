import React, { useState } from "react";
import { FiSearch, FiFilter } from "react-icons/fi";
import AllEventsPage from "./AllEventsPage";

function InputElement() {
  const [searchQuery, setSearchQuery] = useState("");
  const [eventType, setEventType] = useState("All Types");
  const [stack,setStack] = useState("All Stacks")
  const [organizer, setOrganizer] = useState("All Organizers");

  const eventTypes = ["All Types", "Hackathon", "Workshop", "Tech Event", "Competition"];
  const organizers = ["All Organizers", "College", "Government", "TechCompany"];
  const stacks = ["All Stacks", "AIML", "Node", "React", "MongoDB", "Figma", "Canva", "Adobe XD"]

  return (
    <div className=" bg-[#0b0b0c] text-white px-10 py-25">
      {/* Header */}
      <div className="flex flex-col gap-2 mb-6">
        <h1 className="text-4xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            Explore
          </span>{" "}
          Events
        </h1>
        <p className="text-gray-400 text-sm">
          Discover hackathons, workshops, and tech events happening in India
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 mb-8">
        {/* Search Bar */}
        <div className="flex items-center bg-[#141416] rounded-lg px-3 py-2 w-full md:w-[500px] border border-gray-800">
          <FiSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search events, tags, or descriptions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent outline-none text-sm w-full placeholder-gray-500"
          />
        </div>

        {/* Event Type Dropdown */}
        <div className="relative">
          <select
            value={stack}
            onChange={(e) => setStack(e.target.value)}
            className="bg-[#141416] text-gray-300 px-4 py-2 rounded-lg border border-gray-800 text-sm focus:outline-none cursor-pointer"
          >
            {stacks.map((type, idx) => (
              <option key={idx} value={type}>
                {type}
              </option> 
            ))}
          </select>
        </div>

        <div className="relative">
          <select
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            className="bg-[#141416] text-gray-300 px-4 py-2 rounded-lg border border-gray-800 text-sm focus:outline-none cursor-pointer"
          >
            {eventTypes.map((type, idx) => (
              <option key={idx} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Organizer Dropdown */}
        <div className="relative">
          <select
            value={organizer}
            onChange={(e) => setOrganizer(e.target.value)}
            className="bg-[#141416] text-gray-300 px-4 py-2 rounded-lg border border-gray-800 text-sm focus:outline-none cursor-pointer"
          >
            {organizers.map((org, idx) => (
              <option key={idx} value={org}>
                {org}
              </option>
            ))}
          </select>
        </div>
        <AllEventsPage searchQuery={searchQuery} eventType={eventType} organizer={organizer} stack={stack} />
      </div>
    </div>
  );
}

export default InputElement;
