import React from "react";
import { Formik, Form, Field , ErrorMessage} from "formik";
import * as yup from 'yup';

const LoginForm = () => {
    const validationSchema = yup.object({
        username: yup.string().required('Username cannot be empty.'),
        password: yup.string().required('Password cannot be empty.')
    })

    const onSubmit = async (values) => {
        console.log(values);
    }

    return (
        <Formik initialValues={{username: '', password: ''}} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form>
                <label htmlFor='Username'>
 ``               Email
                </label>
                <Field id='username' name='username' />
                <ErrorMessage component='a' name='username' />
                <label htmlFor='Password'>
``                Password
                </label>
                <Field id='password' name='password' />
                <ErrorMessage component='a' name='password' />
                <div className='mt-8'>
                    <button type='submit'>
                        Login
                    </button>
                </div>
            </Form>
        </Formik>
    )
}

export default LoginForm;