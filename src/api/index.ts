import axios from 'axios'

const api = axios.create({
	baseURL: process.env.API_URl,
	timeout: 1000,
	headers: {
		'Content-Type': 'application/json',
		withCredentials: true,
		credentials: 'include',
	}
})

export default api
