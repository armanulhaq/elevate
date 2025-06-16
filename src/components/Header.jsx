import { Link, useSearchParams } from "react-router-dom";
import { Button } from "./ui/button";
import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { Briefcase, Heart } from "lucide-react";

const Header = () => {
    const [showSignIn, setShowSignIn] = useState(false);

    const [search, setSearch] = useSearchParams();

    useEffect(() => {
        if (search.get("sign-in")) {
            //If the URL contains ?sign-in, it shows the modal automatically.
            setShowSignIn(true);
        }
    }, [search]);

    const handleOverlayClick = (e) => {
        //e.target: The actual element that was clicked.
        //e.currentTarget: The element that the event handler is attached to.
        //ensures that only clicks directly on the overlay (not on children like the modal box) close the modal.
        if (e.target === e.currentTarget) {
            setShowSignIn(false);
        }
        setSearch({});
    };

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
                        <div className="flex gap-8">
                            <SignedOut>
                                <Button
                                    variant="outline"
                                    className="border-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200"
                                    onClick={() => {
                                        setShowSignIn(true);
                                    }}
                                >
                                    Login
                                </Button>
                            </SignedOut>

                            <SignedIn>
                                <Link to="/post-job">
                                    <Button
                                        variant="destructive"
                                        className="rounded-full"
                                    >
                                        Post a job
                                    </Button>
                                </Link>
                                <UserButton
                                    appearance={{
                                        elements: {
                                            avatarBox: "w-10 h-10",
                                        },
                                    }}
                                >
                                    <UserButton.MenuItems>
                                        <UserButton.Link
                                            label="My Jobs"
                                            labelIcon={<Briefcase size={15} />}
                                            href="/my-jobs"
                                        />
                                        <UserButton.Link
                                            label="Saved Jobs"
                                            labelIcon={<Heart size={15} />}
                                            href="/saved-jobs"
                                        />
                                    </UserButton.MenuItems>
                                </UserButton>
                            </SignedIn>
                        </div>
                    </div>
                </div>
            </nav>
            {showSignIn && (
                <div
                    className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50"
                    onClick={handleOverlayClick}
                >
                    <div onClick={(e) => e.stopPropagation()}>
                        <SignIn
                            signUpForceRedirectUrl="/onboarding"
                            fallbackRedirectUrl="/onboarding"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
