import axios from 'axios';

const BASE_URL = 'https://e-commerce-sartoria-brasil.herokuapp.com';


async function createUser(user) {
  await axios.post(`${BASE_URL}/users`, user);
}

async function login(user) {
  const token = await axios.post(`${BASE_URL}/login`, user)

  return token
}

const api = {
    createUser,
    login
}

export default api