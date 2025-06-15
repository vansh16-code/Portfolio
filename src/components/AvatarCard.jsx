// src/components/AvatarCard.jsx
import { useNavigate } from "react-router-dom";

export default function AvatarCard({ role, img, path }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(path)}
      className="cursor-pointer flex flex-col items-center w-28 sm:w-32 mx-2 my-4 hover:scale-105 transition-transform duration-300"
    >
      <img
        src={img}
        alt={role}
        className="w-24 h-24 sm:w-28 sm:h-28 rounded-md object-cover border-4 border-transparent hover:border-red-600"
      />
      <p className="mt-2 text-xs sm:text-sm md:text-base text-white text-center">
        {role}
      </p>
    </div>
  );
}
