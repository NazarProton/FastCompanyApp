import React from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import LoginForm from "../components/ui/loginForm";
import RegiserForm from "../components/ui/registerForm";

const Login = () => {
    return (
        <Routes>
            <Route
                path="register"
                element={
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-md-6 offset-md-3 shadow p-4">
                                <h3 className="mb-4">Register</h3>
                                <RegiserForm />
                                <p>
                                    Already have account?{" "}
                                    <Link
                                        to="/login"
                                        role="button"
                                    >
                                        Sign in
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                }
            />
            <Route
                path=""
                element={
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-md-6 offset-md-3 shadow p-4">
                                <h3 className="mb-4">Login</h3>
                                <LoginForm />
                                <p>
                                    Dont have account?{" "}
                                    <Link
                                        to="register"
                                        role="button"
                                    >
                                        Sign Up
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                }
            />
        </Routes>
    );
};

export default Login;
