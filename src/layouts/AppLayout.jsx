import Header from "@/components/header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const AppLayout = () => {
    return (
        <div>
            <main className="">
                <Outlet />
            </main>
            <Header />
            <Footer />
        </div>
    );
};

export default AppLayout;
