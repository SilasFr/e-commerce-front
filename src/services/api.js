import axios from "axios";

const BASE_URL = "http://localhost:5000";
// const BASE_URL = "https://e-commerce-sartoria-brasil.herokuapp.com";

async function createUser(user) {
  await axios.post(`${BASE_URL}/users`, user);
}

async function login(user) {
  const token = await axios.post(`${BASE_URL}/login`, user);

  return token;
}

async function getProducts() {
  const products = await axios.get(`${BASE_URL}/products`);
  return products;
}

async function getSingleProduct(params) {
  const product = await axios.get(
    `${BASE_URL}/products/${params.category}/${params.id}`
  );
  return product;
}

async function addToCart(product, token) {
  const result = await axios.post(`${BASE_URL}/add-to-cart`, product, {
    headers: { Authentication: `Bearer ${token}` },
  });
  return result;
}

const api = {
  createUser,
  login,
  getProducts,
  getSingleProduct,
  addToCart,
};

export default api;
