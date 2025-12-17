import { useNavigate } from "react-router";
import { FaHome, FaRegUser, FaEye } from "react-icons/fa";

function UserNavbar() {
  const navigate = useNavigate();

  const handleRefresh = () => {
    navigate("/", { replace: true });
  };

  const handleUserAccount = () => {
    navigate("/user/account", { replace: true });
  };

  const handleProjects = () => {
    navigate("/projects", { replace: true });
  };

  const handleHome = () => {
    navigate("/user/allevents", { replace: true });
  };

  return (
    <div className="fixed top-0 z-50 w-full">
      <nav
        className="
          flex justify-between items-center
          px-10 py-5
          bg-white/5 backdrop-blur-md
          border-b border-white/10
          text-white
        "
      >
        {/* LOGO */}
        <div
          onClick={handleRefresh}
          className="
            flex items-center gap-2 cursor-pointer
            text-2xl font-bold
            bg-gradient-to-r from-indigo-400 to-violet-500
            bg-clip-text text-transparent
            hover:from-indigo-500 hover:to-violet-600
            transition-all duration-300
          "
        >
          <span className="text-3xl font-extrabold">&lt;/&gt;</span>
          HackNext
        </div>

        {/* NAV ITEMS */}
        <ul className="flex items-center gap-3">
          <NavItem label="Home" icon={<FaHome />} onClick={handleHome} />
          <NavItem label="Projects" icon={<FaEye />} onClick={handleProjects} />
          <NavItem icon={<FaRegUser />} onClick={handleUserAccount} />
        </ul>
      </nav>
    </div>
  );
}


function NavItem({ label, icon, onClick }) {
  return (
    <li
      onClick={onClick}
      className="
        flex items-center gap-2 cursor-pointer
        px-4 py-2 rounded-xl
        text-gray-300
        hover:text-white
        hover:bg-white/5
        transition-all duration-300
      "
    >
      {label && <span className="text-sm font-medium">{label}</span>}
      <span className="text-lg">{icon}</span>
    </li>
  );
}

export default UserNavbar;
