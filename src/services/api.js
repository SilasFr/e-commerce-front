import axios from "axios";

// const BASE_URL = "https://e-commerce-sartoria-brasil.herokuapp.com";
const BASE_URL = "http://localhost:5000";

async function createUser(user) {
  await axios.post(`${BASE_URL}/users`, user);
}

async function login(user) {
  const token = await axios.post(`${BASE_URL}/login`, user);

  return token;
}

async function getProducts({ token }) {
  const products = await axios.get(`${BASE_URL}/products`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return products;
}

async function getSingleProduct(params, token) {
  const product = await axios.get(
    `${BASE_URL}/products/${params.category}/${params.id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return product;
}

async function addToCart(product, token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const result = await axios.post(`${BASE_URL}/add-to-cart`, product, config);
  return result;
}

async function getCart(token) {
  const result = await axios.get(`${BASE_URL}/get-cart`, token);
  return result;
}

async function loadCategory(category) {
  const newCategory = await axios.get(`${BASE_URL}/category/${category}`);
  return newCategory.data;
}

const api = {
  createUser,
  login,
  getProducts,
  getSingleProduct,
  addToCart,
  getCart,
  loadCategory,
};

export default api;
