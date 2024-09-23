import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import News from "./pages/News/News";
import SingleNews from "./pages/singleNews/SingleNews";
import AllSportsPost from "./pages/Shared/AllSportsPost/AllSportsPost";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path:"/",
                element:<News/>
            },
            {
                path:"/news/:slug",
                element:<SingleNews/>
            },
            {
                path:"/all-sports/:category",
                element:<AllSportsPost/>
            },
            {
                path:"/all-sports/:category/:subcategory",
                element:<AllSportsPost/>
            }
        ]
    }
])