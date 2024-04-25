import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./ErrorPage";
import HomePage from "./homePage/HomePage";
import AddedCoffee from "./addedCoffee/AddedCoffee";
import UpdateCoffee from "./updateCoffee/UpdateCoffee";


const router = createBrowserRouter([
    {

        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/home",
                element: <HomePage />,
            },
            {
                path: "/addedCoffee",
                element: <AddedCoffee />,
            },
            {
                path: "/updateCoffee",
                element: <UpdateCoffee />,
            },
        ],

    },
]);
export default router;