import { Container, Header, Button } from "./Components";
import styled from "styled-components";
import logo from "../assets/logo.png"

export default function Home() {
    return (
        <>
            <Container>
                <Header>
                    <Right>
                        <img src={logo} alt="sartoria brasil" />
                    </Right>
                    <Left>
                        <ion-icon name="cart-outline"></ion-icon>
                        <ion-icon name="menu-outline"></ion-icon>
                    </Left>
                </Header>
                <Banners>
                    <Banner>
                        <img src="https://picsum.photos/400/300/?blur" alt="shoes" />
                        <div className="textImage">Shoes</div>
                    </Banner>
                    <Banner>
                        <img src="https://picsum.photos/400/300/?blur" alt="shoes" />
                        <div className="textImage">Shoes</div>
                    </Banner>
                    <Banner>
                        <img src="https://picsum.photos/400/300/?blur" alt="shoes" />
                        <div className="textImage">Shoes</div>
                    </Banner>
                    <Products>
                        <Product>
                            <img src="http://picsum.photos/150/150" alt="product" />
                            <div className="product-name">
                                CAMISETA TAL
                            </div>
                            <div className="product-price">
                                R$50,00
                            </div>
                            <div className="product-price-2">
                                <span>10</span>X DE <span>R$5,00</span>
                            </div>
                        </Product>
                        <Product>
                            <img src="http://picsum.photos/150/150" alt="product" />
                            <div className="product-name">
                                CAMISETA TAL
                            </div>
                            <div className="product-price">
                                R$50,00
                            </div>
                            <div className="product-price-2">
                                <span>10</span>X DE <span>R$5,00</span>
                            </div>
                        </Product>
                        <Product>
                            <img src="http://picsum.photos/150/150" alt="product" />
                            <div className="product-name">
                                CAMISETA TAL
                            </div>
                            <div className="product-price">
                                R$50,00
                            </div>
                            <div className="product-price-2">
                                <span>10</span>X DE <span>R$5,00</span>
                            </div>
                        </Product>
                        <Product>
                            <img src="http://picsum.photos/150/150" alt="product" />
                            <div className="product-name">
                                CAMISETA TAL
                            </div>
                            <div className="product-price">
                                R$50,00
                            </div>
                            <div className="product-price-2">
                                <span>10</span>X DE <span>R$5,00</span>
                            </div>
                        </Product>
                        <Product>
                            <img src="http://picsum.photos/150/150" alt="product" />
                            <div className="product-name">
                                CAMISETA TAL
                            </div>
                            <div className="product-price">
                                R$50,00
                            </div>
                            <div className="product-price-2">
                                <span>10</span>X DE <span>R$5,00</span>
                            </div>
                        </Product>
                        <Product>
                            <img src="http://picsum.photos/150/150" alt="product" />
                            <div className="product-name">
                                CAMISETA TAL
                            </div>
                            <div className="product-price">
                                R$50,00
                            </div>
                            <div className="product-price-2">
                                <span>10</span>X DE <span>R$5,00</span>
                            </div>
                        </Product>
                    </Products>
                    <Button>VER TODOS OS PRODUTOS</Button>
                    <Footer>
                        <div className="navigation">
                            <div className="title">
                                <p>NAVEGAÇÃO</p>
                            </div>

                            <div className="links">
                                <a href="/">home</a>
                                <a href="/">produtos</a>
                                <a href="/">contato</a>
                                <a href="/">perguntas frequentes</a>
                            </div>
                        </div>
                        <div className="payment-methods">
                            <div className="title">
                                <p>FORMAS DE PAGAMENTO</p>
                            </div>

                            <div className="methods">
                                <img src="https://picsum.photos/40/30" alt="boleto" />
                                <img src="https://picsum.photos/40/30" alt="boleto" />
                                <img src="https://picsum.photos/40/30" alt="boleto" />
                                <img src="https://picsum.photos/40/30" alt="boleto" />
                                <img src="https://picsum.photos/40/30" alt="boleto" />
                                <img src="https://picsum.photos/40/30" alt="boleto" />
                                <img src="https://picsum.photos/40/30" alt="boleto" />
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

const Left = styled.div`
    display: flex;
    gap: 15px;

    ion-icon{
        font-size: 34px;
    }
`
const Right = styled.div`
    display: flex;

    img{
        height: 60px;
    }
`

const Banners = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;

    margin: 16px 0px;
`

const Banner = styled.div`
    position: relative;
    text-align: center;

    .textImage {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%)
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
    height: 230px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;

    color: #946540;

    .product-name{
        font-weight: normal;
    }

    .product-price{
        font-weight: 700;
    }

    .product-price-2{
        font-size: 14px;

        span{
            font-weight: bold;
        }
    }
`

const Footer = styled.div`
    width: 100%;

    margin-left: 30px;

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