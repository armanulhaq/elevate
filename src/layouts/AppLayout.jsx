import Header from "@/components/header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const AppLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-16">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default AppLayout;
