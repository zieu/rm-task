import axios from 'axios'

export const BASE_URL = 'https://fakestoreapi.com'

export const api = axios.create({
  baseURL: 'https://fakestoreapi.com',
})
