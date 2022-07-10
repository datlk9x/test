const ValidInfo = (values) => {
    let errors = {}

    if (!values.username.trim()) {
        errors.username = 'Username must be required!'
    }

    if (!values.email) {
        errors.email = 'Email must be required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Email is invalid!'
    }

    if (!values.password) {
        errors.password = 'Password must be required!'
    }

    return errors
}

export default ValidInfo