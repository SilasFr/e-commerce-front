import Dinero from "dinero.js";
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext.js";
import { Container, Button, NavHeader, Banners, Banner, HomeProducts, HomeProduct, Footer } from "./Components.jsx";
import api from "../services/api.js";

export default function Home() {
    // passar a categoria do produto e o id no onClick - ok
    // header não está exatamente fixo no topo, não sei o que tá rolando - ok
    // parece estar acontecendo algo estranho, se der scroll pro lado a tela se move - ok
    // context pra passar o token

    const { token } = useContext(AuthContext)

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
        const promisse = api.getProducts({ token })
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
                    <HomeProducts>
                        {
                            products.map(product => {
                                return(
                                    <HomeProduct key={product.name} onClick={(e) => handleClick(product.category, product.id, e)}>
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
                                    </HomeProduct>
                                )
                            })
                        }
                    </HomeProducts>
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