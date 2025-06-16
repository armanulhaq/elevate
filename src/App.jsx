import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import LandingPage from "./pages/LandingPage";
import Onboarding from "./pages/Onboarding";
import JobListing from "./pages/JobListing";
import JobPost from "./pages/JobPost";
import SavedJobs from "./pages/SavedJobs";
import MyJobs from "./pages/MyJobs";

const router = createBrowserRouter([
    //It creates the routes of your app. Here are all the pages in my app and what component to show for each URL.
    {
        element: <AppLayout />, //this is the parent component and depending on the route Outlet inside AppLayout will be replaced with that element
        children: [
            { path: "/", element: <LandingPage /> },
            { path: "/onboarding", element: <Onboarding /> },
            { path: "/jobs", element: <JobListing /> },
            { path: "/job/:id", element: <Onboarding /> },
            { path: "/post-job", element: <JobPost /> },
            { path: "/saved-jobs", element: <SavedJobs /> },
            { path: "/my-jobs", element: <MyJobs /> },
        ],
    },
]);

function App() {
    return (
        <RouterProvider router={router} />
    ); /* Take these routes and run them in the browser. */
}

export default App;
