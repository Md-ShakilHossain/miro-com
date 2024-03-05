const YourIdea = () => {
    return (
        <div className="mt-40 w-4/5 mx-auto">
            <div className="relative">
                <h1 className="font-Inter font-medium md:font-bold text-2xl md:text-3xl lg:text-5xl text-center">Collaborate without<br />constraints</h1>
                <div className="bg-[#FFD02F] w-[172px] mx-auto rounded-lg font-semibold transform rotate-[10deg] absolute right-4 md:right-24 lg:right-48 bottom-20 md:bottom-24 lg:bottom-28">
                    <p className="uppercase text-sm text-center">Your Idea Starts Here</p>
                </div>
            </div>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:flex lg:gap-5 lg:justify-between">
                <div className="w-72 md:w-80 lg:w-[360px] p-4">
                    <h3 className="font-Inter font-bold text-xl lg:text-2xl">Free forever</h3>
                    <p className="text-[#05003899] text-lg mt-7">Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our <br /> <span className="text-[#4262FF]">pricing plans</span> for more features.</p>
                </div>
                <div className="w-72 md:w-80 lg:w-[360px] p-4">
                    <h3 className="font-Inter font-bold text-xl lg:text-2xl">Easy integrations</h3>
                    <p className="text-[#05003899] text-lg mt-7">Miro has 100+ powerful integrations with tools you already use like G Suite, Slack, and Jira, so your <br /> workflow is seamless. View the full list in our <span className="text-[#4262FF]">Marketplace .</span></p>
                </div>
                <div className="w-72 md:w-80 lg:w-[360px] p-4">
                    <h3 className="font-Inter font-bold text-xl lg:text-2xl">Security first</h3>
                    <p className="text-[#05003899] text-lg mt-7">We treat your data like you would — with the utmost care. We follow industry-leading security standards and give you tools to protect intellectual property. Learn more <br /> at our <span className="text-[#4262FF]">Trust Center .</span></p>
                </div>
            </div>
            <div className="flex justify-center mt-10"><button className="bg-[#4262FF] h-12 w-[152px] text-white md:px-[22px] rounded-md md:rounded-3xl border text-center">Sign up free →</button></div>
        </div>
    );
};

export default YourIdea;
