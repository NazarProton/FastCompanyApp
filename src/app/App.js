import React from "react";
import { Route, Routes } from "react-router-dom";

import Users from "./layouts/users";
import Login from "./layouts/login";
import Main from "./layouts/main";
import Navbar from "./components/ui/navBar";
import { ToastContainer } from "react-toastify";
import { ProfessionProvider } from "./hooks/useProfession";
import { QualitiesProvider } from "./hooks/useQualities";
import { AuthProvider } from "./hooks/useAuth";
import ProtectedRoute from "./components/common/protectedRoute";
import LogOut from "./layouts/logOut";

function App() {
    return (
        <div>
            <AuthProvider>
                <Navbar />
                <QualitiesProvider>
                    <ProfessionProvider>
                        <Routes>
                            <Route
                                path="users/*"
                                element={
                                    <ProtectedRoute>
                                        <Users />
                                    </ProtectedRoute>
                                }
                            >
                                <Route
                                    path=":userId/:edit"
                                    element={
                                        <ProtectedRoute>
                                            <Users />
                                        </ProtectedRoute>
                                    }
                                />
                                <Route
                                    path=":userId"
                                    element={
                                        <ProtectedRoute>
                                            <Users />
                                        </ProtectedRoute>
                                    }
                                />
                            </Route>
                            <Route path="login/*" element={<Login />} />
                            <Route path="logout" element={<LogOut />} />
                            <Route path="*" element={<Main />} />
                        </Routes>
                    </ProfessionProvider>
                </QualitiesProvider>
            </AuthProvider>
            <ToastContainer />
        </div>
    );
}

export default App;
