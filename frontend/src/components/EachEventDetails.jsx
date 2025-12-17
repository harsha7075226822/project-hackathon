import React, { useEffect, useState } from "react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTrophy,
  FaClock,
  FaArrowLeft,
  FaRegBookmark,
} from "react-icons/fa";
import { useParams, useNavigate } from "react-router";
import Cookies from "js-cookie";
import { ThreeDot } from "react-loading-indicators";
import toast from "react-hot-toast";

const EachEventDetails = () => {
  const navigate = useNavigate();
  const { eventid } = useParams();
  const jwtToken = Cookies.get("jwt_token");

  const [isSaved, setIsSaved] = useState(false);
  const [eachData, setEachData] = useState({});
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  /* ---------------- FETCH EVENT DETAILS ---------------- */
  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const url = `https://project-hackathon-7utw.onrender.com/user/allevents/${eventid}`;
        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwtToken}`,
          },
        };
        const response = await fetch(url, options);
        if (response.ok) {
          const data = await response.json();
          setEachData(data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchEventDetails();
  }, [eventid, jwtToken]);

  /* ---------------- FETCH SAVED STATUS ---------------- */
  useEffect(() => {
    let isMounted = true;

    const fetchSavedStatus = async () => {
      if (!eventid || !jwtToken) return;

      try {
        const url = `https://project-hackathon-7utw.onrender.com/user/saved/${eventid}`;
        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwtToken}`,
          },
        };
        const response = await fetch(url, options);
        if (response.ok) {
          const data = await response.json();
          if (isMounted) setIsSaved(!!data.isSaved);
        }
      } catch {
        if (isMounted) setIsSaved(false);
      }
    };

    fetchSavedStatus();
    return () => (isMounted = false);
  }, [eventid, jwtToken]);

  useEffect(() => {
    if (!eachData.StartDate) return;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const deadline = new Date(eachData.StartDate);
    deadline.setDate(deadline.getDate() - 1);
    deadline.setHours(0, 0, 0, 0);

    setIsRegistrationOpen(today < deadline);
  }, [eachData]);


  const handleApplyNow = () => {
    navigate(`/events/apply/${eventid}`, { replace: true });
  };

  const handleBackBtn = () => {
    navigate("/user/allevents", { replace: true });
  };


  const handleSaveBtn = async () => {
  if (!eventid || !jwtToken) return;

  const newSaveState = !isSaved;
  const prev = isSaved;
  setIsSaved(newSaveState);

  try {
    const response = await fetch(
      "https://project-hackathon-7utw.onrender.com/user/saved",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`,
        },
        body: JSON.stringify({ eventid, save: newSaveState }),
      }
    );

    if (!response.ok) throw new Error();

    if (newSaveState) {
      toast.success("Event Saved");
    } else {
      toast.error("Event Unsaved");
    }
  } catch {
    setIsSaved(prev);
    toast.error("Something went wrong");
  }
};


  /* ---------------- DATE HELPERS ---------------- */
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "2-digit",
    });
  };

  const DeadLineDate = (startDate) => {
    if (!startDate) return "";

    const date = new Date(startDate);
    date.setDate(date.getDate() - 1);

    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "2-digit",
    });
  };


  return (
    <div>
      {eachData.EventTitle ? (
        <div className="min-h-screen bg-gradient-to-br from-[#0f1225] to-[#14172e] text-white px-6 py-24 flex justify-center">
          <div className="w-full max-w-6xl">

            {/* HEADER */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <button
                    onClick={handleBackBtn}
                    className="p-2 rounded-full border border-white/20 hover:border-white/40 transition"
                  >
                    <FaArrowLeft />
                  </button>

                  <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm">
                    {eachData.Organizer} Event
                  </span>

                  <span className="bg-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full text-sm">
                    {eachData.EventType}
                  </span>
                </div>

                <h1
                  className="
                    text-4xl font-bold
                    bg-gradient-to-r from-indigo-400 to-violet-500
                    bg-clip-text text-transparent
                  "
                >
                  {eachData.EventTitle}
                </h1>

                <p className="text-gray-400 mt-1">
                  Organized by {eachData.OrganisationName}
                </p>
              </div>

              <button
                onClick={handleSaveBtn}
                className={`p-3 rounded-full border transition cursor-pointer
                  ${
                    isSaved
                      ? "bg-white text-black"
                      : "border-white/20 hover:border-white/40"
                  }
                `}
              >
                <FaRegBookmark size={18} />
              </button>
            </div>

            {/* CONTENT */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* LEFT */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                <Card>
                  <h2 className="text-xl font-semibold mb-4">Event Details</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <Info label="Start Date" icon={<FaCalendarAlt />}>
                      {formatDate(eachData.StartDate)}
                    </Info>
                    <Info label="End Date" icon={<FaCalendarAlt />}>
                      {formatDate(eachData.EndDate)}
                    </Info>
                    <Info label="Location" icon={<FaMapMarkerAlt />}>
                      {eachData.Venue}, {eachData.City}, {eachData.State}
                    </Info>
                    <Info label="Prize Pool" icon={<FaTrophy />}>
                      <span className="text-amber-400">
                        ₹ {eachData.PricePool}
                      </span>
                    </Info>
                  </div>
                </Card>

                <Card>
                  <h2 className="text-xl font-semibold mb-3">
                    About This Event
                  </h2>
                  <p className="text-gray-300">
                    {eachData.EventDescription}
                  </p>
                </Card>

                <Card>
                  <h2 className="text-xl font-semibold mb-3">
                    Technologies
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {eachData.SpecifiedStacks &&
                      eachData.SpecifiedStacks.split(",").map(
                        (stack, index) => (
                          <span
                            key={index}
                            className="bg-blue-600 text-white font-bold px-4 py-1 rounded-full text-sm"
                          >
                            {stack.trim()}
                          </span>
                        )
                      )}
                  </div>
                </Card>
              </div>

              {/* RIGHT */}
              <div className="flex flex-col gap-6">
                <Card>
                  <h2 className="text-xl font-semibold mb-2">
                    Registration
                  </h2>

                  <p className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                    <FaClock />
                    {isRegistrationOpen
                      ? `Deadline: ${DeadLineDate(eachData.StartDate)}`
                      : "Apply Denied"}
                  </p>


                  {isRegistrationOpen ? (
                    <button
                      onClick={handleApplyNow}
                      className="
                        w-full py-2.5 rounded-xl
                        bg-gradient-to-r from-indigo-600 to-violet-600
                        hover:opacity-90 transition cursor-pointer
                      "
                    >
                      Apply Now
                    </button>
                  ) : (
                    <button
                      disabled
                      className="w-full py-2.5 rounded-xl bg-gray-700 cursor-not-allowed"
                    >
                      Expired
                    </button>
                  )}

                </Card>

                <Card>
                  <h2 className="text-xl font-semibold mb-3">
                    Event Statistics
                  </h2>
                  <p className="text-sm text-gray-300">
                    Duration:{" "}
                    {Math.floor(
                      (new Date(eachData.EndDate) -
                        new Date(eachData.StartDate)) /
                        (1000 * 60 * 60 * 24)
                    )}{" "}
                    Days
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex min-h-screen bg-gray-950 justify-center items-center">
          <ThreeDot color="#6366f1" size="medium" />
        </div>
      )}
    </div>
  );
};

/* UI-only helpers */
const Card = ({ children }) => (
  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 shadow-xl">
    {children}
  </div>
);

const Info = ({ icon, label, children }) => (
  <div>
    <p className="flex items-center gap-2 text-gray-400">
      {icon} {label}
    </p>
    <p>{children}</p>
  </div>
);

export default EachEventDetails;
