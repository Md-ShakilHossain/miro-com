
const WayYouWork = () => {
    return (
        <div className="mt-40 md:mt-20 w-4/5 mx-auto">
            <h1 className="font-Inter font-medium md:font-bold text-2xl md:text-3xl lg:text-5xl">Built for the way you work</h1>
            <div className="mt-8">
                <ul className="grid grid-cols-2 md:grid-cols-4 lg:flex lg:justify-between lg:items-center gap-2 text-sm">
                    <li>Brainstorming</li>
                    <li>Diagramming</li>
                    <li>Meetings & Workshops</li>
                    <li>Scrum Events</li>
                    <li>Mapping</li>
                    <li>Research & Design</li>
                    <li>Strategic Planning</li>
                </ul>
            </div>
            <div className="flex flex-col-reverse lg:flex-row">
                <div className="w-72 md:w-96 lg:w-[360px] pl-4 pt-8 pr-10">
                    <p className="text-lg text-[#050038]">Brainstorming</p>
                    <p className="text-lg text-[#050038B2] mt-6">Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on.</p>
                    <p className="text-[#4262FF] text-lg mt-9"><span className="border-b border-[#4262FF] hover:cursor-pointer">Learn more</span> →</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/NYGx47L/Brainstormwithoutshadow-jpg.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default WayYouWork;