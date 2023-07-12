import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Basic from "../Basic";

function Routing() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/basic" element={<Basic />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default Routing;