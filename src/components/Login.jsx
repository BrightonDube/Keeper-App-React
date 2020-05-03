//jshint esversion:9
import React, { useState } from "react";
import { Form } from "react-bootstrap";

const Login = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });
    const printDetails = event => {
        event.preventDefault();
        console.log(form.name, form.password);
    };

    const updateDetails = event => {
        const [name, value] = event.target;
        setForm({
            ...form,
            [name]: value
        });
    };
    return (
        <>
            <Form onSubmit={printDetails}>
                <input class="" name="name" onChange={updateDetails} value={form.name} />
                <input type="email" name="email" onChange={updateDetails} value={form.email} />
                <input type="password" name="password" onChange={updateDetails} value={form.password} />
                <button class="btn btn-lg btn-primary" type="submit">Login</button>
            </Form>
        </>
    );
};
export default Login;