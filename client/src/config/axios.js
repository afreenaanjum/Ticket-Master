import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'https://ticket-master-2019.herokuapp.com:' + process.env.PORT || 'http://localhost:3005'
})

const axios = Axios;

export default axios