import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ length }) => {
    if (length > 4) {
        return (
            <span
                className={"badge fs-5 p-2 bg-primary"}
            >{`${length} человек тусанет с тобой сегодня`}</span>
        );
    } else if (length > 1) {
        return (
            <span
                className={"badge fs-5 p-2 bg-success"}
            >{`${length}человека тусанет с тобой сегодня`}</span>
        );
    } else if (length === 1) {
        return (
            <span
                className={"badge fs-5 p-2 bg-warning"}
            >{`${length}человек тусанет с тобой сегодня`}</span>
        );
    } else if (length === 0) {
        return (
            <span className={"badge fs-5 p-2 bg-danger"}>
                Никто с тобой не тусанет ти всех проигнорил!
            </span>
        );
    }
};

SearchStatus.propTypes = {
    length: PropTypes.number.isRequired
};

export default SearchStatus;
