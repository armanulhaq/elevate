import { Outlet } from "react-router-dom";

const AppLayout = () => {
    return (
        <div>
            <div className="grid-background"></div>
            <main></main>
            <Outlet />
            {/* For / route, LandingPage will be the outlet... */}
        </div>
    );
};

export default AppLayout;
