// import { useNavigate } from "react-router";
// import { FaBars, FaTimes, FaClipboardList, FaUser, FaSignInAlt } from "react-icons/fa";
// import { useState } from "react";
// import Cookies from "js-cookie";

// function AdminNavbar() {
//   const navigate = useNavigate();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleHome = () => {
//     navigate("/", { replace: true });
//   };

//   const handleUserAppliedEvents = () => {
//     navigate("/userappliedevents", { replace: true });
//   };

//   const handleProfile = () => {
//     navigate("/adminaccount", { replace: true });
//   };

//   const handleLogout = () => {
//     Cookies.remove("admin_token");
//     navigate("/admin/login", { replace: true });
//   };

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   return (
//     <div className="fixed top-0 z-50 w-full">
//       <nav
//         className="
//           flex justify-between items-center
//           px-10 py-5
//           bg-black border-b border-gray-700
//           text-white
//         "
//       >
//         {/* LOGO */}
//         <div
//           onClick={handleHome}
//           className="
//             flex items-center gap-2 cursor-pointer
//             text-2xl font-bold
//             bg-gradient-to-r from-blue-400 to-purple-500
//             bg-clip-text text-transparent
//             hover:from-blue-500 hover:to-purple-600
//             transition-all duration-300
//           "
//         >
//           <span className="text-3xl font-extrabold">&lt;/&gt;</span>
//           Admin Dashboard
//         </div>

//         {/* DESKTOP NAV ITEMS */}
//         <div className="hidden md:flex items-center gap-3">
//           <button
//             onClick={handleUserAppliedEvents}
//             className="text-white hover:text-gray-300 transition"
//           >
//             User Applied Events
//           </button>
//           <button
//             onClick={handleProfile}
//             className="text-white hover:text-gray-300 transition"
//           >
//             Profile
//           </button>
//           <button
//             onClick={handleLogout}
//             className="bg-rose-500/60 hover:bg-rose-500 px-4 py-2 rounded transition"
//           >
//             Logout
//           </button>
//         </div>

//         {/* MOBILE HAMBURGER */}
//         <button
//           onClick={toggleMenu}
//           className="md:hidden text-white text-2xl"
//         >
//           {isMenuOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </nav>

//       {/* MOBILE MENU */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-gray-800 border-b border-gray-700">
//           <div className="flex flex-col p-4 space-y-2">
//             <button
//               onClick={() => { handleUserAppliedEvents(); setIsMenuOpen(false); }}
//               className="flex items-center gap-2 text-white hover:bg-gray-700 p-2 rounded"
//             >
//               <FaClipboardList />
//               User Applied Events
//             </button>
//             <button
//               onClick={() => { handleProfile(); setIsMenuOpen(false); }}
//               className="flex items-center gap-2 text-white hover:bg-gray-700 p-2 rounded"
//             >
//               <FaUser />
//               Profile
//             </button>
//             <button
//               onClick={() => { handleLogout(); setIsMenuOpen(false); }}
//               className="flex items-center gap-2 text-white hover:bg-gray-700 p-2 rounded"
//             >
//               <FaSignInAlt />
//               Logout
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AdminNavbar;.

import { useNavigate } from "react-router";
import { FaBars, FaTimes, FaClipboardList, FaUser, FaSignInAlt } from "react-icons/fa";
import { useState } from "react";
import Cookies from "js-cookie";

function AdminNavbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHome = () => {
    navigate("/", { replace: true });
  };

  const handleUserAppliedEvents = () => {
    navigate("/userappliedevents", { replace: true });
  };

  const handleProfile = () => {
    navigate("/adminaccount", { replace: true });
  };

  const handleLogout = () => {
    Cookies.remove("admin_token");
    navigate("/admin/login", { replace: true });
  };

  const handleAdminDash = () => {
    navigate("/admin/dashboard",{replace:true})
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="fixed top-0 z-50 left-3 w-full">
      <nav className="flex justify-between items-center px-8 py-4 bg-black/95 backdrop-blur border-b border-gray-700 text-white">
        
        {/* LOGO */}
        <div    
          onClick={handleHome}
          className="
            flex items-center gap-2 cursor-pointer
            text-xl font-semibold tracking-wide
            bg-gradient-to-r from-blue-400 to-purple-500
            bg-clip-text text-transparent
            hover:from-blue-500 hover:to-purple-600
            transition-all duration-300
          "
        >
          <span className="text-2xl font-extrabold">&lt;/&gt;</span>
          Admin Dashboard
        </div>

        {/* DESKTOP NAV ITEMS */}
        <div className="hidden md:flex items-center gap-5 text-sm">

          <button
          onClick={handleAdminDash}
              className="flex items-center gap-3 cursor-pointer px-3 py-2 rounded-md hover:bg-gray-800 transition"
            >
              Home
            </button>


          <button
            onClick={handleUserAppliedEvents}
            className="px-3 py-2 rounded-md cursor-pointer hover:bg-white/5 hover:text-gray-200 transition"
          >
            User Applied Events
          </button>

          <button
            onClick={handleProfile}
            className="px-3 py-2 rounded-md cursor-pointer hover:bg-white/5 hover:text-gray-200 transition"
          >
            Profile
          </button>

          <button
            onClick={handleLogout}
            className="
              px-4 py-2 rounded-md  cursor-pointer
              bg-rose-500/80 hover:bg-rose-500
              shadow-sm hover:shadow-md
              transition-all
            "
          >
            Logout
          </button>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-xl p-2 rounded-md hover:bg-white/10 transition"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur border-b border-gray-700">
          <div className="flex flex-col p-4 space-y-2 text-sm">

            <button
              onClick={() => { handleUserAppliedEvents(); setIsMenuOpen(false); }}
              className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 transition"
            >
              <FaClipboardList />
              User Applied Events
            </button>

            <button
              onClick={() => { handleProfile(); setIsMenuOpen(false); }}
              className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 transition"
            >
              <FaUser />
              Profile
            </button>

            <button
              onClick={() => { handleLogout(); setIsMenuOpen(false); }}
              className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-rose-500/20 text-rose-400 transition"
            >
              <FaSignInAlt />
              Logout
            </button>

          </div>
        </div>
      )}
    </div>
  );
}

export default AdminNavbar;
