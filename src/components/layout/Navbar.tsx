export default function Navbar() {
    return (
        <>
            <ul className="flex gap-6 text-white text-lg">
                <li>
                    <a href="/" className="relative group">
                        Home
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#54a84c] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </li>
                <li>
                    <a href="/paintmatch" className="relative group">
                        Paint Match
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#54a84c] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </li>
                <li>
                    <a href="/turretmatch" className="relative group">
                        Turret Match
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#54a84c] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </li>
                <li>
                    <a href="/about" className="relative group">
                        About
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#54a84c] transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </li>
            </ul>
        </>
    )
}