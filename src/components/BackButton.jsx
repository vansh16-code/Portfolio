import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function BackButton() {
  return (
    <div className="absolute top-4 left-4">
      <Link
        to="/Home"
        className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition"
      >
        <FaArrowLeft />
        Back
      </Link>
    </div>
  );
}
