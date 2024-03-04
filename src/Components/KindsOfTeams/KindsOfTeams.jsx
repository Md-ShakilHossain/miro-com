
const KindsOfTeams = () => {
    return (
        <div className="my-28 w-4/5 mx-auto">
            <h1 className="font-Inter font-bold text-5xl">Built for all kinds of teams</h1>

            <div className="mt-8">
                <ul className="flex justify-start items-center gap-2 text-sm">
                    <li className="p-4">UX & Design</li>
                    <li className="p-4">Marketing</li>
                    <li className="p-4">Product Management</li>
                    <li className="p-4">Engineering</li>
                    <li className="p-4">Consultants</li>
                    <li className="p-4">Agile Coaches</li>
                    <li className="p-4">Sales</li>
                </ul>
            </div>
            <div className="flex">
                <div className="w-[360px] pl-4 pt-8 pr-10">
                    <div className="flex gap-4 items-center">
                        <img src="https://i.ibb.co/QpL5Bzk/right-Sign.png" alt="" />
                        <p className="text-lg">Build low-fi wireframes</p>
                    </div>
                    <div className="flex gap-4 items-center my-4">
                        <img src="https://i.ibb.co/QpL5Bzk/right-Sign.png" alt="" />
                        <p className="text-lg">Involve stakeholders in the design process</p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <img src="https://i.ibb.co/QpL5Bzk/right-Sign.png" alt="" />
                        <p className="text-lg">Run engaging design workshops</p>
                    </div>

                    <p className="text-[#4262FF] text-lg mt-8"><span className="border-b border-[#4262FF] hover:cursor-pointer">Learn more</span> →</p>

                    <div className="mt-12">
                        <p className="text-lg text-[#05003899]">Integrate your favorite tools</p>
                        <div className="flex gap-8 items-center mt-3">
                            <div>
                                <img src="https://i.ibb.co/k8SmVqG/Vector.png" alt="" />
                            </div>
                            <div>
                                <img src="https://i.ibb.co/s23CsST/Adobe-XD-CC-icon-svg.png" className="w-[26.28px] h-[25.62px]" alt="" />
                            </div>
                            <div>
                                <img src="https://i.ibb.co/Sr3QHXX/Vector-1.png" alt="" />
                            </div>
                            <div>
                                <img src="https://i.ibb.co/frgkScw/Vector-2.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/wd1M3M9/uxdesignwithoutshadow-jpg.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default KindsOfTeams;