import React from "react";
import { FaPlus, FaFacebookF, FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function SocialIcons() {
  return (
    <div className=" mt-5 inline-flex gap-2">
      <button className="w-10 h-10 bg-gray-400 flex items-center justify-center rounded">
        <FaPlus className="text-white text-lg" />
      </button>

      <button className="w-10 h-10 bg-gray-400 flex items-center justify-center rounded">
        <FaFacebookF className="text-white text-lg" />
      </button>

      <button className="w-10 h-10 bg-gray-400 flex items-center justify-center rounded">
        <FaXTwitter className="text-white text-lg" />
      </button>

      <button className="w-10 h-10 bg-gray-400 flex items-center justify-center rounded">
        <FaWhatsapp className="text-white text-lg" />
      </button>

      <button className="w-10 h-10 bg-gray-400 flex items-center justify-center rounded">
        <MdEmail className="text-white text-lg" />
      </button>
    </div>
  );
}

export default SocialIcons;
