import React from 'react'
import './App.scss'
import Navbar from './Componenents/Navbar/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import ContactUs from './Pages/ContactUs'
import AboutUs from './Pages/AboutUs'
import Brand from './Componenents/Brand'
import DepositWithdraw from './Pages/DepositWithdraw'
import Login from './Pages/Login'
import ForgetPass from './Pages/ForgetPass'
import Register from './Pages/Register'
import Test from './Pages/Test'
// test comment
const App = () => {
  return (
	<div>
		<Navbar />

		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<Register />} />
			<Route path="/about-us" element={<AboutUs />} />
			<Route path="/contact-us" element={<ContactUs />} />
			<Route path="/forget-pass" element={<ForgetPass />} />
			<Route path="/deposit-withdraw" element={<DepositWithdraw />} />
			<Route path="/test" element={<Test />} />

		</Routes>

		<Brand />
	</div>
  )
}

export default App