import { useState } from "react";
import {
  FaPhoneAlt,
  FaGlobe,
  FaInfoCircle,
  FaBars,
  FaTimes,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceModalOpen, setServiceModalOpen] = useState(false);

  const services = [
    { id: "pickup", label: "Pick Up", image: "./images/pickup.png" },
    { id: "dinein", label: "Dine In", image: "./images/dinein.png" },
    { id: "delivery", label: "Delivery", image: "./images/delivery.png" },
  ];

  const baseBtn =
    "text-[16px] px-5 py-2 rounded-[10px] border font-semibold transition-all duration-300";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gray-50 shadow-lg px-[1rem]">
      {/* Top Row */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-white border-gray-300 rounded-md p-[0.49rem] flex items-center justify-center">
            <img src="./logo.png" alt="logo" className="w-[5rem] h-14" />
          </div>
          <div className="pl-[2.1rem]">
            <h1 className="text-[22px] font-[700] text-gray-900 leading-[2.2rem]">
              FoodChow Demo India
            </h1>
            <p className="text-gray-700 flex items-center">
              <FaMapMarkerAlt className="mr-1 text-gray-700" size={14} />
              Surat, Gujarat, India
            </p>
          </div>
        </div>

        {/* Burger Menu (Mobile) */}
        <div className="xl:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center gap-5">
          <div className="text-lg pr-[4.5rem]">
            <span className="text-green-700 font-[500] text-center block text-base xl:text-lg">
              Restaurant Is Open
            </span>
            <div className="flex items-center text-[rgb(87,91,94)] text-[1.59rem] xl:text-lg font-bold">
              <span>Timing – Open 24 Hours</span>
              <FaInfoCircle style={{ color: "black" }} />
            </div>
          </div>

          {/* Buttons */}
          <button
            onClick={() => setServiceModalOpen(true)}
            className={`${baseBtn} border-black text-black hover:bg-black hover:text-white`}
          >
            Choose Service
          </button>

          <button
            className={`${baseBtn} border-black text-black hover:bg-black hover:text-white`}
          >
            Book Now
          </button>

          {/* Phone Button */}
          <button
            className={`${baseBtn} flex items-center gap-3 bg-white text-black border-black rounded-full hover:bg-black hover:text-white`}
            style={{ borderWidth: "1.5px" }}
          >
            <span
              className="flex items-center justify-center rounded-full bg-black text-white group-hover:bg-white group-hover:text-black"
              style={{ width: 30, height: 27 }}
            >
              <FaPhoneAlt size={16} />
            </span>
            9825794210
          </button>

          <button
            className={`${baseBtn} flex items-center gap-2 border-black text-black hover:bg-black hover:text-white`}
          >
            <FaGlobe size={18} />
            en
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col gap-4 mt-4 xl:hidden bg-white shadow-lg rounded-md p-5">
          {/* Restaurant Status */}
          <div className="text-lg border-b border-gray-200 pb-3">
            <span className="text-green-700 font-semibold block text-base">
              Restaurant Is Open
            </span>
            <div className="flex items-center text-gray-600 text-base font-medium mt-1">
              <span>Timing – Open 24 Hours</span>
              <FaInfoCircle className="font-bold text-black ml-2" />
            </div>
          </div>

          {/* Buttons */}
          <button
            onClick={() => setServiceModalOpen(true)}
            className={`${baseBtn} w-full border-black text-black hover:bg-black hover:text-white`}
          >
            Choose Service
          </button>

          <button
            className={`${baseBtn} w-full border-black text-black hover:bg-black hover:text-white`}
          >
            Book Now
          </button>

          {/* Mobile Phone Button */}
          <button
            className={`${baseBtn} w-full flex items-center justify-center gap-3 bg-white text-black border-black rounded-full hover:bg-black hover:text-white`}
            style={{ borderWidth: "1.5px" }}
          >
            <span
              className="flex items-center justify-center rounded-full bg-black text-white"
              style={{ width: 30, height: 30 }}
            >
              <FaPhoneAlt size={16} />
            </span>
            9825794210
          </button>

          <button
            className={`${baseBtn} w-full flex items-center justify-center gap-3 border-black text-black hover:bg-black hover:text-white`}
          >
            <FaGlobe size={18} />
            en
          </button>
        </div>
      )}

      {/* Choose Service Modal */}
      {serviceModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-60">
          <div className="bg-white rounded-[20px] shadow-2xl w-[90%] max-w-lg p-0 relative border border-gray-200 overflow-hidden">
            <button
              onClick={() => setServiceModalOpen(false)}
              aria-label="Close modal"
              className="absolute top-4 right-4 w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center bg-white hover:bg-gray-200 transition-all duration-200"
            >
              <span className="text-2xl font-bold text-gray-700">&times;</span>
            </button>

            <div className="px-6 pt-[1rem] pb-4">
              <h2 className="text-[20px] font-[700] text-black text-left">
                Choose A Service
              </h2>
            </div>

            <div className="w-full border-b border-[#b7b7b7]"></div>

            <div className="grid grid-cols-3 gap-6 text-center px-[1rem] py-[1rem]">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="cursor-pointer p-3 rounded-[12px] transition text-black hover:bg-[#d2f5f5] hover:border hover:border-gray-300 hover:shadow"
                >
                  <img
                    src={service.image}
                    alt={service.label}
                    className="w-16 h-16 object-contain mx-auto mb-2"
                  />
                  <span className="text-[18px] font-semibold">
                    {service.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
