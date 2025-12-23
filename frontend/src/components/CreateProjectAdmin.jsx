// import React, { useState } from "react";
// import Cookies from "js-cookie"
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router";
// import AdminNavbar from "./AdminNavbar";


// function CreateProjectAdmin() {
//   const navigate = useNavigate()
//   const [formData, setFormData] = useState({
//     EventType: "Projects",
//     title: "",
//     level: "",
//     description: "",
//     stack: [],
//     githublink: "",
//     figmaLink: ""
//   });


//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleStackChange = (e) => {
//     const value = e.target.value.split(",").map((item) => item.trim());
//     setFormData({ ...formData, stack: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Submitting:", formData);
//     const url = "https://project-hackathon-7utw.onrender.com/createproject"
//     const options = {
//       method: "POST",
//         headers: { "Content-Type": "application/json",
//           "Authorization" : `Bearer ${Cookies.get("admin_token")}`
//          },
//         body: JSON.stringify(formData)
//     }
//     try {
//       const res = await fetch(url, options);
//       const data = await res.json();

//       if (!res.ok) {
//         toast.error(data.message || "Project creation failed");
//         return;
//       }

//       toast.success("Project created successfully");
//       navigate("/admin/dashboard", { replace: true });
//     } catch (error) {
//       console.error("Error:", error);
//       toast.error("Invalid Error")
//     }
//   };

//   return (
//     <div className="bg-blue-950 min-h-screen">
//       <AdminNavbar />
//       <div className="pt-20 p-10">
//         <div className="max-w-2xl bg-blue mx-auto bg-white p-8 shadow-xl rounded-xl">
//           <h2 className="text-2xl font-bold mb-6 text-gray-800">
//             Add New Project
//           </h2>

//           <form onSubmit={handleSubmit} className="space-y-5">


//           <div>
//             <label className="block text-gray-700 font-medium mb-1">
//               Event Type
//             </label>

//             <input
//               type="text"
//               name="EventType"
//               value={formData.EventType}
//               placeholder="Enter Event Type"
//               readOnly
//               onFocus={(e) => e.target.blur()}   
//               className="w-full border border-gray-300 p-3 rounded-lg bg-gray-100 cursor-not-allowed"
//               required
//             />
//           </div>



//             {/* Title */}
//             <div>
//               <label className="block text-gray-700 font-medium mb-1">
//                 Project Title
//               </label>
//               <input
//                 type="text"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleChange}
//                 placeholder="Enter project title"
//                 className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//                 required
//               />
//             </div>

//             {/* Level */}
//             <div>
//               <label className="block text-gray-700 font-medium mb-1">
//                 Level
//               </label>
//               <select
//                 name="level"
//                 value={formData.level}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//                 required
//               >
//                 <option value="">Select Level</option>
//                 <option value="Beginner">Beginner</option>
//                 <option value="Intermediate">Intermediate</option>
//                 <option value="Advanced">Advanced</option>
//               </select>
//             </div>

//             {/* Description */}
//             <div>
//               <label className="block text-gray-700 font-medium mb-1">
//                 Description
//               </label>
//               <textarea
//                 name="description"
//                 value={formData.description}
//                 onChange={handleChange}
//                 placeholder="Enter project description"
//                 className="w-full border border-gray-300 p-3 rounded-lg h-24 focus:ring-2 focus:ring-blue-500 outline-none"
//                 required
//               />
//             </div>

//             {/* Stack */}
//             <div>
//               <label className="block text-gray-700 font-medium mb-1">
//                 Tech Stack (comma separated)
//               </label>
//               <input
//                 type="text"
//                 name="stack"
//                 onChange={handleStackChange}
//                 placeholder="React, Node.js, MongoDB"
//                 className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//                 required
//               />
//             </div>

//             {/* GitHub URL */}
//             <div>
//               <label className="block text-gray-700 font-medium mb-1">
//                 GitHub Repository URL
//               </label>
//               <input
//                 type="url"
//                 name="githublink"
//                 value={formData.githublink}
//                 onChange={handleChange}
//                 placeholder="https://github.com/username/project"
//                 className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//               />
//               <p className="text-sm ml-1">for reference</p>
//             </div>

//             {/* Figma URL */}
//             <div>
//               <label className="block text-gray-700 font-medium mb-1">
//                 Figma Design URL
//               </label>
//               <input
//                 type="url"
//                 name="figmaLink"
//                 value={formData.figmaLink}
//                 onChange={handleChange}
//                 placeholder="https://www.figma.com/file/..."
//                 className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
//               />
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white p-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
//             >
//               Create Project
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CreateProjectAdmin;


import React, { useState } from "react";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import AdminNavbar from "./AdminNavbar";
import { FaArrowLeft } from "react-icons/fa";

function CreateProjectAdmin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    EventType: "Projects",
    title: "",
    level: "",
    description: "",
    stack: [],
    githublink: "",
    figmaLink: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleStackChange = (e) => {
    const value = e.target.value.split(",").map((item) => item.trim());
    setFormData({ ...formData, stack: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = "https://project-hackathon-7utw.onrender.com/createproject";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("admin_token")}`,
      },
      body: JSON.stringify(formData),
    };

    try {
      const res = await fetch(url, options);
      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Project creation failed");
        return;
      }

      toast.success("Project created successfully");
      navigate("/admin/dashboard", { replace: true });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1225] to-[#14172e]">
      <AdminNavbar />

      <div className="pt-24 px-4 pb-10 flex justify-center">
        <div className="w-full max-w-2xl bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl">

          {/* BACK BUTTON */}
          <button
            onClick={() => navigate("/admin/dashboard")}
            className="flex items-center gap-2 cursor-pointer text-gray-300 hover:text-white mb-6 transition"
          >
            <FaArrowLeft />
            Back to Dashboard
          </button>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Add New Project
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Event Type */}
            <div>
              <label className="text-sm text-gray-300">Event Type</label>
              <input
                type="text"
                name="EventType"
                value={formData.EventType}
                readOnly
                className="w-full mt-1 bg-white/10 text-gray-300 p-3 rounded-lg cursor-not-allowed"
              />
            </div>

            {/* Title */}
            <div>
              <label className="text-sm text-gray-300">Project Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter project title"
                className="w-full mt-1 bg-[#0f1225] border border-white/10 text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            {/* Level */}
            <div>
              <label className="text-sm text-gray-300">Level</label>
              <select
                name="level"
                value={formData.level}
                onChange={handleChange}
                className="w-full mt-1 bg-[#0f1225] border border-white/10 text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
                required
              >
                <option value="">Select Level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="text-sm text-gray-300">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter project description"
                className="w-full mt-1 bg-[#0f1225] border border-white/10 text-white p-3 rounded-lg h-24 outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            {/* Stack */}
            <div>
              <label className="text-sm text-gray-300">
                Tech Stack (comma separated)
              </label>
              <input
                type="text"
                onChange={handleStackChange}
                placeholder="React, Node.js, MongoDB"
                className="w-full mt-1 bg-[#0f1225] border border-white/10 text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            {/* GitHub */}
            <div>
              <label className="text-sm text-gray-300">
                GitHub Repository (optional)
              </label>
              <input
                type="url"
                name="githublink"
                value={formData.githublink}
                onChange={handleChange}
                placeholder="https://github.com/username/project"
                className="w-full mt-1 bg-[#0f1225] border border-white/10 text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Figma */}
            <div>
              <label className="text-sm text-gray-300">
                Figma Design (optional)
              </label>
              <input
                type="url"
                name="figmaLink"
                value={formData.figmaLink}
                onChange={handleChange}
                placeholder="https://figma.com/file/..."
                className="w-full mt-1 bg-[#0f1225] border border-white/10 text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full cursor-pointer mt-4 bg-gradient-to-r from-indigo-600 to-violet-600 hover:opacity-90 text-white font-semibold py-3 rounded-xl transition"
            >
              Create Project
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateProjectAdmin;
