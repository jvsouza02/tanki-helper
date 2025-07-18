
export default function BestOptionPanel() {
    return (
        <div className="grid grid-cols-3 grid-rows-1 gap-4 h-1/2 pt-5">
            <div className="col-span-1 grid-rows-1 flex justify-end">
                <h2 className="text-[28px] font-semibold">Best Option:</h2>
            </div>
            <div className="flex justify-center">
                <div className="col-span-2 flex justify-start">
                    <div className="container mx-auto px-4">
                        <div className="grid gap-6 
                            grid-cols-1 
                            sm:grid-cols-2 
                            md:grid-cols-3 
                            lg:grid-cols-4 
                            xl:grid-cols-5">
                            <div className="
                                w-full             
                                sm:w-80            
                                bg-white 
                                border-2 border-[#2A3A4D]
                                rounded-2xl 
                                shadow-[0_4px_6px_rgba(0,0,0,0.05)]
                                overflow-hidden
                                hover:border-[#66BB6A]
                                transition-colors duration-200
                                mx-auto
                                    ">
                                <img
                                    src="./public/images/paints/coloring_emerald.png"
                                    alt="Africa paint"
                                    className="w-full h-48 object-cover"
                                />
                                <div className=" flex flex-col">
                                    <h3 className="text-2xl font-semibold text-[#2A3A4D] text-center">
                                        Emerald
                                    </h3>
                                    <div className="flex flex-col p-2">
                                        <div className="w-full"><h4 className="text-md font-semibold text-[#2A3A4D] text-center">Protection</h4></div>
                                        <div className="w-full flex flex-row justify-center items-center text-center bg-[#2A3A4D] rounded-s-2xl rounded-e-2xl text-white">
                                            <div className="w-1/3 border-2 border-[#2A3A4D] rounded-s-2xl flex flex-row justify-center items-center gap-2">
                                                <img src="./public/images/turrets-protection/Thunder.png" alt="" />
                                                <p>50%</p>
                                            </div>
                                            <div className="w-1/3 border-2 border-[#2A3A4D] flex flex-row justify-center items-center gap-2 border-l-0 border-r-0">
                                                <img src="./public/images/turrets-protection/Railgun.png" alt="" />
                                                <p>20%</p>
                                            </div>
                                            <div className="w-1/3 border-2 border-[#2A3A4D] rounded-e-2xl flex flex-row justify-center items-center gap-2">
                                                <img src="./public/images/turrets-protection/Twins.png" alt="" />
                                                <p>14%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}