import icon128 from "../../assets/icon128.png";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="bg-gray-800 flex justify-between items-center text-white p-4">
      <div className="flex items-center space-x-2">
        <img src={icon128} className="size-10" alt="Tanki Helper logo" />
        <h1 className="text-2xl font-bold">Tanki Helper</h1>
      </div>
      <Navbar />
    </header>
  );
}    