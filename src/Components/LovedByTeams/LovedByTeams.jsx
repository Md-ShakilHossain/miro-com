
const LovedByTeams = () => {
    return (
        <div className="mb-28 w-4/5 mx-auto">
            <h1 className="font-Inter font-medium md:font-bold text-2xl md:text-3xl lg:text-5xl text-center">Built for all kinds of teams</h1>
            <div className="flex justify-center">
                <button className="btn btn-outline border border-[#4262FF] text-[#4262FF] rounded-3xl pl-9 pr-8 pb-[14px] pt-[10px] text-lg mt-6">See all customer stories →</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between md:gap-5 mt-10">
                <div className="lg:pl-9 pt-9 w-72 h-[460px] lg:w-[360px] relative">
                    <img src="https://i.ibb.co/vv02sSN/vmware-svg.png" alt="" />
                    <p className="text-lg text-[#05003899] mt-9">“When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.”</p>
                    <div className="flex gap-4 absolute bottom-0 items-center">
                        <div>
                            <img src="https://i.ibb.co/wypHw3N/Mask-group-1-png.png" alt="" />
                        </div>
                        <div className="text-sm text-[#05003899]">
                            <p>Roxanne Mustafa</p>
                            <p>Design Team Lead at VMware</p>
                        </div>
                    </div>
                </div>
                <div className="lg:pl-9 pt-9 w-72 h-[460px] lg:w-[360px] relative">
                    <img src="https://i.ibb.co/QMLwH15/Docusign-Testimonials-280-60-Baseline-svg.png" alt="" />
                    <p className="text-lg text-[#05003899] mt-9">“Miro helps solve one of the major gaps in product design: how to manage tasks across product designers whose projects are in different tools.”</p>
                    <div className="flex gap-4 absolute bottom-0 items-center">
                        <div>
                            <img src="https://i.ibb.co/MCJ76zy/Jane-Docusign-Testimonials-2x-png.png" alt="" />
                        </div>
                        <div className="text-sm text-[#05003899]">
                            <p>Jane Ashley</p>
                            <p>Head of Design at DocuSign</p>
                        </div>
                    </div>
                </div>
                <div className="lg:pl-9 pt-9 w-72 h-[460px] lg:w-[360px] relative">
                    <img src="https://i.ibb.co/QvhLG4S/frog-svg.png" alt="" />
                    <p className="text-lg text-[#05003899] mt-9">“As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that’s at the core of what we do and will continue to extend into the future.”</p>
                    <div className="flex gap-4 absolute bottom-0 items-center">
                        <div>
                            <img src="https://i.ibb.co/JR4Y6JB/Mask-group-png.png" alt="" />
                        </div>
                        <div className="text-sm text-[#05003899]">
                            <p>Laura Baird</p>
                            <p>Associate Design Director at frog</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LovedByTeams;