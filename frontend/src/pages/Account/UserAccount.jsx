// import React, { useEffect, useState } from "react";
// import Cookies from "js-cookie";
// // import { FaAngleLeft } from "react-icons/fa";
// import { FaSignInAlt } from 'react-icons/fa';
// import SavedEvents from "../../components/SavedEvents";
// import { useNavigate } from "react-router";

// function UserAccount() {
//   const navigate = useNavigate()
//   const [userData, setUserData] = useState(null);
//   const [activeSection, setActiveSection] = useState("user");

//   useEffect(() => {
//     const fetchAccount = async () => {
//       const response = await fetch("http://localhost:5678/user/account", {
//         headers: {
//           Authorization: `Bearer ${Cookies.get("jwt_token")}`,
//         },
//       });

//       const data = await response.json();
//       setUserData(data.userDetails);
//     };

//     fetchAccount();
//   }, []);

//   if (!userData) {
//     return <div className="text-white">Loading...</div>;
//   }

//   const handleLogout = () => {
//       Cookies.remove("jwt_token")
//       navigate("/signin",{replace:true})
//   }

//   return (
//     <div className="flex min-h-screen bg-black">
      
//       {/* SIDEBAR */}
//       <div className="bg-white pt-20 min-h-screen w-[300px] flex flex-col justify-between">
//         <div>
//           <h1
//             onClick={() => setActiveSection("user")}
//             className={`cursor-pointer p-4 ${
//               activeSection === "user" && "bg-black text-white"
//             }`}
//           >
//             User
//           </h1>
//           <h1
//             onClick={() => setActiveSection("saved")}
//             className={`cursor-pointer p-4 ${
//               activeSection === "saved" && "bg-black text-white"
//             }`}
//           >
//             Saved Events
//           </h1>
//         </div>  
//         <li onClick={handleLogout} className="flex items-center gap-1 text-white bg-black cursor-pointer">
//             <FaSignInAlt /> Logout
//         </li>
//       </div>

//       {/* CONTENT */}
//       <div className="bg-black pt-20 w-full min-h-screen px-6 flex justify-center items-center">
//         {activeSection === "user" && (
//           <div className="animate-slideUp">
//             <h1 className="text-2xl text-white font-bold mb-4">User Details</h1>
//             <p className="text-white">Name: {userData.username}</p>
//             <p className="text-white">Email: {userData.email}</p>
//           </div>
//         )}

//         {activeSection === "saved" && <SavedEvents />}
//       </div>
//     </div>
    

//   );
// }


// export default UserAccount;



import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { FaSignInAlt } from "react-icons/fa";
import SavedEvents from "../../components/SavedEvents";
import { useNavigate } from "react-router";

function UserAccount() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [activeSection, setActiveSection] = useState("user");

  useEffect(() => {
    const fetchAccount = async () => {
      const response = await fetch("http://localhost:5678/user/account", {
        headers: {
          Authorization: `Bearer ${Cookies.get("jwt_token")}`,
        },
      });

      const data = await response.json();
      setUserData(data.userDetails);
    };

    fetchAccount();
  }, []);

  if (!userData) {
    return <div className="text-white">Loading...</div>;
  }

  const handleLogout = () => {
    Cookies.remove("jwt_token");
    navigate("/signin", { replace: true });
  };

  return (
    <div className="flex bg-black h-screen overflow-hidden">

      {/* SIDEBAR */}
      <aside className="w-[300px] bg-white flex flex-col justify-between fixed left-0 top-0 h-screen">
        <div className="pt-20">
          <h1
            onClick={() => setActiveSection("user")}
            className={`cursor-pointer p-4 ${
              activeSection === "user" && "bg-black text-white"
            }`}
          >
            User
          </h1>

          <h1
            onClick={() => setActiveSection("saved")}
            className={`cursor-pointer p-4 ${
              activeSection === "saved" && "bg-black text-white"
            }`}
          >
            Saved Events
          </h1>
        </div>

        <div
          onClick={handleLogout}
          className="flex items-center gap-2 p-4 bg-gray-400 text-black cursor-pointer"
        >
          <FaSignInAlt /> Logout
        </div>
      </aside>

      {/* CONTENT AREA */}
      <main className="ml-[300px] w-full bg-black overflow-y-auto">
        <div className="pt-20 px-6">

          {activeSection === "user" && (
            <div className="animate-slideUp">
              <h1 className="text-2xl text-white font-bold mb-4">
                User Details
              </h1>
              <p className="text-white">Name: {userData.username}</p>
              <p className="text-white">Email: {userData.email}</p>
            </div>
          )}

          {activeSection === "saved" && <SavedEvents />}

        </div>
      </main>

    </div>
  );
}

export default UserAccount;
