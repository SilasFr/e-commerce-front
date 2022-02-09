import styled from "styled-components";

const Header = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #FCFCF7;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.15);

    padding: 0px 20px;

    color: #BC9E77;
`
const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #FCFCF7;
`
const Form = styled.form`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    padding: 0 15px;
    
    margin: 30px 0px;
`
const Input = styled.input`
    width: 100%;
    height: 50px;

    border: 1px solid #DECFC3;

    background-color: #FFF;

    padding: 15px 15px;

    color: #000;

    font-style: normal;
    font-weight: normal;
    font-size: 17.976px;
    line-height: 22px;
    text-align: justify;

    ::placeholder{
        font-style: normal;
        font-weight: normal;
        font-size: 17.976px;
        line-height: 22px;
        text-align: justify;

        color: #000;
    }
`
const Button = styled.button`
    width: 100%;
    height: 60px;

    border: none;

    background-color: #BC9E77;

    color: #FCFCF7;

    font-style: normal;
    font-weight: normal;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;

    margin-top: 20px;
`

export {
    Container,
    Header,
    Form,
    Input,
    Button,
}