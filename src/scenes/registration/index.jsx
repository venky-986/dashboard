import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';
import { Button } from "@mui/material";

const RegistrationForm = () => {
    const initialValues = {
        firstname: '',
        middlename: '',
        lastname: '',
        email: '',
        phonenumber: '',
        username: '',
        password: '',
        accesslevel: '',
        status: ''
    }

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const validationSchema = Yup.object({
        firstname: Yup.string().required('First name cannot be empty.'),//.test('len', 'Must be atleast 6 characters', val => val.length <= 5),
        middlename: Yup.string().required('First name cannot be empty.'),
        lastname: Yup.string().required('First name cannot be empty.'),
        email: Yup.string().email('Invalid email format'),
        password: Yup.string().required('Password is required.'),
        phonenumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
        username: Yup.string().required('username is mandatory'),
    })

    const onSubmit = values => {
        console.log('form data', values);
    }

    return <Formik enableReinitialize initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {
            formik => {
                return <Form>
                    <div className="form-control">
                        <label htmlFor="firstname">First Name</label>
                        <Field id='firstname' name='firstname' type='text' />
                    </div>
                    <div className="form-control">
                        <label htmlFor="middlename">Middle Name</label>
                        <Field id='middlename' name='middlename' type='text' />
                    </div>
                    <div className="form-control">
                        <label htmlFor="lastname">Last Name</label>
                        <Field id='lastname' name='lastname' type='text' />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <Field id='email' name='email' type='email' />
                    </div>
                    <div className="form-control">
                        <label htmlFor="phonenumber">Phone Number</label>
                        <Field id='phonenumber' name='phonenumber' type='text' />
                    </div>
                    <div className="form-control">
                        <label htmlFor="username">Username</label>
                        <Field id='username' name='username' type='text' />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <Field id='password' name='password' type='password' />
                    </div>
                    <Button type='submit'>Submit</Button>
                </Form>
            }
        }
    </Formik>
}

export default RegistrationForm;