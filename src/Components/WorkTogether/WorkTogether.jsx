
const WorkTogether = () => {
    return (
        <div className="mt-24 w-4/5 mx-auto">
            <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-5">
                <div className="w-72 md:w-[550px]">
                    <h1 className="font-Inter font-bold text-2xl md:text-3xl lg:text-5xl">Work together,<br />wherever you work</h1>
                    <p className="font-Inter text-[#05003899] text-lg mt-4">In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.</p>
                    <p className="text-[#4262FF] mt-10"><span className="border-b border-[#4262FF] hover:cursor-pointer">Learn more</span> →</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/VBtCWbP/hybridwork-png.png" alt=""  />
                </div>
            </div>
        </div>
    );
};

export default WorkTogether;