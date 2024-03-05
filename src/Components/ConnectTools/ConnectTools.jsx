
const ConnectTools = () => {
    return (
        <div className="mt-24 w-4/5 mx-auto">
            <div className="flex flex-col md:flex-row lg:justify-between lg:items-center md:gap-14 lg:gap-28">
                <div>
                    <img src="https://i.ibb.co/Dfm7bRq/M3-integrations-all-integrations.png" alt="" />
                </div>
                <div className=" w-72 md:w-80 lg:w-[465px]">
                    <h1 className="font-Inter font-bold text-2xl lg:text-5xl">Connect <br />
                        your tools,<br />
                        close your tabs</h1>
                    <p className="font-Inter text-lg text-[#05003899] mt-7">Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom, Miro has 100+ integrations with tools you already use and love.</p>
                    <p className="text-[#4262FF] mt-10"><span className="border-b border-[#4262FF] hover:cursor-pointer">Learn more</span> →</p>
                </div>
            </div>
        </div>
    );
};

export default ConnectTools;