import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import qualityService from "../services/qaulity.service";

const QualitiesContex = React.createContext();

export const useQualities = () => {
    return useContext(QualitiesContex);
};

export const QualitiesProvider = ({ children }) => {
    const [isLoading, setLoading] = useState(true);
    const [qualities, setQualities] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        if (error !== null) {
            toast(error);
            setError(null);
        }
    }, [error]);

    useEffect(() => {
        getQualities();
    }, []);

    function errorCatcher(error) {
        const { message } = error.response.data;
        setError(message);
    }
    async function getQualities() {
        try {
            const { content } = await qualityService.fetchAll();
            setQualities(content?content:{});
            setLoading(false);
        } catch (error) {
            errorCatcher(error);
        }
    }
    function getQuality(id) {
        return qualities.find((q) => q._id === id);
    }
    
    return (
        <QualitiesContex.Provider
            value={{
                qualities,
                getQuality,
                isLoading
            }}
        >
            {children}
        </QualitiesContex.Provider>
    );
};

QualitiesProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
