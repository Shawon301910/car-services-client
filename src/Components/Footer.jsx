import logo from "../assets/logo-footer.svg"
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-black text-white">
            <div className="max-w-screen-2xl w-4/5 m-auto">
                <div className="py-20">
                    <div className="grid grid-cols-5 gap-20">
                        <div className="col-span-2">
                            <div className="w-24">
                                <img className="w-full" src={logo} alt="error" />
                                <h4 className="text-xl font-medium">Car Doctor</h4>
                            </div>
                            <div className="py-5">
                                <p className="opacity-70">Edwin Diaz is a software and web <br />
                                    technologies engineer, a life coach <br /> trainer who is also a serial .</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div>
                                    <a className="w-10 h-10 bg-white rounded-full bg-opacity-20 flex justify-center items-center hover:text-red-500 duration-500" href="#"><FaGoogle size={20} /></a>
                                </div>
                                <div>
                                    <a className="w-10 h-10 bg-white rounded-full bg-opacity-20 flex justify-center items-center hover:text-red-500 duration-500" href="#"><FaTwitter size={20} /></a>
                                </div>
                                <div>
                                    <a className="w-10 h-10 bg-white rounded-full bg-opacity-20 flex justify-center items-center hover:text-red-500 duration-500" href="#"><FaInstagram size={20} /></a>
                                </div>
                                <div>
                                    <a className="w-10 h-10 bg-white rounded-full bg-opacity-20 flex justify-center items-center hover:text-red-500 duration-500" href="#"><FaLinkedin size={20} /></a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="pb-10">
                                <h4 className="text-xl font-medium">About</h4>
                            </div>
                            <ul className="opacity-70">
                                <li className="py-1"><Link className="hover:text-red-500 duration-500">Hove</Link></li>
                                <li className="py-1"><Link className="hover:text-red-500 duration-500">Service</Link></li>
                                <li className="py-1"><Link className="hover:text-red-500 duration-500">Contact</Link></li>
                            </ul>
                        </div>
                        <div>
                            <div className="pb-10">
                                <h4 className="text-xl font-medium">Company</h4>
                            </div>
                            <ul className="opacity-70">
                                <li className="py-1"><Link className="hover:text-red-500 duration-500">Why Car Doctor</Link></li>
                                <li className="py-1"><Link className="hover:text-red-500 duration-500">About</Link></li>
                            </ul>
                        </div>
                        <div>
                            <div className="pb-10">
                                <h4 className="text-xl font-medium">Support</h4>
                            </div>
                            <ul className="opacity-70">
                                <li className="py-1"><Link className="hover:text-red-500 duration-500">Support Center</Link></li>
                                <li className="py-1"><Link className="hover:text-red-500 duration-500">Feedback</Link></li>
                                <li className="py-1"><Link className="hover:text-red-500 duration-500">Accessability</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;