import React from 'react'

const Input = ({title, type, placeholder, name, value, onChange}) => {
  return (
	<div>
		<label>{ title }</label>
		<input className='form-control my-3' type={ type } placeholder={ placeholder}/>
		
	</div>
  )
}

export default Input