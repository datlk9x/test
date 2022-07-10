import { useState } from 'react'

const useForm = (validate) => {
    const [values, setValues] = useState({
        username: '',
        password: '',
        email: ''
    })
    const [errors, setErrors] = useState({})

    const handleChange = e => {
        const { name, value } = e.target
        setValues({...values, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()
		
        setErrors(validate(values))
    }

    return { values, handleChange, handleSubmit, errors }
}


export default useForm