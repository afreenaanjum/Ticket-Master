import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'https://ticket-master-2019.herokuapp.com:' + process.env.PORT
    // baseURL: 'http://localhost:3005'
})

export default axios