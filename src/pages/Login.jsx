import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext.js";
import api from "../services/api.js";

import { Container, NavHeader, Form, Input, Button } from "./Components.jsx";

export default function Login() {
  const navigate = useNavigate();
  const { setToken } = useContext(AuthContext)

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange({ target }) {
    setFormData({ ...formData, [target.name]: target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const user = { ...formData };

    try {
      const promisse = api.login(user);

      promisse.then(response => {
        setToken(response.data)
        navigate("/home");
      })

      promisse.catch(error => {
        alert(error.message)
      })

    } catch (error) {
      alert("Erro, tente novamente", error);
    }
  }

  return (
    <>
      <Container>
        <NavHeader></NavHeader>
        <Form>
          <Input
            value={formData.email}
            placeholder="Email"
            name="email"
            type="email"
            onChange={(e) => handleChange(e)}
          />
          <Input
            value={formData.password}
            placeholder="Senha"
            name="password"
            type="password"
            onChange={(e) => handleChange(e)}
          />
          <Button onClick={handleSubmit} type="submit">
            Entrar
          </Button>
        </Form>
      </Container>
    </>
  );
}
