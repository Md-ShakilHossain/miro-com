
const Footer = () => {
    return (
        <div className="h-[1200px] md:h-[1000px] lg:h-[680px] bg-[#02033B] py-24">
            <div className="w-4/5 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:flex gap-6 md:gap-32 lg:gap-[60px]">
                    <div className="w-72 md:w-[370px]">
                        <h1 className="font-Inter font-extrabold text-white mb-12 text-2xl">Scan. Detect. Remove.</h1>
                        <div className="flex gap-10 mt-12">
                            <img src="https://i.ibb.co/ZSChmY8/Icon-awesome-twitter-square.png" alt="" />
                            <img src="https://i.ibb.co/98WkYWh/Icon-awesome-facebook-square.png" alt="" />
                            <img src="https://i.ibb.co/xDrDc1Y/Exclusion-8-1.png" alt="" />
                        </div>
                        <div className="font-Inter text-[11px] text-white flex gap-6 mt-12">
                            <p className="border-b">Privacy Policy</p>
                            <p className="border-b">Terms of Service</p>
                        </div>
                        <div className="font-Inter text-[11px] text-white mt-9">
                            <p>Copyright © 2022 Certo Software Limited | Registered in England & Wales No. 10072356</p>
                            <p className="mt-[18px]">Designed & developed by Bigger Picture</p>
                        </div>
                    </div>
                    <div className="w-[180px]">
                        <h1 className="font-Inter font-extrabold text-white text-4xl mb-6">Miro.</h1>
                        <hr />
                        <div className="flex gap-6 items-center mt-[60px]">
                            <div className="w-5 h-[2px] bg-[#FFC247]"></div>
                            <p className="font-Inter text-[#FFC247] text-[19px] font-extrabold">iPhone</p>
                        </div>
                        <div className="flex gap-6 items-center mt-6">
                            <div className="w-5 h-[2px] bg-[#FFC247]"></div>
                            <p className="font-Inter text-[#FFC247] text-[19px] font-extrabold">Android</p>
                        </div>
                        <div className="flex gap-6 items-center mt-6">
                            <div className="w-5 h-[2px] bg-[#FFC247]"></div>
                            <p className="font-Inter text-[#FFC247] text-[19px] font-extrabold">Help</p>
                        </div>
                        <div className="flex gap-6 items-center mt-6">
                            <div className="w-5 h-[2px] bg-[#FFC247]"></div>
                            <p className="font-Inter text-[#FFC247] text-[19px] font-extrabold">About</p>
                        </div>
                        <div className="flex gap-6 items-center mt-6">
                            <div className="w-5 h-[2px] bg-[#FFC247]"></div>
                            <p className="font-Inter text-[#FFC247] text-[19px] font-extrabold">Insights</p>
                        </div>
                    </div>
                    <div className="w-full md:w-[520px] lg:w-[520px] h-[250px] bg-[#FFC247] rounded-[42px] relative">
                        <img src="https://i.ibb.co/YPJ3PHb/Path-10741.png" alt="" className="mx-auto" />
                        <div className="absolute w-full md:w-[364px] lg:w-[364px] top-6 md:top-[35px] md:left-9 lg:left-9">
                            <h1 className="font-Inter text-[#02033B] font-medium md:font-extrabold md:text-[23px]">Sign up for our newsletter</h1>
                            <p className="font-Inter text-[15px] text-[#02033B] mt-3 md:mt-[21px]">Receive the latest mobile security news, exclusive discounts & offers straight to your inbox!</p>
                            <input type="text" className="text-[#02033B80] py-2 pl-4 rounded-3xl md:rounded-l-[21px] mt-4 md:mt-9 w-full md:w-[254.8px] lg:w-[254.8px] h-[34.39px]" placeholder="Email address" />
                            <button className="font-Inter font-extrabold text-white text-[15px] bg-[#02033B] py-2 w-full md:w-[109.19px] lg:w-[109.19px] h-[34.39px] text-center rounded-3xl md:rounded-r-[21px] mt-2 md:mt-0">Submit</button>
                        </div>
                    </div>


                </div>
                <div className="w-72 md:w-[550px] mt-20">
                    <p className="font-Inter text-[12px] text-white">Apple, the Apple logo, and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Android, Google Play and the Google Play logo are trademarks of Google LLC.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;