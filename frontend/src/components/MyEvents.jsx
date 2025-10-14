import React, { useEffect, useState, useContext } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaTrophy } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import CounterContext from "../contextApi/TotalCountsContext";
import Cookies from "js-cookie"



function MyEvents({ setForm, dropValue }) {
  const [MyEventsdata, setMyEventsdata] = useState([]);
  const { setCount } = useContext(CounterContext);
  const token = Cookies.get("admin_token")
  // console.log(token)

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch("http://localhost:5678/events/my",{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}` 
      }});
      console.log(response)
      const data = await response.json();
      setMyEventsdata(data.events);
      console.log(data)
    };
    fetchEvents();
  }, []);
  console.log(MyEventsdata)

  useEffect(() => {
    setCount(MyEventsdata.length);
  }, [MyEventsdata]);

  const handleDeleteEachItem = async (id) => {
    setMyEventsdata((prev) => prev.filter((item) => item._id !== id));
    await fetch(`http://localhost:5678/events/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}` 
      }
    });
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  };

  return (
    <div>
      {dropValue!=="All Events"?
      <ul className="flex flex-col items-start">
        {MyEventsdata.map((each, id) => (
          String(dropValue) === String(each.EventType) && (
            <li key={id} className="m-2 w-full">
              <div className="bg-gray-900 text-white p-6 rounded-xl shadow-md w-full max-w-xl mx-auto">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-semibold">{each.EventTitle}</h2>
                    <span className="bg-green-600 text-white text-xs px-2 py-0.5 rounded-full">
                      {each.Organizer}
                    </span>
                    <span className="bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full">
                      {each.EventType}
                    </span>
                    <span className="bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full">
                      Verified
                    </span>
                  </div>
                  <div className="flex gap-2 text-gray-400">
                    <button
                      className="hover:text-white"
                      onClick={() => setForm({ open: true, event: each, id: each._id })}
                    >
                      <FiEdit size={18} />
                    </button>
                    <button
                      onClick={() => handleDeleteEachItem(each._id)}
                      className="hover:text-white cursor-pointer"
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </div>
                </div>

                <div className="flex">
                  <span className="m-1"><FcAbout /></span>
                  <p className="text-gray-400 text-sm mb-4">{each.EventDescription}</p>
                </div>

                <div className="flex items-center gap-3 text-gray-400 text-sm mb-4">
                  <FaCalendarAlt />
                  <div className="flex flex-col w-[190px]">
                    <span>{formatDate(each.StartDate)} - {formatDate(each.EndDate)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaMapMarkerAlt />{" "}
                    <span>{each.Venue}, {each.City}, {each.State}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaTrophy /> <span>{each.PricePool}</span>
                  </div>
                </div>

                <ul className="flex gap-2 flex-wrap">
                  {each.SpecifiedStacks?.split(",").map((stack, index) => (
                    <li
                      key={index}
                      className="bg-blue-600 px-3 py-1 rounded-full text-xs"
                    >
                      {stack.trim()}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          )
          ))}
      </ul>
      :
        <ul className="flex flex-col items-start">
          {MyEventsdata.map((each, id) => (
              <li key={id} className="m-2 w-full">
                <div className="bg-gray-900 text-white p-6 rounded-xl shadow-md w-full max-w-xl mx-auto">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <h2 className="text-xl font-semibold">{each.EventTitle}</h2>
                      <span className="bg-green-600 text-white text-xs px-2 py-0.5 rounded-full">
                        {each.Organizer}
                      </span>
                      <span className="bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full">
                        {each.EventType}
                      </span>
                      <span className="bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full">
                        Verified
                      </span>
                    </div>
                    <div className="flex gap-2 text-gray-400">
                      <button
                        className="hover:text-white"
                        onClick={() => setForm({ open: true, event: each, id: each._id })}
                      >
                        <FiEdit size={18} />
                      </button>
                      <button
                        onClick={() => handleDeleteEachItem(each._id)}
                        className="hover:text-white cursor-pointer"
                      >
                        <FiTrash2 size={18} />
                      </button>
                    </div>
                  </div>

                  <div className="flex">
                    <span className="m-1"><FcAbout /></span>
                    <p className="text-gray-400 text-sm mb-4">{each.EventDescription}</p>
                  </div>

                  <div className="flex items-center gap-3 text-gray-400 text-sm mb-4">
                    <FaCalendarAlt />
                    <div className="flex flex-col w-[190px]">
                      <span>{formatDate(each.StartDate)} - {formatDate(each.EndDate)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaMapMarkerAlt />{" "}
                      <span>{each.Venue}, {each.City}, {each.State}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaTrophy /> <span>{each.PricePool}</span>
                    </div>
                  </div>

                  <ul className="flex gap-2 flex-wrap">
                    {each.SpecifiedStacks?.split(",").map((stack, index) => (
                      <li
                        key={index}
                        className="bg-blue-600 px-3 py-1 rounded-full text-xs"
                      >
                        {stack.trim()}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            )
            )}
        </ul>
      }
    </div>
  );
}

export default MyEvents;
