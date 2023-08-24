import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import App from "../layout/App";
import Protect from "./Protect";
import NotFound from "../pages/NotFoundPage/NotFound";

const router=createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<App/>}>

                <Route path="*" element={<NotFound/>}/>
            </Route>
        </>
    )
)

export default router;