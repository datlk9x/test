import React from 'react'
import styled from 'styled-components'
import Footer from '../Componenents/Footer'
import Input from '../Componenents/Input'
const ForgetPass = () => {

	const Layout = styled.div`
		background-color: #f3f4f6;
		width: 100%;
		height: 900px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-flow: column;
	`
	const Form = styled.form`
		width: 478px;
		height: 375px;
		background-color: #fff;
		padding: 35px;
		box-sizing: border-box;
	`
  return (
	<Layout>
		<Form className='card'>
			<h4 className='card-title text-center'>FORGOT YOUR PASSWORD ?</h4>
			<div className='card-body'>
				<span className='text-center d-block'>To reset your password, enter the email address that you used to set up your account. We'll send you a link to help you get back into your account.</span>
				<Input placeholder='Email' type='email'/>
				<button className='btn btn-facf86 form-control text-white my-3'>Send</button>
			</div>
		</Form>

		<Footer/>
	</Layout>
  )
}

export default ForgetPass