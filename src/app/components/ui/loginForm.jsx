import React, { useEffect, useState } from "react";
import TextField from "../common/form/textField";
import { validator } from "../../utils/validator";
import CheckBoxField from "../common/form/checkBoxField";

const LoginForm = () => {
const [data, SetData] = useState({ email: "", password: "" , stayOn: false});
    const [errors, setErrors] = useState({});
    const handleChange = (target) => {
        SetData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна к заполнению"
            },
            isEmail: {
                message: "Введите корректный Email"
            }
        },
        password: {
            isRequired: {
                message: "Пароль обязателен к заполнению"
            },
            isCapitalSymbol: {
                message: "Пароль должен содержать минимум одну прописную букву"
            },
            isContainDigit: {
                message: "Пароль должен содержать минимум одну цифру"
            },
            minLength: {
                message: "Пароль должен иметь не менее 8 символов"
            }
        }
    };

    useEffect(() => {
        validate();
    }, [data]);
    const validate = () => {
        const errors = validator(data , validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        console.log(data);
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
            <button
                type="submit"
                className="btn btn-success w-100"
                disabled={!isValid}
            >
                Войти
            </button>
        </form>
    ); 
};
 
export default LoginForm;