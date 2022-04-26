import React from "react";
import { Route, Routes } from "react-router-dom";

import Users from "./layouts/users";
import Login from "./layouts/login";
import Main from "./layouts/main";
import Navbar from "./components/ui/navBar";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="users" element={<Users />} />
                <Route path="users/:userId/:edit" element={<Users />} />
                <Route path="users/:userId" element={<Users />} />
                <Route path="login/*" element={<Login />} />
                <Route path="*" element={<Main />} />
            </Routes>
        </>
    );
}

export default App;
