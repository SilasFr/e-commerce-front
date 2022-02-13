import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api.js";

import { Container, Header, Form, Input, Button } from "./Components.jsx";

export default function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange({ target }) {
    setFormData({ ...formData, [target.name]: target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const user = { ...formData };

    try {
      await api.login(user);
      navigate("/");
    } catch (error) {
      alert("Erro, tente novamente", error);
    }
  }

  return (
    <>
      <Container>
        <Header>
          logo
          <span>menu</span>
        </Header>
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
