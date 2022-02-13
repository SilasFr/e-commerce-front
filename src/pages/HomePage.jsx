import { Container, Button, NavHeader } from "./Components.jsx";
import styled from "styled-components";
import api from "../services/api.js";
import { useEffect, useState } from 'react'
import Dinero from "dinero.js";
import { useNavigate } from "react-router-dom";

export default function Home() {
    // passar a categoria do produto e o id no onClick - ok
    // header não está exatamente fixo no topo, não sei o que tá rolando - ok
    // parece estar acontecendo algo estranho, se der scroll pro lado a tela se move - ok
    // context pra passar o token

    const [products, setProducts] = useState([])
    const navigate = useNavigate()

    function categorizeObject(array, category){
        const categorizedObjectsArray = array.map(object => ({
            ...object,
            category: category
        }))

        return categorizedObjectsArray
    }

    useEffect(() => {
        const promisse = api.getProducts()
        promisse.then((response) => {
            const shoes = categorizeObject(response.data[0].products.slice(0,3), "shoes")
            const shirts = categorizeObject(response.data[1].products.slice(0,3), "shirts")
            const jackets = categorizeObject(response.data[2].products.slice(0,4), "jackets")
            const products = [...shoes, ...shirts, ...jackets]
            setProducts(products)
        })
        promisse.catch((error) => {
            console.log(error)
        })
    }, [])

    function priceFormatter(number) {
        const price = Dinero({
            amount: parseInt(number),
            currency: "BRL",
            precision: 2,
          })
        .toFormat("$0,0.00")
        .replace(".", ",");

        return price
    }

    function handleClick(category, id, event) {
        event.preventDefault()

        navigate(`/product/${category}/${id}`)
    }

    return (
        <>
            <Container>
                <NavHeader></NavHeader>
                <Banners>
                    <Banner>
                        <img src="https://picsum.photos/400/300/?blur" alt="shoes" />
                        <div className="textImage">SHOES</div>
                    </Banner>
                    <Banner>
                        <img src="https://picsum.photos/400/300/?blur" alt="shoes" />
                        <div className="textImage">SHIRTS</div>
                    </Banner>
                    <Banner>
                        <img src="https://picsum.photos/400/300/?blur" alt="shoes" />
                        <div className="textImage">JACKETS</div>
                    </Banner>
                    <Products>
                        {console.log(products)}
                        {
                            products.map(product => {
                                return(
                                    <Product onClick={(e) => handleClick(product.category, product.id, e)}>
                                        <img src={product.url} alt={product.name} />
                                        <div className="product-info">
                                            <div className="product-name">
                                                {product.name}
                                            </div>
                                            <div className="product-price">
                                                {priceFormatter(product.price)}
                                            </div>
                                            <div className="product-price-2">
                                                <span>10</span>X DE <span>{priceFormatter(product.price / 10)}</span>
                                            </div>
                                        </div>
                                    </Product>
                                )
                            })
                        }
                    </Products>
                    <Button>VER TODOS OS PRODUTOS</Button>
                    <Footer>
                        <div className="navigation">
                            <div className="title">
                                <p>NAVEGAÇÃO</p>
                            </div>

                            <div className="links">
                                <a href="/home">home</a>
                                <a href="/all-products">produtos</a>
                                <a href="/contact-us">contato</a>
                            </div>
                        </div>
                        <div className="payment-methods">
                            <div className="title">
                                <p>FORMAS DE PAGAMENTO</p>
                            </div>

                            <div className="methods">
                                <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png" alt="visa" />
                                <img src="https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png" alt="mastercard" />
                            </div>
                        </div>
                        <div className="contact">
                            <div className="title">
                                <p>CONTATO</p>
                            </div>
                            <div className="contact-methods">
                                <p>41 989876766</p>
                                <p>contato@sartoriabrasil.com</p>
                                <p>Av Sete de Setembro, 3165, Rebouças, Curitiba - PR</p>
                            </div>
                        </div>
                    </Footer>
                </Banners>
            </Container>
        </>
    )
}

const Banners = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;

    margin: 16px 0px;
`

const Banner = styled.div`
    width: 100vw;
    position: relative;
    text-align: center;

    .textImage {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        color: #946540;
        font-size: 22px;
    }

    img {
        width: 100vw;
    }
`

const Products = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;

    padding: 0px 10px;
`

const Product = styled.div`
    width: calc(50% - 10px);
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    cursor: pointer;

    color: #946540;

    img{
        width: 100%;
    }

    .product-info{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 8px;

        margin-top: 4px;

        .product-name{
            font-weight: normal;
            text-align: center;
        }

        .product-price{
            font-weight: 700;
        }

        .product-price-2{
            justify-self: flex-end;
            font-size: 14px;

            span{
                font-weight: bold;
            }
        }
    }
`

const Footer = styled.div`
    width: 100%;
    padding-left: 20px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .navigation{
        margin-bottom: 20px;
        
        .title{
            font-size: 14px;
            font-weight: bold;
            color: #64543C;
            margin-bottom: 16px;
        }
        
        .links{
            a{
                text-decoration: none;
                color: #64543C;
            }

            display: flex;
            flex-direction: column;
            gap: 16px;
        }
    }

    .payment-methods{
        margin-bottom: 20px;
        
        .title{
            font-size: 14px;
            font-weight: bold;
            color: #64543C;
            margin-bottom: 16px;
        }

        .methods{
            display: flex;
            flex-wrap: wrap;
            gap: 4px;

            img {
                width: 40px;
            }
        }
    }

    .contact{
        .title{
            font-size: 14px;
            font-weight: bold;
            color: #64543C;
            margin-bottom: 16px;
        }

        .contact-methods{
            display: flex;
            flex-direction: column;
            gap: 16px;

            font-size: 14px;
            color: #64543C;
        }
    }
`