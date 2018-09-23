import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-6e59e.firebaseio.com/'
});

export default instance;