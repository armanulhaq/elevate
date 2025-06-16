import { useUser } from "@clerk/clerk-react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const { isSignedIn, user, isLoaded } = useUser(); //isSignedIn: Boolean — true if user is logged in. isLoaded: Boolean — true once Clerk has finished checking login status.
    const { pathname } = useLocation();
    if (isLoaded && !isSignedIn) return <Navigate to="/?sign-in=true" />;
    if (
        user !== undefined &&
        !user?.unsafeMetadata?.role &&
        pathname !== "/onboarding"
    )
        return <Navigate to="/onboarding" />;
    return children;
};

export default ProtectedRoute;
