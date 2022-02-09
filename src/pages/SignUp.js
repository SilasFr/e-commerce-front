import { useState } from "react"
import { Container, Header, Form, Input, Button } from "./Components.js"


export default function SignUp() {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:''
    })

    function handleChange({ target }) {
        setFormData({ ...formData, [target.name]: target.value })
    }

    function handleSubmit(e){
        e.preventDefault()

        console.log(formData)
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