import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import LandingPage from "./pages/LandingPage";
import Onboarding from "./pages/Onboarding";
import JobListing from "./pages/JobListing";
import JobPost from "./pages/JobPost";
import SavedJobs from "./pages/SavedJobs";
import MyJobs from "./pages/MyJobs";
import ProtectedRoute from "./components/protected-routes";
import JobPage from "./pages/JobPage";

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <LandingPage />,
            },
            {
                path: "/onboarding",
                element: (
                    <ProtectedRoute>
                        <Onboarding />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/jobs",
                element: (
                    <ProtectedRoute>
                        <JobListing />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/post-job",
                element: (
                    <ProtectedRoute>
                        <JobPost />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/my-jobs",
                element: (
                    <ProtectedRoute>
                        <MyJobs />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/saved-jobs",
                element: (
                    <ProtectedRoute>
                        <SavedJobs />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/job/:id",
                element: (
                    <ProtectedRoute>
                        <JobPage />
                    </ProtectedRoute>
                ),
            },
        ],
    },
]);
function App() {
    return (
        <RouterProvider router={router} />
    ); /* Take these routes and run them in the browser. */
}

export default App;
