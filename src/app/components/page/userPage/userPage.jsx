import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import QualitiesList from "../../ui/qaulities";
import { useNavigate , useParams } from "react-router-dom";

const UserPage = ({ userId }) => {
    const navigation = useNavigate();
    const params = useParams();
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    },[]);
    if (user) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 shadow p-4">
                        <div>
                            <h1>{user.name}</h1>
                            <h2>Профессия: {user.profession.name}</h2>
                            <QualitiesList qualities={user.qualities} />
                            <h4>completedMetings: {user.completedMeetings}</h4>
                            <h2>Rate: {user.rate}/5</h2>
                            <button
                                className="btn btn-outline-success"
                                onClick={() =>
                                    navigation(`/users/${params.userId}/edit`)
                                }
                            >
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <h3 className=" d-flex justify-content-center">
                Загрузка данних о пользователе...
            </h3>
        );
    }
};

UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};
export default UserPage;
