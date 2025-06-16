import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
} from "@clerk/clerk-react";

const Header = () => {
    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 flex items-center justify-center">
                                <img src="/logo.png" alt="" />
                            </div>
                            <span className="text-2xl font-bold text-gray-900">
                                Elevate
                            </span>
                        </div>
                        <Button
                            variant="outline"
                            className="border-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200"
                        >
                            Login
                        </Button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
