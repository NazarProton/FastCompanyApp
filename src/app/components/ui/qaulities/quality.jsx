import React from "react";
import PropTypes from "prop-types";

const Quality = ({ ...quality }) => (
    <span key={quality._id} className={`badge m-1 bg-${quality.color}`}>
        {quality.name}
    </span>
);

Quality.propTypes = {
    quality: PropTypes.object
};

export default Quality;
