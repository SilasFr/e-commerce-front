import axios from 'axios';

const BASE_URL = 'https://e-commerce-sartoria-brasil.herokuapp.com';


async function createUser(user) {
  await axios.post(`${BASE_URL}/users`, user);
}

const api = {
    createUser
}

export default api