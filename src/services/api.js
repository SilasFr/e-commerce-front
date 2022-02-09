import axios from 'axios';

const BASE_URL = 'http://localhost:5000';


async function createUser(user) {
  await axios.post(`${BASE_URL}/users`, user);
}

const api = {
    createUser
}

export default api