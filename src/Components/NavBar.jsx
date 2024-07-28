import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg"
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";


const NavBar = () => {
    return (
        <nav>
            <div className="max-w-screen-2xl w-4/5 m-auto">
                <div className="py-5">
                    <div className="flex justify-between items-center">
                        <div className="w-20">
                            <img className="w-full" src={logo} alt="error" />
                        </div>
                        <div className="pl-5">
                            <ul className="flex items-center gap-10">
                                <li className="text-2xl font-medium"><NavLink>Home</NavLink></li>
                                <li className="text-2xl font-medium"><NavLink>About</NavLink></li>
                                <li className="text-2xl font-medium"><NavLink>Services</NavLink></li>
                                <li className="text-2xl font-medium"><NavLink>Blog</NavLink></li>
                                <li className="text-2xl font-medium"><NavLink>Contact</NavLink></li>
                            </ul>
                        </div>
                        <div className="flex items-center gap-5">
                            <div>
                                <HiOutlineShoppingBag size={25} className="font-normal" />
                            </div>
                            <div>
                                <IoIosSearch size={25} />
                            </div>
                            <div>
                                <button className="text-xl font-medium text-red-500 border-4 border-red-400 rounded-lg px-5 py-2">Appointment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;