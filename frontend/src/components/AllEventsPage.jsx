import React, { useEffect, useState } from "react";
import { ThreeDot } from "react-loading-indicators";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUserAlt,
  FaTrophy,
  FaExternalLinkAlt,
  FaGraduationCap,
  FaBuilding,
  FaLandmark,
} from "react-icons/fa";
import { LuClock3 } from "react-icons/lu";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";

function AllEventsPage({ searchQuery, eventType, organizer }) {
  const [TotalEvents, setTotalEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = Cookies.get("jwt_token");
  const navigate = useNavigate();

  useEffect(() => {
    const allEventsData = async () => {
      try {
        const response = await fetch(
          "https://project-hackathon-7utw.onrender.com/events/all",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setTotalEvents(data.allevents || []);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };
    allEventsData();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const monthNames = [
      "Jan","Feb","Mar","Apr","May","Jun",
      "Jul","Aug","Sep","Oct","Nov","Dec"
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  let filteredEvents = TotalEvents;

  if (searchQuery.trim() !== "") {
    filteredEvents = filteredEvents.filter((each) =>
      each.EventTitle.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  if (eventType !== "All Types" && eventType !== "") {
    filteredEvents = filteredEvents.filter((each) =>
      each.EventType.toLowerCase().includes(eventType.toLowerCase())
    );
  }

  if (organizer !== "All Organizers" && organizer !== "") {
    filteredEvents = filteredEvents.filter((each) =>
      each.Organizer.toLowerCase().includes(organizer.toLowerCase())
    );
  }

  const remainingDays = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    date.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const days = Math.floor((date - today) / (1000 * 60 * 60 * 24));
    if (days === 0) return "Today";
    if (days < 0) return "Expired";
    return `${days} Days Left`;
  };

  const handleViewDetails = (eventid) => {
    navigate(`/user/allevents/${eventid}`);
  };

  return (
    <div className="min-h-screen w-full">

      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <ThreeDot color="#6366f1" size="medium" />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 py-16">
          {filteredEvents.length === 0 ? (
            <p className="text-center text-gray-400 col-span-full">
              No events found matching your filters.
            </p>
          ) : (
            filteredEvents.map((each, _id) => (
              <div
                key={_id}
                className="rounded-2xl bg-white/5 border border-white/10 p-6 text-white
                           shadow-xl hover:shadow-indigo-900/30
                           transition-transform duration-300 hover:-translate-y-3"
              >
                {/* Organizer + Type */}
                <div className="flex items-center gap-2 mb-4">
                  {each.Organizer === "College" ? (
                    <span className="bg-emerald-500/20 text-emerald-400 text-xs px-3 py-1 rounded-full flex items-center gap-1">
                      <FaGraduationCap /> College
                    </span>
                  ) : each.Organizer === "Government" ? (
                    <span className="bg-emerald-500/20 text-emerald-400 text-xs px-3 py-1 rounded-full flex items-center gap-1">
                      <FaLandmark /> Government
                    </span>
                  ) : (
                    <span className="bg-emerald-500/20 text-emerald-400 text-xs px-3 py-1 rounded-full flex items-center gap-1">
                      <FaBuilding /> {each.Organizer}
                    </span>
                  )}

                  <span className="bg-indigo-500/20 text-indigo-400 text-xs px-3 py-1 rounded-full">
                    {each.EventType}
                  </span>
                </div>

                <h2 className="
                  text-lg font-bold mb-2
                  bg-gradient-to-r from-blue-400 to-violet-500
                  bg-clip-text text-transparent
                  hover:from-blue-500 hover:to-violet-600
                  transition
                ">
                  {each.EventTitle.toUpperCase()}
                </h2>


                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {each.EventDescription}
                </p>

                {/* Event Info */}
                <div className="space-y-2 text-gray-300 text-sm">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt />
                    {formatDate(each.StartDate)} - {formatDate(each.EndDate)}
                  </div>

                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt /> {each.City}, {each.State}
                  </div>

                  <div className="flex items-center gap-2">
                    <FaUserAlt /> {each.Venue}
                  </div>

                  <div className="flex items-center gap-2 text-amber-400">
                    <FaTrophy /> ₹ {each.PricePool} in prizes
                  </div>

                  <div className="flex items-center gap-2">
                    <FaUserAlt /> Slots: {each.Slots}
                  </div>
                </div>

                {/* Stacks */}
                <ul className="flex flex-wrap gap-2 mt-4">
                  {each.SpecifiedStacks?.split(",").map((stack, index) => (
                    <li
                      key={index}
                      className="bg-white/5 border border-white/10 text-xs px-3 py-1 rounded-full text-gray-200"
                    >
                      {stack.trim()}
                    </li>
                  ))}
                </ul>

                {/* Footer */}
                <div className="flex justify-between items-center mt-6">
                  <div className="flex items-center text-gray-400 text-sm">
                    <LuClock3 className="mr-1" />
                    {remainingDays(each.StartDate)}
                  </div>

                  <button
                    onClick={() => handleViewDetails(each._id)}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl
                               border border-white/10
                              hover:bg-gradient-to-r hover:from-blue-500 hover:to-violet-600
                               text-white text-sm transition cursor-pointer"
                  >
                    View Details <FaExternalLinkAlt size={12} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default AllEventsPage;
