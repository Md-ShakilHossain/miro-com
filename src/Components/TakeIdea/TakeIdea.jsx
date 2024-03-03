
const TakeIdea = () => {
    return (
        <div className="mt-14 w-4/5 mx-auto">
            <div className="flex gap-14">
                <div className="w-[440px] h-[469px]">
                    <h1 className="font-Inter text-5xl font-bold">Take ideas from better to best</h1>
                    <p className="text-lg mt-4 text-[#050038B8]">{`Miro is your team's visual platform to connect, collaborate, and create — together.`}</p>
                    <div className="mt-8">
                        <input className="text-[#5F5C80] border border-[#9B99AF] rounded-[32px] py-3 px-6 w-[440px] h-12" type="text" placeholder="Enter your work email" />
                        <button className=" bg-[#4262FF] w-[440px] h-13 rounded-[32px] text-white pt-3 pb-4 mt-3">Sign up free →</button>
                        <p className="text-[#05003866] text-sm mt-2">Collaborate with your team within minutes</p>

                        <div className="flex gap-4 items-center mt-10">
                            <div>
                                <img src="https://i.ibb.co/wRbF1ww/rating.png" alt="" />
                                <p>Based on 5149+ reviews:</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <img src="https://i.ibb.co/BnKYgXS/g2.png" alt="" />
                                <img src="https://i.ibb.co/qd07Mv8/getApp.png" alt="" />
                                <img src="https://i.ibb.co/0KnCL6p/Capterra.png" alt="" />
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <img src="https://i.ibb.co/RDSZBGK/takeIdea.png" alt="" className="w-[640px] h-[463px]" />
                </div>
            </div>
        </div>
    );
};

export default TakeIdea;