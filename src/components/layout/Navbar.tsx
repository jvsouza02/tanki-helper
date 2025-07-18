import { Link, useLocation } from "react-router-dom";
import { routes } from "../../routes/tanki-helper-routes";

export default function Navbar() {
    const location = useLocation();

    return (
        <nav>
            <ul className="flex gap-6 text-white text-lg">
                {routes.map((item) => (
                    <li key={item.href}>
                        <Link
                            to={item.href}
                            className='relative group text-[20px]'
                        >
                            {item.label}
                            <span
                                className={`absolute left-0 -bottom-1 h-[2px] bg-[#54a84c] transition-all duration-300 ${location.pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                                    }`}
                            ></span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}