import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext.js";
import api from "../services/api.js";
import logoIcon from "../assets/transparent-icon.png";

import {
  Container,
  Form,
  Input,
  Button,
  Header,
} from "./Components.jsx";

export default function Login() {
  const navigate = useNavigate();
  const { setToken } = useContext(AuthContext);

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

      promisse.then((response) => {
        setToken(response.data);
        navigate("/home");
      });

      promisse.catch((error) => {
        alert(error.message);
      });
    } catch (error) {
      alert("Erro, tente novamente", error);
    }
  }

  return (
    <>
      <Container>
        <Header>
          <div className="nav">
            <div className="logo">
              <img
                src={logoIcon}
                alt="logo"
                onClick={() => {
                  navigate("/home");
                }}
              />
            </div>
            <ion-icon
              name="arrow-dropleft"
              className="return"
              onClick={() => navigate(-1)}
            ></ion-icon>
          </div>
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

        <Link to="/sign-up">Ainda não tem uma conta? Cadastre-se!</Link>
      </Container>
    </>
  );
}
