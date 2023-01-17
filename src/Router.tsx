import React from "react";
import { Route, useParams } from "react-router";
import { Routes } from "react-router-dom";
import { RouterLayout } from "./common/RouterLayout";
import { Detail } from "./pages/Detail";
import { HomePage } from "./pages/Home/index";

export const AppRouter: React.FC<{}> = () => {
    const { movieId} = useParams();
    return (
        <Routes>
            <Route path="/" element={<RouterLayout/>}>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/detail/:movieId" element={<Detail/>}/>
            </Route>
        </Routes>
    );
};