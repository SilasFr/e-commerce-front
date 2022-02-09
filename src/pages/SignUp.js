import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Header, Form, Input, Button } from "./Components.js"
import api from "../services/api.js"


export default function SignUp() {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:''
    })

    function handleChange({ target }) {
        setFormData({ ...formData, [target.name]: target.value })
    }

    async function handleSubmit(e){
        e.preventDefault()

        if (formData.password !== formData.confirmPassword) {
            alert("As senhas devem ser iguais")
            return
        }
      
        const user = { ...formData }
        delete user.confirmPassword
      
        try {
            await api.createUser(user)
            navigate('/')
        } catch (error) {
            console.log(error)
            alert("Erro, tente novamente")
        }
    }

    return(
        <>
        <Container>
            <Header>
                logo
                <span>menu</span>
            </Header>
            <Form>
                <Input
                    value={formData.name}
                    placeholder="Nome completo"
                    name="name"
                    type="text"
                    onChange={(e) => handleChange(e)}
                />
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
                <Input
                    value={formData.confirmPassword}
                    placeholder="Confirme a senha"
                    name="confirmPassword"
                    type="password"
                    onChange={(e) => handleChange(e)}
                />
                <Button onClick={handleSubmit} type="submit">Cadastrar</Button>
            </Form>
        </Container>
        </>
    )
}