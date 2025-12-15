// import React, { useState } from "react";
// import { FiSearch } from "react-icons/fi";
// import AllEventsPage from "./AllEventsPage";
// import { useNavigate } from "react-router";
// import { FaLaptopCode, FaLightbulb, FaProjectDiagram } from "react-icons/fa";

// function InputElement() {
//   const navigate = useNavigate()
//   const [searchQuery, setSearchQuery] = useState("");
//   const [eventType, setEventType] = useState("All Types");
//   const [organizer, setOrganizer] = useState("All Organizers");

//   const eventTypes = ["All Types", "Hackathon", "Workshop", "Tech Event", "Competition"];
//   const organizers = ["All Organizers", "College", "Government", "TechCompany"];

//   const scrollToEvents = () => {
//     const section = document.getElementById("events-section");
//     if (section) section.scrollIntoView({ behavior: "smooth" });
//   };


//   const handleProjects = () => {
//     navigate("/projects",{replace:true})
//   }

//   return (
//     <div className="bg-[#0b0b0c] text-white px-10 pt-24">
//       {/* --------------------- HERO SECTION --------------------- */}
//       <div className="flex flex-col justify-center items-center md:px-16 text-center text-white animate-fadeIn min-h-[80vh]">

//         <h1 className="text-4xl font-bold mb-4 animate-slideUp">
//           Welcome to <span className="text-blue-400">HackNext</span>
//         </h1>

//         <p className="text-gray-300 text-lg max-w-3xl animate-slideUp">
//           HackNext helps students discover  
//           <span className="font-semibold text-blue-300"> Hackathons, Workshops, and Tech Events</span>{" "}
//           organized by  
//           <span className="text-green-300 font-semibold"> Colleges, Universities, Government Departments</span>{" "}
//           and  
//           <span className="text-yellow-300 font-semibold"> Tech Companies</span>.
//         </p>

//         <p className="text-gray-400 mt-3 max-w-2xl animate-slideUp">
//           Explore events, learn new skills, collaborate with peers, and apply directly from this platform 
//           with verified details — dates, venues, prize pools, skills required, and more.
//         </p>

//         <div className="flex flex-col animate-slideUp mt-4">
//            <p className="text-gray-300 flex gap-2">
//             <FaLaptopCode className="text-blue-400" size={20} />
//               HackNext also provides beginner-friendly 
//               <span className="text-purple-300 font-semibold"> Web Projects</span> 
//               to help students build practical development experience.
//             </p>
//         </div>
       


//         <div className="flex gap-4 mt-6 animate-slideUp">

//           <button
//             onClick={scrollToEvents}
//             className="px-6 py-3 cursor-pointer bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition flex items-center gap-2"
//           >
//             <FaLightbulb size={18} />
//             Explore Events
//           </button>

//           <button
//             className="px-6 py-3 bg-gray-800 cursor-pointer hover:bg-gray-700 rounded-lg font-semibold transition flex items-center gap-2"
//             onClick={handleProjects}
//           >
//             <FaProjectDiagram size={18} />
//             Browse Projects
//           </button>

//         </div>

//       </div>

//       {/* --------------------- EXPLORE EVENTS HEADER --------------------- */}
//       <div className="flex flex-col gap-2 mb-6 pt-20" id="events-section">
//         <h1 className="text-4xl font-bold">
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
//             Explore
//           </span>{" "}
//           Events
//         </h1>
//         <p className="text-gray-400 text-sm">
//           Discover hackathons, workshops, and tech events happening in India
//         </p>
//       </div>

//       {/* --------------------- FILTER SECTION --------------------- */}
//       <div className="flex flex-wrap items-center gap-4 mb-8">

//         <div className="flex items-center bg-[#141416] rounded-lg px-3 py-2 w-full md:w-[500px] border border-gray-800">
//           <FiSearch className="text-gray-400 mr-2" />
//           <input
//             type="text"
//             placeholder="Search events, tags, or descriptions..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="bg-transparent outline-none text-sm w-full placeholder-gray-500"
//           />
//         </div>

//         <div className="relative">
//           <select
//             value={eventType}
//             onChange={(e) => setEventType(e.target.value)}
//             className="bg-[#141416] text-gray-300 px-4 py-2 rounded-lg border border-gray-800 text-sm cursor-pointer"
//           >
//             {eventTypes.map((type, idx) => (
//               <option key={idx} value={type}>
//                 {type}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="relative">
//           <select
//             value={organizer}
//             onChange={(e) => setOrganizer(e.target.value)}
//             className="bg-[#141416] text-gray-300 px-4 py-2 rounded-lg border border-gray-800 text-sm cursor-pointer"
//           >
//             {organizers.map((org, idx) => (
//               <option key={idx} value={org}>
//                 {org}
//               </option>
//             ))}
//           </select>
//         </div>

//       </div>

//       {/* --------------------- EVENTS LIST --------------------- */}
//       <AllEventsPage 
//         searchQuery={searchQuery} 
//         eventType={eventType} 
//         organizer={organizer} 
//       />

//     </div>
//   );
// }

// export default InputElement;


import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import AllEventsPage from "./AllEventsPage";
import { useNavigate } from "react-router";
import { FaLaptopCode, FaLightbulb, FaProjectDiagram } from "react-icons/fa";

function InputElement() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [eventType, setEventType] = useState("All Types");
  const [organizer, setOrganizer] = useState("All Organizers");

  const eventTypes = ["All Types", "Hackathon", "Workshop", "Tech Event", "Competition"];
  const organizers = ["All Organizers", "College", "Government", "TechCompany"];

  const scrollToEvents = () => {
    const section = document.getElementById("events-section");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const handleProjects = () => {
    navigate("/projects", { replace: true });
  };

  return (
    <div className="bg-gradient-to-b from-black via-[#0b0b0c] to-black text-white">

      <section className="min-h-[90vh] flex items-center justify-center px-6 pt-20">
        <div className="max-w-5xl text-center space-y-6">

          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Discover & Build with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              HackNext
            </span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            A unified platform to explore{" "}
            <span className="text-blue-400 font-semibold">Hackathons</span>,{" "}
            <span className="text-green-400 font-semibold">Workshops</span> and{" "}
            <span className="text-yellow-400 font-semibold">Tech Events</span>{" "}
            hosted by colleges, universities, government bodies and tech companies.
          </p>

          <p className="text-gray-400 max-w-3xl mx-auto">
            Learn new skills, collaborate with peers, compete, win prizes and
            gain real-world exposure — all from one trusted platform.
          </p>

          <div className="flex justify-center gap-4 pt-6">
            <button
              onClick={scrollToEvents}
              className="flex items-center gap-2 px-8 py-3 rounded-xl font-semibold
                         bg-green-600 hover:bg-green-700 transition shadow-lg"
            >
              <FaLightbulb />
              Explore Events
            </button>

            <button
              onClick={handleProjects}
              className="flex items-center gap-2 px-8 py-3 rounded-xl font-semibold
                         bg-gray-800 hover:bg-gray-700 transition border border-gray-700"
            >
              <FaProjectDiagram />
              Browse Projects
            </button>
          </div>
        </div>
      </section>

      <section id="events-section" className="px-8 pt-24 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-2">
          Explore{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            Events
          </span>
        </h2>
        <p className="text-gray-400">
          Filter and discover upcoming tech opportunities across India
        </p>

        <div className="mt-8 flex flex-wrap gap-4 items-center bg-[#0f0f11]
                        border border-gray-800 rounded-2xl p-4">

          <div className="flex items-center flex-1 min-w-[250px] bg-[#141416]
                          px-4 py-3 rounded-xl border border-gray-700">
            <FiSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search events, titles or keywords"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent outline-none w-full text-sm placeholder-gray-500"
            />
          </div>

          <select
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            className="bg-[#141416] border border-gray-700 rounded-xl px-4 py-3 text-sm text-gray-300"
          >
            {eventTypes.map((type, idx) => (
              <option key={idx}>{type}</option>
            ))}
          </select>

          <select
            value={organizer}
            onChange={(e) => setOrganizer(e.target.value)}
            className="bg-[#141416] border border-gray-700 rounded-xl px-4 py-3 text-sm text-gray-300"
          >
            {organizers.map((org, idx) => (
              <option key={idx}>{org}</option>
            ))}
          </select>
        </div>
      </section>

      <section className="px-6 pt-10 max-w-7xl mx-auto">
        <AllEventsPage
          searchQuery={searchQuery}
          eventType={eventType}
          organizer={organizer}
        />
      </section>

    </div>
  );
}

export default InputElement;
