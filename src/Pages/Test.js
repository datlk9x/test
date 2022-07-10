import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Test = () => {
	const api = axios.create({
		baseURL: 'https://pokeapi.co/api/v2/'
	})
	useEffect(() => {
		const fetchApi = async() => {
			const res = await api.get('/pokemon?limit=10&offset=0')
			console.log(res)
		}
		fetchApi()
	}, [])
  return (
	<div>Test</div>
  )
}

export default Test