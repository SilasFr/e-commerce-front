import axios from "axios";

// const BASE_URL = "http://localhost:5000";
const BASE_URL = "https://e-commerce-sartoria-brasil.herokuapp.com";

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
        "Authorization": `Bearer ${token}`
      }
    }
  )

  return products;
}

async function getSingleProduct(params, token) {
  const product = await axios.get(
    `${BASE_URL}/products/${params.category}/${params.id}`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }
  );
  return product;
}

const api = {
  createUser,
  login,
  getProducts,
  getSingleProduct,
};

export default api;
