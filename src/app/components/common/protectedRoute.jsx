// import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuth } from "../../hooks/useAuth";
import { propTypes } from "react-bootstrap/esm/Image";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
    let navigate = useNavigate();
    const params = useLocation();
    const { currentUser } = useAuth();
    useEffect(() => {
        if (!currentUser) {
            navigate("/login", {
                replace: true,
                state: params.pathname
            });
        }
    }, [currentUser]);
    return children;
};

ProtectedRoute.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(propTypes.node),
        PropTypes.node
    ])
};

export default ProtectedRoute;
