import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import News from "./pages/News/News";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path:"/",
                element:<News/>
            }
        ]
    }
])