import axios from './axios'
 
export const api = async () => {
  try {
    const { data } = await axios.get('/sanctum/csrf-cookie')
    return data
  } catch (e) {
    throw e
  }
}
