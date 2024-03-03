
const Navbar = () => {
    const navLink = <>
        <li className="flex gap-3 items-center">
            <p>Product</p>
            <select />
        </li>
        <li className="flex gap-3 items-center">
            <p>Solutions</p>
            <select />
        </li>
        <li className="flex gap-3 items-center">
            <p>Resources</p>
            <select />
        </li>
        <li><a className="font-Inter">Enterprise</a></li>
        <li><a className="font-Inter">Pricing</a></li>
    </>

    const navLink1 = <>
        <li className="flex gap-2">
            <img src="https://i.ibb.co/XjW7G8m/lang.png" alt="" className="w-6 h-6" />
            <p>EN</p>
        </li>
        <li>
            <p className="font-Inter">Contact Sales</p>
        </li>
        <li>
            <p className="font-Inter">Login</p>
        </li>
    </>
    return (
        <div className="navbar bg-base-100 flex justify-between items-start">
            <div>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>

                <div className="flex items-end gap-6">
                    <div>
                        <img src="https://i.ibb.co/3RTrN4C/miro.png" alt="Miro" className="h-4 md:h-8 w-12 md:w-24" />
                    </div>

                    <div className="hidden lg:block">
                        <ul className="flex flex-row gap-4">
                            {navLink}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-5">
            <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink1}
                    </ul>
                </div>
                <div className="hidden lg:block">
                        <ul className="flex flex-row gap-4">
                            {navLink1}
                        </ul>
                    </div>
                <button className="bg-[#4262FF] h-12 w-[152px] text-white md:px-[22px] rounded-md md:rounded-3xl border text-center">Sign up free →</button>
            </div>
        </div>
    );
};

export default Navbar;