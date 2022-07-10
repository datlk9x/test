import styled from 'styled-components'
import Footer from '../Componenents/Footer'
import Input from '../Componenents/Input'
import useForm from '../Hooks/useForm'
import validate from '../Componenents/ValidInfo'

const Register = () => {
	const {handleChange, values, errors} = useForm(validate)

	const Layout = styled.div`
	background-color: #f3f4f6;
	width: 100%;
	height: 1150px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: column;
	`
	const Form = styled.form`
		width: 478px;
		height: 550px;
		background-color: #fff;
		padding: 35px;
		box-sizing: border-box;
	`
	return (
		<Layout>
			<Form className='card'>
				<h4 className='card-title text-center'>REGISTER</h4>
				<div className='card-body'>
					<Input title='Username' type='text' name='username'/>

					<Input title='Email' type='email' name='email'/>

					<Input title='Password' type='password' name='password'/>

					<button type='submit' className='btn btn-facf86 form-control text-white my-3'>Register</button>
					<span className='fz-11'>By registering I confirm I have read and agree to Terms of Use. We send occasional marketing messages which can be switched off in account settings. We manage personal data as set out in our Privacy Notice.</span>
				</div>
			</Form>
			<p className='text-center my-4'>Already have an account? <a href='/login'>Login</a></p>

			<Footer />
		</Layout>
	)
}

export default Register