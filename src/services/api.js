import axios from 'axios';

const BASE_URL = 'mongodb+srv://e-commerce:admin@cluster0.znct4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';


async function createUser(user) {
  await axios.post(`${BASE_URL}/users`, user);
}

const api = {
    createUser
}

export default api