import Axios from 'axios'

const axios = Axios.create({
    baseURL: process.env.baseURL || 'http://localhost:3005'
})

export default axios