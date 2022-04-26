import React from "react";
import PropTypes from "prop-types";
import Table,{TableBody,TableHeader} from "../common/table";
import BookMark from "../common/bookmark";
import Qualities from "./qaulities";
import { Link } from "react-router-dom";

const UsersTable = ({
    users,
    onSort,
    selectedSort,
    onHandle,
    onDelete
    // ...rest
}) => {
    const columns = {
        name: {
            path: "name",
            name: "Имя",
            component: (user) => (
                <Link to={`/users/${user._id}`}>{user.name}</Link>
            )
        },
        qualities: {
            name: "Качества",
            component: (user) => <Qualities qualities={user.qualities} />
        },
        profession: { path: "profession.name", name: "Професия" },
        completedMeetings: {
            path: "completedMeetings",
            name: "Встретился(раз)"
        },
        rate: { path: "rate", name: "Оценка" },
        bookmark: {
            path: "bookmark",
            name: "Избранное",
            component: (user) => (
                <BookMark
                    status={user.bookmark}
                    onHandle={() => onHandle(user._id)}
                />
            )
        },
        delete: {
            component: (user) => (
                <button
                    onClick={() => onDelete(user._id)}
                    className="btn m-1 btn-outline-danger"
                >
                    Удалить
                </button>
            )
        }
    };
    return (
        <Table
            onSort={onSort}
            selectedSort={selectedSort}
            columns={columns}
            data={users}
        >
            <TableHeader {...{ onSort, selectedSort, columns }} />
            <TableBody {...{ columns, data: users }} />
        </Table>
    );
};

UsersTable.propTypes = {
    users: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    onHandle: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default UsersTable;
