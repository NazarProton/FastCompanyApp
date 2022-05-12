import React, { useEffect, useState } from "react";
import TextField from "../common/form/textField";
import { validator } from "../../utils/validator";
import CheckBoxField from "../common/form/checkBoxField";
import { useAuth } from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate();
    const params = useLocation();
    const [data, SetData] = useState({
        email: "",
        password: "",
        stayOn: false
    });
    const { logIn } = useAuth();
    const [errors, setErrors] = useState({});
    const [enterError, setEnterError] = useState(null);
    const handleChange = (target) => {
        SetData((prevState) => ({ ...prevState, [target.name]: target.value }));
        setEnterError(null);
    };
    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна к заполнению"
            }
        },
        password: {
            isRequired: {
                message: "Пароль обязателен к заполнению"
            }
        }
    };

    useEffect(() => {
        validate();
    }, [data]);
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        console.log(data);
        try {
            await logIn(data);
            navigate(params.state ? params.state : "/");
        } catch (error) {
            setEnterError(error.message);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Электронная почта:"
                name="email"
                value={data.email}
                onChange={handleChange}
                error={errors.email}
            />
            <TextField
                label="Пароль:"
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                error={errors.password}
            />
            <CheckBoxField
                value={data.stayOn}
                onChange={handleChange}
                name="stayOn"
            >
                Оставаться в системе
            </CheckBoxField>
            {enterError && <p className="text-danger">{enterError}</p>}
            <button
                type="submit"
                className="btn btn-success w-100"
                disabled={!isValid || enterError}
            >
                Войти
            </button>
        </form>
    );
};

export default LoginForm;
