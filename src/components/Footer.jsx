import { Twitter, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Main Footer Content */}
                <div className="flex flex-col gap-8 md:flex md:justify-between mb-8">
                    {/* Brand Section */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 flex items-center justify-center">
                                <img src="/logo.png" alt="Elevate" />
                            </div>
                            <span className="text-2xl font-bold">Elevate</span>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                            Connecting talented professionals with their dream
                            opportunities. Built for the modern workforce.
                        </p>
                        <div className="flex space-x-4">
                            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200 cursor-pointer">
                                <Twitter className="w-5 h-5" />
                            </div>
                            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200 cursor-pointer">
                                <Linkedin className="w-5 h-5" />
                            </div>
                            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200 cursor-pointer">
                                <Github className="w-5 h-5" />
                            </div>
                            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200 cursor-pointer">
                                <Mail className="w-5 h-5" />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between ">
                        {/* Quick Links */}
                        <div>
                            <h4 className="font-semibold text-lg mb-4">
                                Quick Links
                            </h4>
                            <ul className="space-y-3">
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        Find Jobs
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        Post Jobs
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Support */}
                        <div>
                            <h4 className="font-semibold text-lg mb-4">
                                Support
                            </h4>
                            <ul className="space-y-3">
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        Help Center
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        Terms of Service
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white"
                                    >
                                        Cookie Policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
