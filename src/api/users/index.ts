import { api } from '../instance'
import { User } from './types'

export const getUsers = async () => {
  try {
    const response = await api.get<User[]>('/users')
    return response.data
  } catch (error) {
    console.error(error)
    return []
  }
}
