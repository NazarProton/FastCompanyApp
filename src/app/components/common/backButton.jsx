import React from "react";
import { useNavigate } from "react-router";
const BackHistoryButton = () => {
    const history = useNavigate();
    return (
        <button className="btn btn-primary mb-1" onClick={() => history(-1)}>
            <i className="bi bi-caret-left"></i>
            Назад
        </button>
    );
};

export default BackHistoryButton;
