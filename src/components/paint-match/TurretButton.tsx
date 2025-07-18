import { useState } from "react";
import add_icon from "../../assets/add_icon.svg";
import remove_icon from "../../assets/remove_icon.svg";

export default function TurretButton({ turretName }: { turretName: string; }) {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => setIsActive(prev => !prev);

    return (
        <div className="flex flex-col items-center">
            <button
                type="button"
                onClick={handleClick}
                className={`
                    inline-flex items-center justify-center
                    min-w-[130px] md:min-w-[145px] h-[48px]
                    px-[17px] py-0 border-2
                    font-inter font-semibold text-[16px] leading-6 tracking-[-0.05em]
                    transition-all duration-150 select-none cursor-pointer
                    ${isActive
                        ? "bg-[#54a84c] text-white border-black"
                        : "bg-white text-black border-black hover:border-[#54a84c] hover:text-[#54a84c]"
                    }
                `}
            >
                <img src={`./public/images/turrets/${turretName}3.png`} className="w-[40px] h-[40px] mr-2" alt="" />{turretName}
            </button>
            <div className={`flex flex-row justify-center ${isActive ? "block" : "hidden"}`}>
                <input
                    type="number"
                    min="1"
                    max="40"
                    defaultValue={1}
                    className={`
                        w-[50px] h-[25px]
                        bg-white border-2 border-black
                        text-black text-center text-md
                        shadow-sm
                        focus:outline-none
                        border-t-0
                        border-r-0
                        [&::-webkit-outer-spin-button]:appearance-none
                        [&::-webkit-outer-spin-button]:m-0
                        [&::-webkit-inner-spin-button]:appearance-none
                        [&::-webkit-inner-spin-button]:m-0

                        /* Oculta spinner no Firefox */
                        [type="number"]:-moz-appearance-textfield
                    `}
                />
                <div className="flex flex-row justify-evenly items-center h-[25px] bg-white border-2 border-black border-l-0 border-t-0 pr-0.5">
                    <button className="cursor-pointer rounded-full hover:bg-gray-200">
                        <img src={remove_icon} alt="" className="size-5"/>
                    </button>
                    <button className="cursor-pointer rounded-full hover:bg-gray-200">
                        <img src={add_icon} alt="" className="size-5"/>
                    </button>
                </div>
            </div>
        </div>
    );
}