import icon128 from "../../assets/icon128.png";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gray-800 flex justify-between items-center text-white p-4">
      <Link to="/" className="flex items-center space-x-2 hover:cursor-pointer">
        <img src={icon128} className="size-10" alt="Tanki Helper logo" />
        <h1 className="text-[28px] font-bold">Tanki Helper</h1>
      </Link>
      <Navbar />
    </header>
  );
}    