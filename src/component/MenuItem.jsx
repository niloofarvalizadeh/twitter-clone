import { Link } from "react-router-dom";

const MenuItem = ({ icon, text, to, isActive }) => {
  return (
    <li className="custom-li mb-4">
      <Link
        to={to}
        className={`flex items-center transition-all duration-200 hover:text-blue-600 ${
          isActive ? "text-blue-600 font-bold" : ""
        }`}
      >
        {icon}
        <span className="ml-4 text-lg">{text}</span>
      </Link>
    </li>
  );
};

export default MenuItem;
