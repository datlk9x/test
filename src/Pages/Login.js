import React, { useState } from 'react'
import styled from 'styled-components'
import Footer from '../Componenents/Footer'
import Input from '../Componenents/Input'
const Login = () => {
	const [email,setEmail] = useState('')
	const [password, setPassword] = useState('')
	const Layout = styled.div`
		background-color: #f3f4f6;
		width: 100%;
		height: 1000px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-flow: column;
	`
	const Form = styled.form`
		width: 478px;
		height: 400px;
		background-color: #fff;
		padding: 35px;
		box-sizing: border-box;
	`

	const handleChange = newVal => {
		setEmail(newVal)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log('working')
	}
  return (
		<Layout>
			<Form className='card' onSubmit={handleSubmit}>
				<h4 className='card-title text-center'>LOG IN TO YOUR ACCOUNT</h4>
				<div className='card-body'>
			  		<Input title='Email' type='email'/>
			  		<Input title='Password' type='password'/>
					<button className='btn btn-facf86 w-100 text-white my-3'>Login</button>
					<a className='text-center d-block my-2' href='/forget-pass'>Forgot your password?</a>
				</div>
				<p>{email}</p>
			</Form>
			<p className='text-center my-4'>Don't have an account? <a href='/signup'>Register</a></p>

			<Footer />
		</Layout>
  )
}

export default Login