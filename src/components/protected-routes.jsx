import { useUser } from "@clerk/clerk-react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
    const { isSignedIn, user, isLoaded } = useUser(); //isSignedIn: Boolean — true if user is logged in. isLoaded: Boolean — true once Clerk has finished checking login status.
    const { pathname } = useLocation();

    if (isLoaded && !isSignedIn) return <Navigate to="/?sign-in=true" />;
};

export default ProtectedRoute;
